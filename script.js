const grid = document.getElementById("grid");

function initializeGrid(gridSize) {
  for (let i = 0; i < gridSize**2; i++) {
    const tile = document.createElement('div');
    tile.classList.add("tile");
    grid.appendChild(tile);
  }
}

function changeTileColor() {
  const tiles = document.querySelectorAll(".tile");
  tiles.forEach(tile => {
    tile.addEventListener('mouseover', () => {
      tile.style.backgroundColor = "blue";
    });
  });
}

function clearScreen() {
  let gridSize = prompt("How many squares per side? (1-100)", 16);
  gridSize = (gridSize > 100) ? 100 : (gridSize < 1) ? 1 : gridSize;
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  initializeGrid(gridSize);
  changeTileColor();
}

initializeGrid(16);
changeTileColor();
const clearScreenBtn = document.getElementById("clearScreenBtn");
clearScreenBtn.addEventListener('click', clearScreen);