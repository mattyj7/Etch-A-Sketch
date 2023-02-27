const container = document.getElementById("grid");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    // cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
  const gridItem = document.getElementsByClassName("grid-item");
  gridItem.style.width = "100px" ;
}; 

makeRows(16, 16);