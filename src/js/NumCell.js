
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
        // CHECK IF THERE IS SUCH CELL AND RECALL RANDOM FUNCTION IF IT IS
        //////////////////////////////////////////////////////////////


        newTile.style.setProperty('--shift-x', String(randomX))
        newTile.style.setProperty('--shift-y', String(randomY))
        newTile.x = randomX
        newTile.y = randomY

        this.gridField.appendChild(newTile)
        this.tilesList.push(newTile)

        if(canBeFour){
            let random = this.randNum(10)
            // 5 is just a random number. We need 10% chance to get 4 instead of 2 when the tile creating
            if(random === 5){
                newTile.innerText = '4'
            }
            else{
                newTile.innerText = '2'
            }
        }
        else{
            newTile.innerText = '2'
        }
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

    moveUp() {
        // sort cells by y
        this.tilesList.sort((a, b) => a.y - b.y);

        // move cells up
        for (let i = 0; i < this.tilesList.length; i++) {
            let cell = this.tilesList[i];
            let currentX = cell.x;
            let currentY = cell.y;

            let newY = currentY;

            // Find nearest free position above the current cell
            for (let j = currentY - 1; j >= 0; j--) {
                let isOccupied = false;
                for (let k = 0; k < this.tilesList.length; k++) {
                    if (this.tilesList[k].x === currentX && this.tilesList[k].y === j) {
                        isOccupied = true;
                        break
                    }
                }
                if (!isOccupied) {
                    newY = j;
                }
            }

            // Update cell coordinates and move it to the new position
            cell.y = newY;
            cell.style.setProperty('--shift-y', String(newY));
        }
    }
    moveDown(){
        this.tilesList.sort((a, b) => b.y - a.y);

        for (let i = 0; i < this.tilesList.length; i++) {
            const cell = this.tilesList[i];
            const currentX = cell.x;
            const currentY = cell.y;

            let newY = currentY;

            for (let j = currentY + 1; j < 4; j++) {
                let isOccupied = false;
                for (let k = 0; k < this.tilesList.length; k++) {
                    if (this.tilesList[k].x === currentX && this.tilesList[k].y === j) {
                        isOccupied = true;
                        break;
                    }
                }
                if (!isOccupied) {
                    newY = j;
                }
            }

            cell.y = newY;
            cell.style.setProperty('--shift-y', String(newY));
        }
    }

    moveLeft(){
        this.tilesList.sort((a, b) => b.x - a.x);

        for (let i = 0; i < this.tilesList.length; i++) {
            const cell = this.tilesList[i];
            const currentX = cell.x;
            const currentY = cell.y;

            let newX = currentX;

            for (let j = currentX - 1; j >= 0; j--) {
                let isOccupied = false;
                for (let k = 0; k < this.tilesList.length; k++) {
                    if (this.tilesList[k].y === currentY && this.tilesList[k].x === j) {
                        isOccupied = true;
                        break;
                    }
                }
                if (!isOccupied) {
                    newX = j;
                }
            }

            cell.x = newX;
            cell.style.setProperty('--shift-x', String(newX));
        }
    }

    moveRight(){
        this.tilesList.sort((a, b) => a.x - b.x);

        for (let i = 0; i < this.tilesList.length; i++) {
            const cell = this.tilesList[i];
            const currentX = cell.x;
            const currentY = cell.y;

            let newX = currentX;

            for (let j = currentX + 1; j < 4; j++) {
                let isOccupied = false;
                for (let k = 0; k < this.tilesList.length; k++) {
                    if (this.tilesList[k].y === currentY && this.tilesList[k].x === j) {
                        isOccupied = true;
                        break;
                    }
                }
                if (!isOccupied) {
                    newX = j;
                }
            }

            cell.x = newX;
            cell.style.setProperty('--shift-x', String(newX));
        }
    }
}

export { Tile }
