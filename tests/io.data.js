

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
        inputBoard: [aiPlayer,1,aiPlayer,3,4,5,6,7,8],
        outputMove: 1
    },
    {
        inputBoard: [0,1,aiPlayer,3,huPlayer,huPlayer,6,7,8],
        outputMove: 3
    },
    //Board full & tie
    {
        inputBoard: [aiPlayer,aiPlayer,huPlayer,huPlayer,aiPlayer,aiPlayer,huPlayer,huPlayer,huPlayer],
        outputMove: undefined
    },
    {
        inputBoard: [0,1,huPlayer,3,huPlayer,5,6,7,aiPlayer],
        outputMove: 6
    },
]
