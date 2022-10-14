'use strict';
// Variables
const mainGrid = document.querySelector('#main-grid');
const gridSlider = document.querySelector('#grid-slider');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('.rgb-btn');
let rainbowMode = 'off';

// Create new grid elements
const createGrid = function (gridCount) {
  for (let i = 0; i < gridCount * gridCount; i++) {
    const newGridElements = document.createElement('div');
    newGridElements.classList.add('newGrids');
    newGridElements.style.height = `${700 / gridCount}px`;
    newGridElements.style.width = `${700 / gridCount}px`;
    mainGrid.appendChild(newGridElements);
  }
};

// Grid x Grid slider
gridSlider.addEventListener('click', function () {
  rainbowMode = 'off';
  rainbowBtn.classList.remove('rainbowMode');

  const gridsAll = document.querySelectorAll('.newGrids');
  gridsAll.forEach((div) => div.remove());

  createGrid(gridSlider.value);
  paintGrid(colorPicker.value);

  document.querySelector(
    '#slider-text'
  ).textContent = `${gridSlider.value}x${gridSlider.value}`;
});

// Rainbow button
rainbowBtn.addEventListener('click', function () {
  // On
  if (rainbowMode == 'off') {
    rainbowBtn.classList.add('rainbowMode');
    rainbowBtn.textContent = 'Rainbow Mode On!';
    rainbowMode = 'on';

    // Off
  } else if (rainbowMode == 'on') {
    rainbowBtn.classList.remove('rainbowMode');
    rainbowBtn.textContent = 'Rainbow Mode Off!';
    rainbowMode = 'off';
  }
});

// Change grid color
const paintGrid = function () {
  const gridsAll = document.querySelectorAll('.newGrids');

  gridsAll.forEach((grid) =>
    grid.addEventListener('mouseover', function () {
      if (rainbowMode == 'on') {
        const r = Math.floor(Math.random() * 257);
        const g = Math.floor(Math.random() * 257);
        const b = Math.floor(Math.random() * 257);
        grid.style.backgroundColor = `rgb(${r},${g},${b})`;
      } else {
        grid.style.backgroundColor = colorPicker.value;
      }
    })
  );
};

// Clear button
document.querySelector('.clear-btn').addEventListener('click', function () {
  const gridsAll = document.querySelectorAll('.newGrids');

  gridsAll.forEach((grid) => (grid.style.backgroundColor = 'white'));
});

// Eraser button
document.querySelector('.eraser-btn').addEventListener('click', function () {
  colorPicker.value = '#ffffff';
});

//
createGrid(gridSlider.value);
paintGrid(colorPicker.value);
