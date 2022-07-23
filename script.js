

const gameBoard = (function() {
    const board = [];
    return {
        board,
    };
})();

const player = function (name, move) {
    return {getPlayerName,
        name,
        move};
};

const player1 = player('Player 1', 'X');
const player2 = player('Player 2', 'O');

const displayController = (function() {
    
})