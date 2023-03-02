const container = document.getElementById("grid");
const output = document.getElementById("output");
const range = document.getElementById("myRange").step = "2";
const value = document.getElementById("myRange").value
const slider = document.getElementById("myRange");
const resetBtn = document.getElementById("reset");
const rainbow = document.getElementById("rainbow");
const black = document.getElementById("black");


let mode = true;

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
    // cell.addEventListener('mousedown', changeColor)
    container.appendChild(cell);
  };
  reset();
}; 

function changeColor (e) {
  if(mode === true) {
  e.target.style.backgroundColor = 'black';
  }
  else if (mode === false) {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    e.target.style.backgroundColor = `rgb(${x}, ${y}, ${z})`;
  }
}

function defaultReset () {
  makeRows(slider.value, slider.value)
}

function changeMode () {
  mode = false;
}

function modeDefault () {
  mode = true;
}

output.innerHTML = slider.value + " x " + slider.value + " pixels";
makeRows(4, 4)
slider.oninput =function(){output.innerHTML = slider.value + " x " + slider.value + " pixels";}

slider.addEventListener('mouseup', function(){ makeRows(slider.value, slider.value)});
resetBtn.addEventListener('mousedown', function(){ makeRows(slider.value, slider.value)});
rainbow.addEventListener('click', changeMode, true);
black.addEventListener('click', modeDefault, true);