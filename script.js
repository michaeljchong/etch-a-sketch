const grid = document.getElementById('grid');

function initializeGrid(gridSize) {
  for (let i = 0; i < gridSize**2; i++) {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    grid.appendChild(tile);
  }
}

function randomColor() {
  const red = Math.floor((Math.random() * 255));
  const blue = Math.floor((Math.random() * 255));
  const green = Math.floor((Math.random() * 255));
  return `rgb(${red}, ${blue}, ${green})`;
}

function grayscale() {
  for (let a = 0.1; a < 1; a+=0.1) {
    return `rgba(0, 0, 0, ${a})`
  }
}

function changeTileColor(color) {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.addEventListener('mouseover', () => {
      let tileColor = (color === 'rainbow') ? 
          randomColor() : (color === 'grayscale') ? 
          grayscale() : 'black';
      tile.style.backgroundColor = tileColor;
    });
  });
}

function clearScreen() {
  let gridSize = prompt("How many squares per side? (1-100)", 16);
  gridSize = (gridSize > 100) ? 100 : (gridSize < 1) ? 1 : gridSize;
  grid.innerHTML = "";
  grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  initializeGrid(gridSize);
  changeTileColor(tileColor);
}

initializeGrid(16);
changeTileColor();

const blackBtn = document.getElementById('blackBtn');
blackBtn.addEventListener('click', changeTileColor);

const grayscaleBtn = document.getElementById('grayscaleBtn');
grayscaleBtn.addEventListener('click', () => {
  changeTileColor('grayscale');
});

const rainbowBtn = document.getElementById('rainbowBtn');
rainbowBtn.addEventListener('click', () => {
  changeTileColor('rainbow');
});

const clearScreenBtn = document.getElementById('clearScreenBtn');
clearScreenBtn.addEventListener('click', clearScreen);