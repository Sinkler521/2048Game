class Score{
    constructor() {
        this.score = document.getElementById('score');
        this.maxScore = document.getElementById('highest_score');
        this.games = [];
    }

    addScore(cell){
        this.score.innerText = Number(this.score.innerText) + Number(cell.innerText)
    }

    addGame(){
        this.games.push(Number(this.score.innerText))
    }

    showMaxScore(){
        this.maxScore.innerText = this.getMaxOfArray(this.games)
    }

    getMaxOfArray(numArray) {
        return Math.max(...numArray);
    }

}

export { Score }