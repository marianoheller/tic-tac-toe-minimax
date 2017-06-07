import AIHelpers from './AIHelpers'

const MAX_VALUE = 99999999;


export default function ComputerMove ( board , symbols, difficulty) {

	const { huPlayer, aiPlayer } = symbols;
	
	
	function evaluate() {
		if ( AIHelpers.playerWon(board, huPlayer) ){
			return -10;
		}
		else if ( AIHelpers.playerWon(board, aiPlayer ) ) {
			return +10;
		}
		else {
			return 0;
		}
	}
	
	function minimax( depth, isMaximizingPlayer ) {
		const score = evaluate();
		
		if( Math.abs(score) === 10 ) {
			return score;
		}
		
		if (  !AIHelpers.isMovesLeft(board, symbols) ) {
			return 0;
		}

		let bestVal = MAX_VALUE;
		let leftMoves = AIHelpers.getEmptyIndexies(board, symbols);
		
		if( isMaximizingPlayer ) {
			bestVal *= (-1);
			
			leftMoves.forEach( function(move) {
				board[move] = aiPlayer;
				const value = minimax( depth+1, false)
				bestVal = Math.max( bestVal, value) 
				board[move] = move;
			});  
			return bestVal
		}
		else {			
			
			leftMoves.forEach( function(move) {
				board[move] = huPlayer;
				const value = minimax( depth+1, true)
				bestVal = Math.min( bestVal, value);
				board[move] = move;
			});  
			return bestVal
		}
	}
	
	function findBestMove()
	{
		let bestVal = (-1)*MAX_VALUE;
		let bestMove = undefined;
		
		// Traverse all cells, evalutae minimax function for
		// all empty cells. And return the cell with optimal
		// value.
		var leftMoves = AIHelpers.getEmptyIndexies(board, symbols);
		
		leftMoves.forEach( (move) => {
			// Do the move
			board[move] = aiPlayer;
			
			// Calculate val of move
			const moveVal = minimax( 0, false);
			
			// Undo the move
			board[move] = move;
			
			// If the value of the current move is
			// more than the best value, then update
			// best/
			if (moveVal > bestVal) {
				bestMove = move;
				bestVal = moveVal;
			}
		});
		return bestMove;
	}

	function findEasyMove() {
		const leftMoves = AIHelpers.getEmptyIndexies(board, symbols);
		const randomIndex = Math.floor( Math.random() * leftMoves.length );
		return leftMoves[randomIndex];
	}

	function findNormalMove() {
		const bestMove = findBestMove();
		const dumbMove = findEasyMove();
		return Math.random() < 0.75 ? bestMove : dumbMove;
	}

	let ret = -1;
	switch (difficulty) {
		case "Easy":
			ret =  findEasyMove();
			break;
		case "Normal":
			ret = findNormalMove();
			break;
		case "Hard":
			ret = findBestMove();
			break;
		default:
		throw Error("Difficulty not valid!");
	}
	return ret;
}