"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var AIHelpers = function () {
	function AIHelpers() {
		_classCallCheck(this, AIHelpers);
	}

	_createClass(AIHelpers, null, [{
		key: "playerWon",
		value: function playerWon(board, player) {
			if (board[0] === player && board[1] === player && board[2] === player || board[3] === player && board[4] === player && board[5] === player || board[6] === player && board[7] === player && board[8] === player || board[0] === player && board[3] === player && board[6] === player || board[1] === player && board[4] === player && board[7] === player || board[2] === player && board[5] === player && board[8] === player || board[0] === player && board[4] === player && board[8] === player || board[2] === player && board[4] === player && board[6] === player) {
				return true;
			} else {
				return false;
			}
		}
	}, {
		key: "isGameFinished",
		value: function isGameFinished(board, symbols) {
			if (!this.isMovesLeft(board, symbols)) {
				return true;
			}
			var huPlayer = symbols.huPlayer,
			    aiPlayer = symbols.aiPlayer;

			if (this.playerWon(board, huPlayer) || this.playerWon(board, aiPlayer)) {
				return true;
			}
			return false;
		}
	}, {
		key: "getEmptyIndexies",
		value: function getEmptyIndexies(board, symbols) {
			var huPlayer = symbols.huPlayer,
			    aiPlayer = symbols.aiPlayer;

			return board.filter(function (s) {
				return s !== huPlayer && s !== aiPlayer;
			});
		}
	}, {
		key: "isMovesLeft",
		value: function isMovesLeft(board, symbols) {
			return this.getEmptyIndexies(board, symbols).length !== 0;
		}
	}]);

	return AIHelpers;
}();

exports.default = AIHelpers;