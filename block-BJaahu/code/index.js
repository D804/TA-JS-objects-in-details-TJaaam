```js
let getMethod = {
isAnswerCorrect :function(index){
return index === this.correctAnswerIndex;
},
getCorrectAnswer : function () {
    return this.options[this.correctAnswerIndex];
},
}
function createQuitz(title,options,correctAnswerIndex) {
    let answer = Object.create(getMethod);
    answer.title = title;
    answer.options = options;
    answer.correctAnswerIndex = correctAnswerIndex;
    return answer;
}
```
```js
function CreateQuitz(title,options,correctAnswerIndex) {
    this.title = title;
    this.options = options;
    this.correctAnswerIndex  = correctAnswerIndex;
}
CreateQuitz.prototype = {
    isAnswerCorrect : function(index) {
        return this.correctAnswerIndex === index;
    },
    getCorrectAnswer : function () {
        return this.options[this.correctAnswerIndex];
    },
}
```
```js
class Question {
    constructor (title,options,correctAnswerIndex) {
     this.title = title;
     this.options = options;
     this.correctAnswerIndex = correctAnswerIndex;

    }
    isAnswerCorrect(index){
        return this.correctAnswerIndex === index;
    }
    getCorrectAnswer() {
        return this.option[this.correctAnswerIndex];
    }
};
```

