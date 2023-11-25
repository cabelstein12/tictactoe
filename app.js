
let gameBoard = [[0,0,0],[0,0,0],[0,0,0]];

function resetGame(){
    gameBoard = [[0,0,0],[0,0,0],[0,0,0]];
}

const Player = [
    {name: 'player1',
     value: 1,
    },
    {name: 'player2',
     value: 2,
    }
]

let lastMove;

function placeToken(i, j, k){
    
    for(let index = i; index < gameBoard.length; index++){
        for(let inner = j; inner < gameBoard[index].length; inner++){
            if(gameBoard[index][inner] != 0){
                console.log('invalid placement. try again');
                break;
    
            } else {
                gameBoard[i][j] = Player[k].value;
                console.log(`${Player[k].name} played a token`);
                lastMove = k;
                break;
            
        }
    }
    console.table(gameBoard);  
    console.log(`the previous move was by ${Player[lastMove].name}`)
    return lastMove;           
}
}