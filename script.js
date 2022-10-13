'use strict';
// Variables
const grid = document.querySelector('#grid');
const gridSlider = document.querySelector('#grid-slider');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('.rgb-btn');
let rainbowMode = 0;

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

// Grid x Grid slider
gridSlider.addEventListener('click', function () {
  const gridsAll = document.querySelectorAll('.newGrids');
  gridsAll.forEach((div) => div.remove());

  createGrid(gridSlider.value);
  gridColor(colorPicker.value);

  document.querySelector(
    '#slider-text'
  ).textContent = `${gridSlider.value}x${gridSlider.value}`;
});

// Grid color function
const gridColor = function () {
  const gridsAll = document.querySelectorAll('.newGrids');

  gridsAll.forEach((grid) =>
    grid.addEventListener('mouseover', function () {
      grid.style.backgroundColor = colorPicker.value;
    })
  );
};

// Rainbow colors
const rainbowColors = function () {
  const gridsAll = document.querySelectorAll('.newGrids');

  gridsAll.forEach((grid) =>
    grid.addEventListener('mouseover', function () {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      grid.style.backgroundColor = `rgb(${r},${g},${b})`;
    })
  );
};

// Rainbow button
rainbowBtn.addEventListener('click', function () {
  // On
  if (rainbowMode == 0) {
    rainbowBtn.classList.add('rainbowMode');
    rainbowBtn.textContent = 'Rainbow Mode On!';
    rainbowMode = 1;
    rainbowColors();

    // Off
  } else if (rainbowMode == 1) {
    rainbowBtn.classList.remove('rainbowMode');
    rainbowBtn.textContent = 'Rainbow Mode Off!';
    rainbowMode = 0;
    gridColor(colorPicker.value);
  }
});

//
createGrid(gridSlider.value);
gridColor(colorPicker.value);
