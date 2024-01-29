// Select the button and body elements using querySelector
const button = document.querySelector("button");
const body = document.querySelector("body");

// Initialize an array of colors
const color = ['red', 'green', 'yellow', 'blue', 'purple', 'pink', 'orange', 'black'];

// Set the initial background color of the body
body.style.backgroundColor = 'violet';

// Add a click event listener to the button that calls the changeBg function
button.addEventListener('click', changeBg);

// Function to change the background color randomly
function changeBg() {
    // Generate a random index to select a color from the array
    const colorIndex = parseInt(Math.random() * color.length);

    // Set the background color of the body to the randomly selected color
    body.style.backgroundColor = color[colorIndex];
}

