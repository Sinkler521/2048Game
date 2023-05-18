
class Tile{
    constructor(gridField, tilesList) {
        this.gridField = gridField;
        this.tilesList = tilesList;
    }

    createOneTile(canBeFour=false){
        let newTile = document.createElement('DIV');
        newTile.classList.add('tile');

        // calculating x and y both for visible part on webpage and for this object props

        let [randomX, randomY] = this.findUnique()

        newTile.style.setProperty('--shift-x', String(randomX))
        newTile.style.setProperty('--shift-y', String(randomY))
        newTile.x = randomX
        newTile.y = randomY

        this.gridField.appendChild(newTile)

        if(canBeFour){
            let random = this.randNum(10)
            // 5 is just a random number. We need 10% chance to get 4 instead of 2 when the tile creating
            if(random === 5){
                newTile.innerText = '4'
                newTile.value = 4
            }
            else{
                newTile.innerText = '2'
                newTile.value = 2
            }
        }
        else{
            newTile.innerText = '2'
            newTile.value = 2
        }
        this.tilesList.push(newTile)
    }

    randNum(max){
        return Number(Math.floor(Math.random() * max))
    }

    findUnique() {
        let x = this.randNum(4);
        let y = this.randNum(4);
        let allowed = true;

        for (let i = 0; i < this.tilesList.length; i++) {
            if (this.tilesList[i].x === x && this.tilesList[i].y === y) {
                allowed = false;
                break;
            }
        }

        if (allowed) {
            return [x, y];
        } else {
            return this.findUnique();
        }
    }
    createOneTileCaught(canBeFour=false){
        try{
            this.createOneTile(canBeFour)
        }
        catch (RangeError){
            console.log('max cells!')
            return
        }
    }

    addScore(cell){
        let scoreTable = document.getElementById('score');
        scoreTable.innerText = Number(scoreTable.innerText) + Number(cell.innerText)
    }

    moveUp() {
        this.tilesList.sort((a, b) => a.y - b.y);

        for (let i = 0; i < this.tilesList.length; i++) {
            const cell = this.tilesList[i];
            const currentX = cell.x;
            let newY = cell.y;

            for (let j = cell.y - 1; j >= 0; j--) {
                const occupiedCell = this.tilesList.find(tile => tile.x === currentX && tile.y === j);

                if (!occupiedCell) {
                    newY = j;
                } else if (occupiedCell.innerText === cell.innerText) {
                    occupiedCell.innerText = String(Number(cell.innerText) * 2);
                    this.addScore(occupiedCell)
                    this.changeTileColor(occupiedCell)
                    cell.remove();
                    this.tilesList.splice(i, 1);
                    i--;
                    break;
                }
            }

            if (cell.y !== newY) {
                cell.y = newY;
                cell.style.setProperty('--shift-y', String(newY));
            }
        }
    }

    moveDown() {
        this.tilesList.sort((a, b) => b.y - a.y);

        for (let i = 0; i < this.tilesList.length; i++) {
            const cell = this.tilesList[i];
            const currentX = cell.x;
            let newY = cell.y;

            for (let j = cell.y + 1; j < 4; j++) {
                const occupiedCell = this.tilesList.find(tile => tile.x === currentX && tile.y === j);

                if (!occupiedCell) {
                    newY = j;
                } else if (occupiedCell.innerText === cell.innerText) {
                    occupiedCell.innerText = String(Number(cell.innerText) * 2);
                    this.addScore(occupiedCell)
                    this.changeTileColor(occupiedCell)
                    cell.remove();
                    this.tilesList.splice(i, 1);
                    i--;
                    break;
                }
            }

            if (cell.y !== newY) {
                cell.y = newY;
                cell.style.setProperty('--shift-y', String(newY));
            }
        }
    }


    moveLeft() {
        this.tilesList.sort((a, b) => a.x - b.x);

        for (let i = 0; i < this.tilesList.length; i++) {
            const cell = this.tilesList[i];
            const currentY = cell.y;
            let newX = cell.x;

            for (let j = cell.x - 1; j >= 0; j--) {
                const occupiedCell = this.tilesList.find(tile => tile.x === j && tile.y === currentY);

                if (!occupiedCell) {
                    newX = j;
                } else if (occupiedCell.innerText === cell.innerText) {
                    occupiedCell.innerText = String(Number(cell.innerText) * 2);
                    this.addScore(occupiedCell)
                    this.changeTileColor(occupiedCell)
                    cell.remove();
                    this.tilesList.splice(i, 1);
                    i--;
                    break;
                }
            }

            if (cell.x !== newX) {
                cell.x = newX;
                cell.style.setProperty('--shift-x', String(newX));
            }
        }
    }

    moveRight() {
        this.tilesList.sort((a, b) => b.x - a.x);

        for (let i = 0; i < this.tilesList.length; i++) {
            const cell = this.tilesList[i];
            const currentY = cell.y;
            let newX = cell.x;

            for (let j = cell.x + 1; j < 4; j++) {
                const occupiedCell = this.tilesList.find(tile => tile.x === j && tile.y === currentY);

                if (!occupiedCell) {
                    newX = j;
                } else if (occupiedCell.innerText === cell.innerText) {
                    occupiedCell.innerText = String(Number(cell.innerText) * 2);
                    this.addScore(occupiedCell)
                    this.changeTileColor(occupiedCell)
                    cell.remove();
                    this.tilesList.splice(i, 1);
                    i--;
                    break;
                }
            }

            if (cell.x !== newX) {
                cell.x = newX;
                cell.style.setProperty('--shift-x', String(newX));
            }
        }
    }

    changeTileColor(tile){

        switch (tile.innerText){
            case '4':
                tile.style.backgroundColor = '#dadce3';
                break;
            case '8':
                tile.style.backgroundColor = '#cbd2f3';
                break;
            case '16':
                tile.style.backgroundColor = '#b3bef3';
                break;
            case '32':
                tile.style.backgroundColor = '#9eacef';
                break;
            case '64':
                tile.style.backgroundColor = '#98a0b8';
                break;
            case '128':
                tile.style.backgroundColor = '#8994b3';
                break;
            case '256':
                tile.style.backgroundColor = '#8fbdaa';
                break;
            case '512':
                tile.style.backgroundColor = '#68b394';
                break;
            case '1028':
                tile.style.backgroundColor = '#4ba37f';
                break;
            case '2048':
                tile.style.backgroundColor = '#218f62'
        }
    }
}

export { Tile }
