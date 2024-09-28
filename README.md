# react-tic-tac-toe-game

A simple, interactive, and responsive Tic-Tac-Toe game built using React. This application allows two players to play the game, change their names, and keep track of turns. It includes features like win and draw detection, as well as a game log.

## Features

- **Player Customization**: Players can change their names (Player 1 and Player 2).
- **Turn-based Gameplay**: The game keeps track of the current player's turn.
- **Winner/Draw Detection**: The game detects the winner based on a set of predefined winning combinations and recognizes a draw if no winner is found after all squares are filled.
- **Game Log**: A log of all game turns is displayed.
- **Game Restart**: A new game can be started at any time by restarting the game.

## Installation and Setup

To run these apps locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/ShawonBarman/react-tic-tac-toe-game.git
   cd react-tic-tac-toe-game
   ```

2. **Install dependencies:**

   Make sure you have Node.js and npm installed.

   ```bash
   npm install
   ```

3. **Run the applications:**

   ```bash
   npm start
   ```

This will start the app at http://localhost:3000.

## Components

### 1. **Player**: 
   Displays the name of each player and allows them to change their names.

### 2. **GameBoard**: 
   Displays the 3x3 Tic-Tac-Toe grid. Players can select squares to make their moves.

### 3. **Log**: 
   A history of the moves made in the game.

### 4. **GameOver**: 
   Displays a message when the game ends (either a win or a draw) and includes a button to restart the game.

## State Management

- **gameTurns**: Keeps track of the players' moves.
- **players**: Stores the players' names and symbols (X or O).
- **gameBoard**: Derived from `gameTurns` to update the Tic-Tac-Toe board dynamically.
- **winner**: Derived to check for a winner after each turn.
- **hasDraw**: Checks for a draw condition after all turns have been played.

## Game Logic

1. **Turn Management**: The game alternates between Player 1 and Player 2 based on the number of moves made.
2. **Winner Detection**: Checks for a winner using a set of predefined winning combinations.
3. **Draw Detection**: If all squares are filled and there is no winner, the game is declared a draw.

## Future Improvements

- Add sound effects for moves and game outcomes.
- Implement animations for game transitions and player turns.
- Enhance the UI/UX with more styling and responsive design.
- Store game history locally or on a server to track performance.

## License

This project is licensed under the MIT License.
