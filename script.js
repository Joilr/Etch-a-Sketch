// Global variable to hold the current selected color
let currentColor = '#16DFB7';
// Global variable to hold the current amount of pixels
let currentPixels = 16;

// Function to create a 16x16 grid
function createGrid() {
    const gridContainer = document.querySelector('.grid-container');

    for (let i = 0; i < currentPixels; i++) {
        const gridRow = document.createElement('div');
        gridRow.className = 'grid-row';
        for (let x = 0; x < currentPixels; x++) {
            const gridItem = document.createElement('div');
            gridItem.className = 'grid-item';
            gridRow.appendChild(gridItem);
        }
        gridContainer.appendChild(gridRow);
    } 
}

//Function to change the amount of pixel in grid
function updateSliderValue(value) {
    document.getElementById('sliderValue').textContent = value;
    currentPixels = value;

    // delete current grid
    const gridRows = document.querySelectorAll('.grid-row');
    gridRows.forEach(row => {
        row.remove();
    });

    //create new
    createGrid();
}

// Function to change the color of a grid item
function changeColor(target) {
    target.style.backgroundColor = currentColor;  // Change to your desired color
}

// Function to update the current color
function updateColor(newColor) {
    currentColor = newColor;
    document.documentElement.style.setProperty('--hover-color', currentColor);
}

// Function to wipe
function wipeGrid() {
    currentColor = '#f0f0f0';
}

// Function to reset all grid items to the standard color
function resetGrid() {
    const gridItems = document.querySelectorAll('.grid-item');
    gridItems.forEach((item) => {
        item.style.backgroundColor = '#f0f0f0';
    });
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

     // Event listener for the color picker input
     const colorPicker = document.querySelector('#colorPicker');
     colorPicker.addEventListener('input', (event) => {
         updateColor(event.target.value);
     });

        // Event listener for the wipe button
        document.querySelector('#wipeButton').addEventListener('click', wipeGrid);

        // Event listener for the reset button
        document.querySelector('#resetButton').addEventListener('click', resetGrid);
    
});
