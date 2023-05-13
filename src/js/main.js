import {Grid} from "./Grid.js";

let buttonNewGame = document.getElementById('new_game');
let gameBoard = document.getElementById('game_board')
let gridObject = new Grid(gameBoard)

buttonNewGame.addEventListener('click', () => {
    gridObject.initiateField();
});

document.addEventListener('keydown', function (e){
    if(e.key === 'w' || e.key === 'W'){
        e.preventDefault()
        gridObject.cellUp()
    }
    else if(e.key === 'a' || e.key === 'A'){
        e.preventDefault()
        gridObject.cellLeft()
    }
    else if(e.key === 'd' || e.key === 'D'){
        e.preventDefault()
        gridObject.cellRight()
    }
    else if(e.key === 's' || e.key === 'S'){
        e.preventDefault()
        gridObject.cellDown()
    }
})

export { buttonNewGame, gridObject }
