# Tic-Tac-Toe Minimax AI Module

[![Build Status](https://travis-ci.org/marianoheller/tic-tac-toe-minimax.svg?branch=master)](https://travis-ci.org/marianoheller/tic-tac-toe-minimax)
[![Coverage Status](https://coveralls.io/repos/github/marianoheller/tic-tac-toe-minimax/badge.svg?branch=master)](https://coveralls.io/github/marianoheller/tic-tac-toe-minimax?branch=master)


Module that given a tic-tac-toe board determines the AI's move and/or returns next state board based on the given board. It has three level of AI's difficulty.
*Note: Only tested on a 3x3 board*

| Difficulty        | Description           |
|:-------------:|:-------------:| 
| Easy      | AI's move is decided solely based on Math.random() | 
| Hard | AI's move is decided through the minimax algorithm      |
| Normal      | AI's move has 50/50 chance to be a "Hard difficulty" move or a "Easy difficulty" move       | 

##### [DEMO](http://marianoheller.github.io/tic-tac-toe)

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
import Minimax from 'tic-tac-toe-minimax'
const { ComputerMove } = Minimax;

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

This module wraps the ComputerMove module and calculates the "next" board.
If a final game condition in reached it will be informed through the winner property.
Also, if a final condition is met the board will remain the same.

```javascript
const gameState = GameStep(board, symbols, difficulty);      //returns an Object
/*
returns {
    winner: ("huPlayer" | "aiPlayer" | "draw" | null),
    board: Array
}
*/
```
If the provided board has both winning conditions (both player and AI won somehow),
the *winner* will be the player.

*Example:*
```javascript
import Minimax from 'tic-tac-toe-minimax'
const { GameStep } = Minimax;

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

...

