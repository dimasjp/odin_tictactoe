
const gameBoard = (() => {
    let board = [];
    return {board};
})();

const createPlayer = function (name, symbol, turn) {
    return {name, symbol, turn};
};

const game = (() => {
    const player1 = createPlayer('Player 1', 'X', true);
    const player2 = createPlayer('Player 2', 'O', false);

    let turns = 0;
    let winFlag = false;
    let winner = null;

    const playerMove = (() => {
        const boxes = document.querySelectorAll('.grid-box');
        boxes.forEach((boxes) => {
            boxes.addEventListener('click', e => {
                if (player1.turn == true && e.target.textContent == "" && winFlag == false) {
                    gameBoard.board[e.target.id] = player1.symbol;
                    boxes.textContent = player1.symbol;
                    player1.turn = false;
                    player2.turn = true;
                    console.log(gameBoard.board);
                } else if (player2.turn == true && e.target.textContent == "" && winFlag == false) {
                    gameBoard.board[e.target.id] = player2.symbol;
                    boxes.textContent = player2.symbol;
                    player1.turn = true;
                    player2.turn = false;
                    console.log(gameBoard.board);
                } else {
                    return;
                }
                checkWinner();
                checkTie();
            })
        })
    })()

    const winCondition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]

    const checkWinner = () => {
        turns++;
        winCondition.forEach((item, id) => {
            if (gameBoard.board[item[0]] === player1.symbol && gameBoard.board[item[1]] === player1.symbol && gameBoard.board[item[2]] === player1.symbol) {
                console.log("X Wins!");
                winFlag = true;
                game.winner = player1;
            } else if (gameBoard.board[item[0]] === player2.symbol && gameBoard.board[item[1]] === player2.symbol && gameBoard.board[item[2]] === player2.symbol) {
                console.log("O Wins!");
                winFlag = true;
                game.winner = player2;
            }
        console.log("Turn " + turns);
        displayController.winDisplay();
        })
    };

    const checkTie = () => {
        if (winFlag === false && winner === null && turns == 9) {
            console.log("Tie!");
            game.winner = "tie";
        }
        displayController.winDisplay();
    }

    const gameReset = () => {
        game.winner = null;
        player1.turn = true;
        player2.turn = false;
        turns = 0;
    }

    return {playerMove, checkWinner, checkTie, gameReset, turns, winner, player1, player2};
})();

const displayController = (() => {  
    const gameStat = document.querySelector('.game-status');

    const winDisplay = () => {
        if(game.winner === game.player1) {
            gameStat.textContent = game.player1.symbol + " Won!";
        } else if(game.winner === game.player2) {
            gameStat.textContent =  game.player2.symbol + " Won!";
        } else if(game.winner === "tie") {
            gameStat.textContent = "Tie!";
        } else {
            return;
        };
    }

    const gameReplay = () => {
        game.gameReset();
    }
    return {winDisplay, gameReplay}
})();

// const renderArrayToScreen = (function() {
//     const boxes = document.querySelectorAll('.grid-box');
//     console.log(boxes);
//     boxes.forEach((boxes, index) => {
//         boxes.textContent = gameBoard.board[index];
//     })
// })();