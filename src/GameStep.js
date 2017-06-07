

export default function GameStep(board, symbols, difficulty) {

	const gameState = {
		winner: null,
		board: null
	};

	function computeAIAfterBoard() {
		
		const bestMove = ComputerMove(board, symbols, difficulty);

		if ( bestMove === undefined ) {   return (new Array(9)).fill(0).map( (e,i) => i);   }
		const newBoard = Array.from(board);
		newBoard[bestMove] = symbols.aiPlayer;
		
		return newBoard;	
	}

	//Check if player won or no moves left
	if ( AIHelpers.isGameFinished(board, symbols) ) {
		const winner = AIHelpers.playerWon(board, symbols.huPlayer ) ? "huPlayer" : null;
		const newBoard = (new Array(9)).fill(0).map( (e,i) => i);
		
		gameState.board = newBoard;
		gameState.winner = winner;
	}
	//Else move computer
	else {
		const boardAIAfter = computeAIAfterBoard(board);
		if ( AIHelpers.isGameFinished(boardAIAfter, symbols) ) {
			const winner = AIHelpers.playerWon(boardAIAfter, symbols.aiPlayer ) ? "aiPlayer" : null;
			const newBoard = (new Array(9)).fill(0).map( (e,i) => i);
			
			gameState.board = newBoard;
			gameState.winner = winner;
		}
		else {
			gameState.board = boardAIAfter;
		}
	}
	return gameState;

}