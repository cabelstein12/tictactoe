
let gameBoard;
let k;


function resetGame(){
    gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
    k = 0; 
}   


const Player = [
    {name: 'Player 1',
     value: 1,
    },
    {name: 'Player 2',
     value: 2,
    }]


function alternatePlayer(currentPlayer){

    if(currentPlayer === 0){
        return k = 1
    } else {
        return k = 0
    }
}

function placeToken(i, j, k){
    
    for(let index = i; index < gameBoard.length; index++){
        for(let inner = j; inner < gameBoard[index].length; inner++){
            if(gameBoard[index][inner] != 0){
                console.log('invalid placement. try again');
                // return `${Player[k].name}'s turn` ;
            
    
            } else {
                gameBoard[i][j] = Player[k].value;
                console.log(`${Player[k].name} played a token`);
                let testWin =  checkWin(k+1)
                if(testWin === true){
                    return `${Player[k].name} Wins!`
                }else {
                    k = alternatePlayer(k);
                }
                
            }
            console.table(gameBoard);  
            return `${Player[k].name}'s turn` ;
        }
    }
}

function checkWin(player){
    
    for(let i = 0; i < 3; i++){
        if(gameBoard[0][i] === player && gameBoard[1][i] === player && gameBoard[2][i] === player || 
            gameBoard[i][0] === player && gameBoard[i][1] === player && gameBoard[i][2] === player){
                return  true;
            }

        }if(gameBoard[0][0] === player && gameBoard[1][1] === player && gameBoard[2][2] === player || 
            gameBoard[0][2] === player && gameBoard[1][1] === player && gameBoard[2][0] === player){
            return true;
        } else {
            return false;
        }
}
resetGame();