'use strict';
// Variables
const grid = document.querySelector('#grid');
const gridSlider = document.querySelector('#grid-slider');
const colorPicker = document.querySelector('#color-picker');
const rainbowBtn = document.querySelector('.rgb-btn');
let rainbowMode = 0;
const startValues = function () {
  createGrid(gridSlider.value);
  gridColor(colorPicker.value);
};

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

// Slider function
gridSlider.addEventListener('click', function () {
  const gridsAll = document.querySelectorAll('.newGrids');
  gridsAll.forEach((div) => div.remove());

  // Create new grids again with new value
  createGrid(gridSlider.value);
  gridColor();

  document.querySelector(
    '#slider-text'
  ).textContent = `${gridSlider.value}x${gridSlider.value}`;
});

// Paint function
const gridColor = function (color) {
  const gridsAll = document.querySelectorAll('.newGrids');

  gridsAll.forEach((grid) =>
    grid.addEventListener('mouseover', function () {
      grid.style.backgroundColor = color ? color : colorPicker.value;
    })
  );
};

// Random rgb generator
const rgbGenerator = function () {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const rgb = `${r},${g},${b}`;
  console.log(rgb);
  return rgb;
};

// Rainbow button
rainbowBtn.addEventListener('click', function () {
  if (rainbowMode == 0) {
    rgbGenerator();
    rainbowBtn.classList.add('rainbowMode');
    rainbowBtn.textContent = 'Rainbow Mode On!';
    rainbowMode = 1;
    gridColor('blue');
  } else if (rainbowMode == 1) {
    rainbowBtn.classList.remove('rainbowMode');
    rainbowBtn.textContent = 'Rainbow Mode Off!';
    rainbowMode = 0;
    gridColor(colorPicker.value);
  }
});

//
startValues();
gridColor();
