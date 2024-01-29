// Select the button and body elements using querySelector
const button = document.querySelector("button");
const body = document.body;

// Add a click event listener to the button that calls the changeBg function
button.addEventListener('click', changeBg);

// Function to change the background color randomly
function changeBg() {
    // Call the getRandomColor function to get a random hex color code
    const randomColor = getRandomColor();
    
    // Set the background color of the body to the randomly generated color
    body.style.backgroundColor = randomColor;
}

// Function to generate a random hex color code
function getRandomColor() {
    // Generate a random number and convert it to a hex color code
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}


/* // Select the button and body elements using querySelector
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

*/