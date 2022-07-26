
const createPlayer = function (name, symbol) {
    return {name, symbol};
};

const player1 = createPlayer('Player 1', 'X');
const player2 = createPlayer('Player 2', 'O');


const gameBoard = (function() {
    const board = ["X", "O", "X", "", "X"];

    return {board,};
})();

const renderArrayToScreen = (function() {
    const boxes = document.querySelectorAll('.grid-box');
    console.log(boxes);
    boxes.forEach((boxes, index) => {
        boxes.textContent = gameBoard.board[index];
    })
})();