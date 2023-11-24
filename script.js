
//Function myGrid
//To "grid-container" it adds "<div class="grid-row"></div>" 16 times
//To every "grid-row" it adds "<div class="grid-item"></div>" 16 times

function myGrid() {
    const gridContainer = document.querySelector('.grid-container');


    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        gridContainer.appendChild(gridRow);

        for (let x = 0; x < 16; x++) {
            const gridItemdiv = document.createElement('div');
            gridItemdiv.className = 'grid-item';
            gridRow.appendChild(gridItemdiv);
        }

    } 
}

document.addEventListener("DOMContentLoaded", myGrid);