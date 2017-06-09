'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = GameStep;

var _AIHelpers = require('./AIHelpers');

var _AIHelpers2 = _interopRequireDefault(_AIHelpers);

var _ComputerMove = require('./ComputerMove');

var _ComputerMove2 = _interopRequireDefault(_ComputerMove);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function GameStep(board, symbols, difficulty) {

	// ===============================================
	// Definitions

	var gameState = {
		winner: null,
		board: null
	};

	function computeAIAfterBoard() {

		var bestMove = (0, _ComputerMove2.default)(board, symbols, difficulty);

		if (bestMove === undefined) {
			return new Array(9).fill(0).map(function (e, i) {
				return i;
			});
		}
		var newBoard = Array.from(board);
		newBoard[bestMove] = symbols.aiPlayer;

		return newBoard;
	}

	// ===============================================
	// Process board

	//Check if player won or no moves left
	if (_AIHelpers2.default.isGameFinished(board, symbols)) {
		var winner = function () {
			var humanWon = _AIHelpers2.default.playerWon(board, symbols.huPlayer);
			var computerWon = _AIHelpers2.default.playerWon(board, symbols.aiPlayer);
			if (humanWon) {
				return "huPlayer";
			} else if (computerWon) {
				return "aiPlayer";
			} else {
				return null;
			}
		}();
		var newBoard = new Array(9).fill(0).map(function (e, i) {
			return i;
		});

		gameState.board = newBoard;
		gameState.winner = winner;
	}
	//Else move computer
	else {
			var boardAIAfter = computeAIAfterBoard(board);
			if (_AIHelpers2.default.isGameFinished(boardAIAfter, symbols)) {
				var _winner = _AIHelpers2.default.playerWon(boardAIAfter, symbols.aiPlayer) ? "aiPlayer" : null;
				//const newBoard = (new Array(9)).fill(0).map( (e,i) => i);

				gameState.board = boardAIAfter;
				gameState.winner = _winner;
			} else {
				gameState.board = boardAIAfter;
			}
		}
	return gameState;
}