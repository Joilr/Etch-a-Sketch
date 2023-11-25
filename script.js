// Global variable to hold the current selected color
let currentColor = '#ff0000';

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
    target.style.backgroundColor = currentColor;  // Change to your desired color
}

// Function to update the current color
function updateColor(newColor) {
    currentColor = newColor;
}

// Event listener for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {

    // Initialize the grid
    createGrid();

    const gridContainer = document.querySelector('.grid-container');
    let isMouseDown = false;

    // Event listener for mousedown on grid items
    gridContainer.addEventListener('mousedown', (event) => {
        if (event.target.classList.contains('grid-item')) {
            isMouseDown = true;
            changeColor(event.target);
        }
    });

    // Event listener for mouseover on grid items
    gridContainer.addEventListener('mouseover', (event) => {
        if (isMouseDown && event.target.classList.contains('grid-item')) {
            changeColor(event.target);
        }
    });

    // Event listener for mouseup on the document
    document.addEventListener('mouseup', () => {
        isMouseDown = false;
    });

    // Event listeners for color buttons
    document.querySelector('#redColor').addEventListener('click', () => updateColor('#ff0000'));
    document.querySelector('#blueColor').addEventListener('click', () => updateColor('#0000ff'));
    document.querySelector('#yellowColor').addEventListener('click', () => updateColor('#ffff00'));
    
});
