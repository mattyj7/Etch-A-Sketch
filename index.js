const container = document.getElementById("grid");
const output = document.getElementById("output");
const range = document.getElementById("myRange").step = "2";
const value = document.getElementById("myRange").value
const slider = document.getElementById("myRange");



function reset () {
  let grid = document.querySelectorAll(".grid");
  for(let i=0; i<grid.length; i++) {
       grid[i].style.width = (300/slider.value) + "px";
       grid[i].style.height = (300/slider.value) + "px";
  }
}

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
   };
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.classList.add("grid");
    cell.addEventListener('mouseover', changeColor);
    cell.addEventListener('mousedown', changeColor)
    container.appendChild(cell);
  };
  reset();
}; 

function changeColor (e) {
  e.target.style.backgroundColor = 'black';
}

function changeColor (e) {
  e.target.style.backgroundColor = 'black';
}

output.innerHTML = slider.value + " x " + slider.value;
makeRows(4, 4)
slider.oninput =function(){output.innerHTML = slider.value + " x " + slider.value;}

slider.addEventListener('mouseup', function(){ makeRows(slider.value, slider.value)});