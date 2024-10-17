let audio; // Declare audio variable outside to control it

document.addEventListener('click', function () {
    if (!audio) { // Check if audio is not already created
        audio = new Audio('background-music.mp3'); // Path to your mp3 file
        audio.loop = true; // Ensure the music loops
        audio.play(); // Play the audio
    }
}, { once: true });

// Stars random placement
const stars = document.querySelectorAll('.star');

// Function to position stars randomly
function positionStars() {
    const stars = document.querySelectorAll('.star');

    stars.forEach(star => {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate random positions for the stars
        const randomX = Math.random() * (viewportWidth - 50); // Adjust to avoid overflow
        const randomY = Math.random() * (viewportHeight - 50);

        // Set the position using CSS
        star.style.position = 'absolute';
        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;

        // Add a random animation delay to create a twinkling effect
        const randomDelay = Math.random() * 2;
        star.style.animationDelay = `${randomDelay}s`;

        // Randomly adjust the size of each star
        const randomSize = Math.random() * 30 + 20; // Random size between 20px and 50px
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;
    });
}

// Function to position elements randomly
function positionElementsRandomly() {
    // Get all elements with the class "image-button"
    const imageButtons = document.querySelectorAll('.image-button');

    // Loop through each element and position it randomly
    imageButtons.forEach(button => {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate random positions (adjust to keep them within bounds)
        const randomX = Math.random() * (viewportWidth - button.offsetWidth);
        const randomY = Math.random() * (viewportHeight - button.offsetHeight);

        // Set the position using CSS
        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
}

// Ensure the custom cursor is applied across the page
function applyCustomCursor() {
    document.body.style.cursor = "url('cursor.png') 16 16, auto"; // Set custom cursor globally

    // Ensure custom cursor applies to all clickable elements
    document.querySelectorAll('button, #heartButton, #instructionButton, .clickable, .hidden-btn').forEach(element => {
        element.style.cursor = "url('pointer.png') 16 16, pointer";
    });
}

// On page load, position stars, hidden items, and apply custom cursor
window.onload = function () {
    positionElementsRandomly(); // Randomly position the hidden items on load
    positionStars(); // Position stars randomly
    applyCustomCursor(); // Apply the custom cursor
};

// Show and hide welcome message and button (heart interaction)
const button = document.getElementById('instructionButton');
const welcomeMessage = document.getElementById('welcomeMessage');
const heartButton = document.getElementById('heartButton');

button.addEventListener('click', function () {
    button.style.display = 'none'; // Hide button
    welcomeMessage.style.display = 'block'; // Show welcome message
});

heartButton.addEventListener('click', function () {
    welcomeMessage.style.display = 'none'; // Hide welcome message
    button.style.display = 'block'; // Show button again
});

document.querySelectorAll('.image-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active'); // Toggle the "active" class
    });
});

// Function to position elements randomly
function positionElementsRandomly() {
    // Get all elements with the class "image-button"
    const imageButtons = document.querySelectorAll('.image-button');

    // Loop through each element and position it randomly
    imageButtons.forEach(button => {
        // Get the viewport dimensions
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;

        // Calculate random positions (adjust to keep them within bounds)
        const randomX = Math.random() * (viewportWidth - button.offsetWidth);
        const randomY = Math.random() * (viewportHeight - button.offsetHeight);

        // Set the position using CSS
        button.style.position = 'absolute';
        button.style.left = `${randomX}px`;
        button.style.top = `${randomY}px`;
    });
}

// Run the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', positionElementsRandomly);





// Ensure the custom cursor is applied across the page
function applyCustomCursor() {
    document.body.style.cursor = "url('cursor.png') 16 16, auto"; // Set custom cursor globally

    // Ensure custom cursor applies to all clickable elements
    document.querySelectorAll('button, #heartButton, #instructionButton, .clickable, .hidden-btn').forEach(element => {
        element.style.cursor = "url('pointer.png') 16 16, pointer";
    });
}

