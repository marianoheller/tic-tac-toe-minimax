# Tic-Tac-Toe Minimax AI Module

Module that given a tic-tac-toe board determines the AI's move and/or returns next state board based on the given board. It has three level of AI's difficulty.

| Difficulty        | Description           |
|:-------------:|:-------------:| 
| Easy      | AI's move is decided solely based on Math.random() | 
| Hard | AI's move is decided through the minimax algorithm      |
| Normal      | AI's move has 50/50 chance to be a "Hard difficulty" move or a "Easy difficulty" move       | 

*Note: Only tested on a 3x3 board*

## Modules

### ComputerMove

```javascript
const nextMove = ComputerMove( board, symbols, difficulty );      //returns a Number
```

This module computes the best move to be made by the computer.

| Inputs        | Description           |
|:-------------:|:-------------:| 
| symbols | Object with **huPlayer** and **aiPlayer** symbol.  |
| board      | Array representing the board. *Empty* squares should have the value of the index numer in the respective element. | 
| difficulty      |  "Easy"\|"Normal"\|"Hard"  | 

*Example:*
```javascript
const huPlayer = "X";
const aiPlayer = "O";
const symbols = {
    huPlayer: huPlayer,
    aiPlayer: aiPlayer
}
const difficulty = "Hard";
const board = [0,1,aiPlayer,3,huPlayer,huPlayer,6,7,8];

const nextMove = ComputerMove( board, symbols, difficulty );        //returns 3
```

### GameStep

This module wraps the ComputerMove module. It basically computes the next board of a game.

```javascript
const gameState = GameStep(board, symbols, difficulty);      //returns an Object
/*
returns {
    winner: ("huPlayer" | "aiPlayer" | null),
    board: Array
}
*/
```
If the game is finished (by winning or tie), the board resets to an empty board.

*Example:*
```javascript
const huPlayer = "X";
const aiPlayer = "O";
const symbols = {
    huPlayer: huPlayer,
    aiPlayer: aiPlayer
}
const difficulty = "Hard";
const board = [0,1,aiPlayer,3,huPlayer,huPlayer,6,7,8];

const gameStep = GameStep( board, symbols, difficulty );
/*
returns {
    winner: null,
    board: [0,1,aiPlayer,aiPlayer,huPlayer,huPlayer,6,7,8]
}
*/
```
### TODO

* If you pass as argument a board already won by the AI with no empty spaces, the module is going to compute a tie. Make it so it return the actual winner of the board
* Better testing of GameStep module

