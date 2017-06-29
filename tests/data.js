

//Symbols configuration & difficulty
export const IOconfig = {

    symbols: {
        huPlayer: "X",
        aiPlayer: "O"
    },
    difficulty : "Hard",

}


// Only "Hard"" difficulty can generate expected best moves.
// Difficulty "Easy" & "Normal" are based on peudo-random numbers so they can't be tested with expected best moves.
const { huPlayer, aiPlayer } = IOconfig.symbols;

export const bestMoveAssertionData = [
    {
        inputBoard: [0,1,2,3,4,5,6,7,8],
        outputMove: 0
    },
    {
        inputBoard: [aiPlayer,1,aiPlayer,3,4,5,6,7,8],
        outputMove: 1
    },
    {
        inputBoard: [aiPlayer,1,aiPlayer,3,4,5,6,huPlayer,huPlayer],
        outputMove: 1
    },
    {
        inputBoard: [aiPlayer,1,aiPlayer,3,4,5,huPlayer,huPlayer,huPlayer],
        outputMove: 1
    },
    {
        inputBoard: [aiPlayer,1,2,3,aiPlayer,5,huPlayer,huPlayer,8],
        outputMove: 8
    },
    {
        inputBoard: [0,1,aiPlayer,3,huPlayer,huPlayer,6,7,8],
        outputMove: 3
    },
    {
        inputBoard: [0,1,huPlayer,3,huPlayer,5,6,7,aiPlayer],
        outputMove: 6
    },
    //Board full & human won
    {
        inputBoard: [aiPlayer,aiPlayer,huPlayer,huPlayer,aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer],
        outputMove: undefined
    },
    //Board full & AI won
    {
        inputBoard: [aiPlayer,aiPlayer,aiPlayer,aiPlayer,aiPlayer,aiPlayer,aiPlayer,aiPlayer,aiPlayer],
        outputMove: undefined
    },
    //Board full & Tie
    {
        inputBoard: [aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer,aiPlayer,aiPlayer,huPlayer,huPlayer],
        outputMove: undefined
    },
]


export const gameStateAssertionData = [

    //General random moves
    {
        inputBoard: [0,1,2,3,4,5,6,7,8],
        outputMove: {
            board: [aiPlayer,1,2,3,4,5,6,7,8],
            winner: null
        }
    },
    {
        inputBoard: [aiPlayer,1,aiPlayer,3,4,5,6,7,8],
        outputMove: {
            board: [aiPlayer,aiPlayer,aiPlayer,3,4,5,6,7,8],
            winner: "aiPlayer"
        }
    },
    {
        inputBoard: [0,1,aiPlayer,3,huPlayer,huPlayer,6,7,8],
        outputMove: {
            board: [0,1,aiPlayer,aiPlayer,huPlayer,huPlayer,6,7,8],
            winner: null
        }
    },
    {
        inputBoard: [0,1,huPlayer,3,huPlayer,5,6,7,aiPlayer],
        outputMove: {
            board: [0,1,huPlayer,3,huPlayer,5,aiPlayer,7,aiPlayer],
            winner: null
        }
    },
    //Winner move already made by the AI
    {
        inputBoard: [aiPlayer,aiPlayer,aiPlayer,3,4,5,6,7,8],
        outputMove: {
            board: [aiPlayer,aiPlayer,aiPlayer,3,4,5,6,7,8],
            winner: "aiPlayer"
        }
    },
    //Winner move already made by the player
    {
        inputBoard: [huPlayer,huPlayer,huPlayer,3,4,5,6,7,8],
        outputMove: {
            board: [huPlayer,huPlayer,huPlayer,3,4,5,6,7,8],
            winner: "huPlayer"
        }
    },
    //Last move & draw
    {
        inputBoard: [aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer,aiPlayer,aiPlayer,huPlayer,8],
        outputMove: {
            board: [aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer,aiPlayer,aiPlayer,huPlayer,aiPlayer],
            winner: "draw"
        }
    },
    //Winner move already made by the AI
    {
        inputBoard: [aiPlayer,aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer,6,7,8],
        outputMove: {
            board: [aiPlayer,aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer,6,7,8],
            winner: "huPlayer"
        }
    },
    //Board full & draw
    {
        inputBoard: [aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer,aiPlayer,aiPlayer,huPlayer,huPlayer],
        outputMove: {
            board: [aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer,aiPlayer,aiPlayer,huPlayer,huPlayer],
            winner: "draw"
        }
    },
    //Board full & AI won
    {
        inputBoard: [aiPlayer,aiPlayer,aiPlayer,huPlayer,aiPlayer,huPlayer,aiPlayer,huPlayer,aiPlayer],
        outputMove: {
            board: [aiPlayer,aiPlayer,aiPlayer,huPlayer,aiPlayer,huPlayer,aiPlayer,huPlayer,aiPlayer],
            winner: "aiPlayer"
        }
    },
    //Board full & Human won
    {
        inputBoard: [huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer],
        outputMove: {
            board: [huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer,huPlayer],
            winner: "huPlayer"
        }
    },
]