const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement('div');
    div.classList.add("grid-item");
    //div.textContent = i * 16 + j + 1;
    container.appendChild(div);
  }
}

const gridItems = document.querySelectorAll("#grid-item");
gridItems.forEach(gridItem => {
  gridItem.addEventListener('mouseenter', () => {
    console.log(gridItem);
    gridItem.style.backgroundColor = "blue";
  });
});