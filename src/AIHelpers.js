

export default class AIHelpers {
	static playerWon(board, player )  {
		if (
			(board[0] === player && board[1] === player && board[2] === player) ||
			(board[3] === player && board[4] === player && board[5] === player) ||
			(board[6] === player && board[7] === player && board[8] === player) ||
			(board[0] === player && board[3] === player && board[6] === player) ||
			(board[1] === player && board[4] === player && board[7] === player) ||
			(board[2] === player && board[5] === player && board[8] === player) ||
			(board[0] === player && board[4] === player && board[8] === player) ||
			(board[2] === player && board[4] === player && board[6] === player)
		) {
			return true;
		} 
		else {
			return false;
		}
	}

	static isGameFinished(board, symbols) {
		if ( !this.isMovesLeft(board, symbols) ) {
			return true;
		}
		const { huPlayer, aiPlayer } = symbols;
		if( this.playerWon(board, huPlayer ) ||  this.playerWon(board, aiPlayer )) {
			return true;
		}
		return false;
	}
	
	static getEmptyIndexies(board, symbols)   {
		const { huPlayer, aiPlayer } = symbols;
		return  board.filter(s => s !== huPlayer && s !== aiPlayer);
	}
	
	static isMovesLeft(board, symbols) {
		return this.getEmptyIndexies(board, symbols).length !== 0;
	}
}
