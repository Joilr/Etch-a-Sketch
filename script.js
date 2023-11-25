// Function to create a 16x16 grid
function createGrid() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < 16; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        for (let x = 0; x < 16; x++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridRow.appendChild(gridItem);
        }
        gridContainer.appendChild(gridRow);
    } 
}

// Function to change the color of a grid item
function changeColor(target) {
    target.style.backgroundColor = '#ff0000'; // Change to your desired color
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    createGrid();

    const gridContainer = document.querySelector('.grid-container');
    let isMouseDown = false;

    gridContainer.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('grid-item')) {
            isMouseDown = true;
            changeColor(event.target);
        }
    });

    gridContainer.addEventListener('mouseover', (event) => {
        if (isMouseDown && event.target.classList.contains('grid-item')) {
            changeColor(event.target);
        }
    });

    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
});
