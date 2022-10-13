'use strict';
// Variables
const grid = document.querySelector('#grid');
const gridSlider = document.querySelector('#grid-slider');

// Create grid elements
const createGrid = function (gridCount) {
  for (let i = 0; i < gridCount * gridCount; i++) {
    const newGridElements = document.createElement('div');
    newGridElements.classList.add('newGrids');
    newGridElements.style.height = `${960 / gridCount}px`;
    newGridElements.style.width = `${960 / gridCount}px`;
    grid.appendChild(newGridElements);
  }
};
createGrid(gridSlider.value);

// Change grid counts with slider
gridSlider.addEventListener('click', function () {
  const divAll = document.querySelectorAll('.newGrids');
  divAll.forEach((div) => div.remove());

  // Create new grids again with value update
  createGrid(gridSlider.value);

  document.querySelector(
    '#slider-text'
  ).textContent = `${gridSlider.value}x${gridSlider.value}`;
});
