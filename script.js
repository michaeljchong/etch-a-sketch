const container = document.getElementById("container");

function initializeGrid(gridSize) {
  for (let i = 0; i < gridSize**2; i++) {
    const div = document.createElement('div');
    div.classList.add("grid-item");
    container.appendChild(div);
  }
}

function changeGridColor() {
  const gridItems = document.querySelectorAll(".grid-item");
  gridItems.forEach(gridItem => {
    gridItem.addEventListener('mouseover', () => {
      gridItem.style.backgroundColor = "blue";
    });
  });
}

function clearScreen() {
  const gridSize = prompt("How many squares per side?", 16);
  container.innerHTML = "";
  container.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  initializeGrid(gridSize);
  changeGridColor();
}

initializeGrid(16);
changeGridColor();
const clearScreenBtn = document.getElementById("clearScreenBtn");
clearScreenBtn.addEventListener('click', clearScreen);