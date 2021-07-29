for (var i = 0; i < quizObject.questions.length; i++) {

    var question = quizObject.questions[i].questionArray;

    var questionEl = $("<span>").text(question);

    var questionRandom = questionEl[Math.floor(Math.random() * quizObject.questions.length)];

    $(questionRandom).appendTo("#question-title");

    var choice = quizObject.questions[i].choicesArray;
    var choiceEl = $("<span>").text(choice);
    var choiceRandom = choiceEl[Math.floor(Math.random() * quizObject.questions.length)];
    $(choiceRandom).appendTo("#choices");
    console.log(questionRandom);

}

