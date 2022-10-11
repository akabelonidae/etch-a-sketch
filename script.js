'use strict';
const grid = document.querySelector('#grid');

// Create grid
const createGrid = function () {
  for (let i = 0; i < 256; i++) {
    const gridFillers = document.createElement('div');
    gridFillers.classList.add('gridFill');
    grid.appendChild(gridFillers);

    // Change grid color
    gridFillers.addEventListener('mouseover', function () {
      gridFillers.style.backgroundColor =
        document.querySelector('#color-picker').value;
      gridFillers.style.transition = 'all .25s';

      // Clear button
      document
        .querySelector('.clear-btn')
        .addEventListener('click', function () {
          gridFillers.style.backgroundColor = 'white';
        });
    });
  }
};

createGrid();
