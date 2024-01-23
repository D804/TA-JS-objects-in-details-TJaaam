class Quitz  {
    constructor(title,options,correctAnswer){
        this.title = title;
        this.options = options;
        this.correctAnswer = correctAnswer ;
    }
    isCorrect(answer) {
        this.correctAnswer == answer;
}
    getCorrectAnswer(){
        this.correctAnswer;
    }
}