
let gameBoard;
let tracker = 0;
function createPlayer(name, value){
    return {
        name: name,
        value: value,
    }
}

const player1 = createPlayer('Player 1', 1);
const player2 = createPlayer('Player 2', 2);
let player = [player1, player2];


function resetGame(){
    gameBoard = [[0,0,0],[0,0,0],[0,0,0]]; 
    console.table(gameBoard)
//    gameBoard = [[1,2,2],[2,1,2],[0,2,1]];
}   


function alternatePlayer(currentPlayer){

    if(currentPlayer.value == 1){
        return player[1];
    } else {
        return player[0];
    }
}

function placeToken(i, j, player){
    // let nextPlayer;
    for(let index = i; index < gameBoard.length; index++){
        if(typeof(nextPlayer) == 'undefined'){
            nextPlayer = alternatePlayer(player);
        }
        for(let inner = j; inner < gameBoard[index].length; inner++){
            if(gameBoard[index][inner] != 0){
                console.log('invalid placement. try again');

            } else {
                gameBoard[i][j] = nextPlayer.value;
                tracker++;
                console.log(`${nextPlayer.name} played a token`, 'moves:', tracker);
                let testWin =  checkWin(nextPlayer);
                let testDraw = checkDraw();
                if(testDraw){
                    return "Its a Draw";
                }
                if(testWin){
                    console.table(gameBoard);  
                    return `${nextPlayer.name} Wins!`
                }else {
                    nextPlayer = alternatePlayer(nextPlayer);
                    console.table(gameBoard);  
                    console.log(`${nextPlayer.name}'s turn` );
                    return 
                }
            }
        }
    }
}

function checkWin(player){
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
}
;
function checkDraw(){
    if(tracker === 9) {
        return true
    } else {
        return false
    }
}
resetGame();