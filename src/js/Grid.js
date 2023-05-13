import {Tile} from "./NumCell.js";

class Grid{
    constructor(gameField) {
        this.gameField = gameField
    }

    initiateField(){
        // at first clean an actual field
        this.clearField()
        this.tilesArray = [];
        this.tile = new Tile(this.gameField, this.tilesArray);

        // now create cells (empty ones for grid)
        for(let i = 0; i < 16; i++){
            let newCell = document.createElement('DIV');
            newCell.classList.add('cell');
            this.gameField.appendChild(newCell)
        }

        this.tile.createOneTile(true)
    }


    clearField(){
        while(this.gameField.firstChild){
            this.gameField.removeChild(this.gameField.firstChild)
        }
    }

    cellUp(){
        this.tile.moveUp()
        this.tile.createOneTileCaught(true)
    }
    cellDown(){
        this.tile.moveDown()
        this.tile.createOneTileCaught(true)
    }
    cellLeft(){
        this.tile.moveLeft()
        this.tile.createOneTileCaught(true)
    }
    cellRight(){
        this.tile.moveRight()
        this.tile.createOneTileCaught(true)
    }
}

export { Grid }
