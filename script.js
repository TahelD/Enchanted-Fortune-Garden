let audio; // Declare audio variable outside to control it

document.addEventListener('click', function () {
    if (!audio) { // Check if audio is not already created
        audio = new Audio('background-music.mp3'); // path to your mp3 file
        audio.loop = true; // Ensure the music loops
        audio.play(); // Play the audio
    }
}, { once: true });

//stars
const stars = document.querySelectorAll('.star');

//stars random
function positionStars() {
    stars.forEach(star => {
        //randome positions
        const randomX = Math.random() * window.innerWidth;
        const randomY = Math.random() * window.innerHeight;

        star.style.left = `${randomX}px`;
        star.style.top = `${randomY}px`;

        const randomDelay = Math.random() * 2;
        star.style.animationDelay = `${randomDelay}s`;

        const randomSize = Math.random() * 20 + 10; // Random size between 10px and 30px
        star.style.width = `${randomSize}px`;
        star.style.height = `${randomSize}px`;
    });
}

positionStars();

//heart
const button = document.getElementById('instructionButton');
const welcomeMessage = document.getElementById('welcomeMessage');
const heartButton = document.getElementById('heartButton');

button.addEventListener('click', function() {
    // Show the welcome message (heart with text) and hide the button
    button.style.display = 'none'; // Hide button
    welcomeMessage.style.display = 'block'; // Show welcome message
});

heartButton.addEventListener('click', function() {
    // Hide the welcome message and show the original button
    welcomeMessage.style.display = 'none'; // Hide welcome message
    button.style.display = 'block'; // Show button again
});

document.querySelectorAll('.hidden-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active'); // Toggle the hidden content
    });
});

document.querySelectorAll('.hidden-btn').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active'); // Toggle the hidden content
    });
});

// Randomly place each hidden item
function randomPosition() {
    const items = document.querySelectorAll('.hidden-item');
    items.forEach(item => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - 100)); // Width minus element size
        const randomY = Math.floor(Math.random() * (window.innerHeight - 100)); // Height minus element size
        item.style.left = `${randomX}px`;
        item.style.top = `${randomY}px`;
    });
}

window.onload = function () {
    randomPosition(); // Randomly position the hidden items on load
    positionStars(); // Position stars
};