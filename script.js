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

function changeTileColor(color) {
  const tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => {
    tile.addEventListener('mouseover', () => {
      switch (color) {
        case 'rainbow':
          tile.style.backgroundColor = randomColor();
          break;
        case 'grayscale':
          if (tile.style.backgroundColor.slice(0, 4) === 'rgba') {
            let opacity = parseFloat(tile.style.backgroundColor.slice(-4, -1));
            if (opacity <= 0.9) {
              tile.style.backgroundColor = `rgba(0, 0, 0, ${opacity + 0.1})`;
            }
          }
          else if (tile.style.backgroundColor == 'rgb(0, 0, 0)') {
            return;
          }
          else {
            tile.style.backgroundColor = 'rgba(0, 0, 0, 0.1)';
          }
          break;
        default:
          tile.style.backgroundColor = 'black';
      }

/*
      let tileColor = (color === 'rainbow') ? randomColor() : 'rgba(0, 0, 0, 1)';
      if (color === 'grayscale') {
        let opacity = tile.style.opacity;
        tile.style.opacity = opacity ? parseFloat(tile.style.opacity) + 0.1 : 0.1;
      }

      tile.style.backgroundColor = tileColor;
*/
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