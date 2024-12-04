// game.js

const board = document.getElementById("board");
const rollDiceButton = document.getElementById("roll-dice");
const diceResult = document.getElementById("dice-result");
const playerTurn = document.getElementById("player-turn");
const donateButton = document.getElementById("donate-button");
const donationInfo = document.getElementById("donation-info");
const closeDonationButton = document.getElementById("close-donation");

let currentPlayer = 1;
let playerPositions = [0, 0, 0, 0]; // Assuming 4 players

// Generate the Ludo board
function generateBoard() {
  for (let i = 0; i < 225; i++) {
    const square = document.createElement("div");
    square.id = `square-${i}`;
    board.appendChild(square);
  }
}

// Roll dice logic
function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1;
  diceResult.textContent = `Player ${currentPlayer} rolled: ${diceValue}`;
  movePlayer(diceValue);
}

// Move player based on dice roll
function movePlayer(diceValue) {
  let currentPlayerPosition = playerPositions[currentPlayer - 1];
  currentPlayerPosition += diceValue;

  // Check if the player reached the end
  if (currentPlayerPosition >= 225) {
    currentPlayerPosition = 225;
    alert(`Player ${currentPlayer} wins!`);
  }

  // Update player's position
  playerPositions[currentPlayer - 1] = currentPlayerPosition;
  document.getElementById(`square-${currentPlayerPosition}`).style.backgroundColor = "red"; // Change color for the token

  // Switch player turn
  currentPlayer = currentPlayer % 4 + 1;
  playerTurn.textContent = `Player ${currentPlayer}'s Turn`;
}

// Set up the board and game start
generateBoard();
playerTurn.textContent = `Player ${currentPlayer}'s Turn`;

// Event listener for the dice roll button
rollDiceButton.addEventListener("click", rollDice);

// Event listener for the donate button
donateButton.addEventListener("click", function() {
  donationInfo.style.display = "block"; // Show UPI donation info
});

// Event listener for closing donation info
closeDonationButton.addEventListener("click", function() {
  donationInfo.style.display = "none"; // Hide donation info
});
