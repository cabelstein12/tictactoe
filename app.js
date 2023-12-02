
const game = (function () {

 const createPlayer = function(name, value){
    return {
        name: name,
        value: value,
         }
    }


let gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
let tracker = 0;

const player1 = createPlayer('Player 1', 1);
const player2 = createPlayer('Player 2', 2);

let player = [player1, player2];
let currentPlayer;


const resetGame = function(){
   return gameBoard = [[0,0,0],[0,0,0],[0,0,0]],
   console.table(gameBoard),
   document.querySelectorAll('.token-slot').textContent = '',
   tracker = 0,
   document.querySelectorAll('.token-slot').forEach(e => e.textContent = '');
//    gameBoard = [[1,2,2],[2,1,2],[0,2,1]];
}   


const alternatePlayer = function(currentPlayer){

    if(currentPlayer.value == 1){
        return player[1];
    } else {
        return player[0];
    }
}

const placeToken = function(i, j, player){
    // let nextPlayer;
    for(let index = i; index < gameBoard.length; index++){
        if(typeof(currentPlayer) == 'undefined'){
            currentPlayer = alternatePlayer(player);
        }
        for(let inner = j; inner < gameBoard[index].length; inner++){
            if(gameBoard[index][inner] != 0){
                return console.log('invalid placement. try again');
            } else {
                let temp = document.querySelector(`.${cellNum}`);
                gameBoard[i][j] = currentPlayer.value;
                tracker++;
                if(tracker % 2 == 0){
                    temp.textContent = 'o';

                } else {
                    temp.textContent = 'x';
                }
                console.log(`${currentPlayer.name} played a token`, 'moves:', tracker);
                let testWin =  checkWin(currentPlayer);

                if(testWin){
                    console.table(gameBoard);  
                    const winner = console.log(`${currentPlayer.name} Wins!`);
                    return resetGame();
                }
                let testDraw = checkDraw();                 
                if(testDraw){
                    console.log('Its a Draw');
                    resetGame();
                    return "Its a Draw";
                }

                else {
                currentPlayer = alternatePlayer(currentPlayer);
                     
                return console.table(gameBoard),  
                console.log(`${currentPlayer.name}'s turn` );
                }
            }
        }
    }
}


const checkWin = function(player){
    player = player.value;
    for(let i = 0; i < 3; i++){
        if(gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player || 
            gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player){
                return true;
            }

        }if(gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player || 
            gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player){
            return true;
        } else {
            return false;
        }
};
const checkDraw = function (){
    if(tracker === 9) {
        return true
    } else {
        return false
    }
}
// resetGame();
return {createPlayer, player, resetGame, alternatePlayer, placeToken, checkWin, checkDraw, currentPlayer};

})();


const gameCells = document.querySelector('.game-container').children;
let gameCell = Array.from(gameCells);
let cellNum ;
for (let index = 0; index < gameCell.length; index++) {
    gameCell[index].addEventListener('click', function() {
        const row = Math.floor(index / 3);
        const col = index % 3;
        cellNum =  gameCell[index].classList[1];
        game.placeToken(row, col, game.player);

        // cellNum = document.querySelector();
    })
    ;
}

