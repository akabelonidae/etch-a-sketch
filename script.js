'use strict';
const grid = document.querySelector('#grid');

const createGrid = function () {
  for (let i = 0; i < 256; i++) {
    const gridFillers = document.createElement('div');
    grid.appendChild(gridFillers);
    gridFillers.classList.add('gridPieces');

    gridFillers.addEventListener('mouseover', function () {
      gridFillers.style.backgroundColor = 'black';
    });
  }
};
createGrid();
