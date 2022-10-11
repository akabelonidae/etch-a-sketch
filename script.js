'use strict';
const grid = document.querySelector('#grid');

const createGrid = function () {
  for (let i = 0; i < 256; i++) {
    const gridFillers = document.createElement('div');
    gridFillers.classList.add('gridPieces');
    grid.appendChild(gridFillers);

    gridFillers.addEventListener('mouseover', function () {
      gridFillers.style.backgroundColor = 'black';
      document.querySelector('#clear').addEventListener('click', function () {
        gridFillers.style.backgroundColor = 'white';
      });
    });
  }
};

createGrid();
