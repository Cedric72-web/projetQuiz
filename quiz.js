class Question {
  constructor(question, reponseA, reponseB, reponseC, goodAnswer) {
    this.question = question;
    this.reponseA = reponseA;
    this.reponseB = reponseB;
    this.reponseC = reponseC;
    this.goodAnswer = goodAnswer;

    this.displayQuestion = function () {
      document.getElementById('question').innerHTML = 'Question n° 1 : ' + question1['question'];
      document.getElementById('reponseA').innerHTML = 'Réponse A : ' + this.reponseA;
      document.getElementById('reponseB').innerHTML = 'Réponse B : ' + this.reponseB;
      document.getElementById('reponseC').innerHTML = 'Réponse C : ' + question1['reponseC'];
    };
  };
};

let quiz = [];

let question1 = new Question("Qu'est-ce qui est jaune et qui attend?", "Jonathan", "Un poussin", "Homer Simpson", 1);
let question2 = new Question("Qu'est-ce qui est jaune et qui attend?", "Jonathan", "Un poussin", "Homer Simpson", 1);

quiz.push(question1);
quiz.push(question2);

console.log(quiz);

question1.displayQuestion();