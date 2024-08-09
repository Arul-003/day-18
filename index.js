// Get the canvas element and its context
const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

// Define dimensions and position
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const squareSize = 200; // Size of the square
const circleRadius = squareSize / 2; // Radius of the circle

// Calculate position to center the square and the circle
const squareX = (canvasWidth - squareSize) / 2;
const squareY = (canvasHeight - squareSize) / 2;
const circleX = canvasWidth / 2;
const circleY = canvasHeight / 2;

// Draw the square
ctx.fillStyle = 'blue'; // Square color
ctx.fillRect(squareX, squareY, squareSize, squareSize);

// Draw the circle
ctx.beginPath();
ctx.arc(circleX, circleY, circleRadius, 0, Math.PI * 2, false);
ctx.fillStyle = 'red'; // Circle color
ctx.fill();
ctx.closePath();
