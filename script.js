
const gameBoard = (function() {
    let board = [];
    return {board};
})();

const createPlayer = function (name, symbol, turn) {
    return {name, symbol, turn};
};

const game = (function() {
    const player1 = createPlayer('Player 1', 'X', true);
    const player2 = createPlayer('Player 2', 'O', false);

    const playerMove = (function() {
        const boxes = document.querySelectorAll('.grid-box');
        boxes.forEach((boxes) => {
            boxes.addEventListener('click', e => {
                if (player1.turn == true && e.target.textContent == "") {
                    gameBoard.board[e.target.id] = player1.symbol;
                    boxes.textContent = player1.symbol;
                    player1.turn = false;
                    player2.turn = true;
                    console.log(gameBoard.board);
                } else if (player2.turn == true && e.target.textContent == "") {
                    gameBoard.board[e.target.id] = player2.symbol;
                    boxes.textContent = player2.symbol;
                    player1.turn = true;
                    player2.turn = false;
                    console.log(gameBoard.board);
                } else {
                    return;
                }
            })
        })
    })()
    return {playerMove};
})()

// const renderArrayToScreen = (function() {
//     const boxes = document.querySelectorAll('.grid-box');
//     console.log(boxes);
//     boxes.forEach((boxes, index) => {
//         boxes.textContent = gameBoard.board[index];
//     })
// })();