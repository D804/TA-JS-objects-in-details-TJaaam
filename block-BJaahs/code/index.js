// Without Object
let title = 'Where is the capital of Jordan';
let options =  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex = 1;

function isAnswerCorrect (index) {
    return index === correctAnswerIndex;
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
} 
// Organize using object
let quitz = {
 title:'Where is the capital of Jordan',
 options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
 correctAnswerIndex : 1,
 isAnswerCorrect:function (index) {
  return quitz.correctAnswerIndex === index;
 },
 getCorrectAnswer : function(){
    return quitz.options[quitz.correctAnswerIndex];
 }
}
// Use a function to create object
function quitz (title,options,correctAnswerIndex) {
   let  question = {};
   question.title = title;
   question.options = options;
   question.correctAnswerIndex = correctAnswerIndex;
   question.isAnswerCorrect = function (index) {
    return question.correctAnswerIndex === index;
    };
    question.getCorrectAnswer= function() {
        return question.options[question.correctAnswerIndex];
    };
    return question;
}
let firstQuestion = quitz('Where is the capital of Jordan',
                       ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
                       1);

 let secondQuestion = quitz('Where is the capital of Russia',
                        ['Tashkent', 'Amaan', 'Moscow', 'Nairobi'],
                        2);
                        
// Convert the function to use `this` keyword
function quitz (title,options,correctAnswerIndex) {
    let  question = {};
    question.title = title;
    question.options = options;
    question.correctAnswerIndex = correctAnswerIndex;
    question.isAnswerCorrect = function (index) {
     return this.correctAnswerIndex === index;
     };
     question.getCorrectAnswer= function() {
         return this.options[question.correctAnswerIndex];
     };
     return question;
 }
 let firstQuestion = quitz('Where is the capital of Jordan',
                        ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
                        1);
 
  let secondQuestion = quitz('Where is the capital of Russia',
                         ['Tashkent', 'Amaan', 'Moscow', 'Nairobi'],
                         2);
```js
    const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
                         
};