function guessingGame () {
  'use strict';
  var QA = [['Is my name Jeff?', 'y'],
            ['Have I lived in Austria before?', 'n'],
            ['42 is the answr to life?', 'y'],
            ['I have a chocolate lab named Charlie?', 'y'],
            ['Is the world flat?', 'n']];

  var score = 0;
  var question;
  var answer;
  var userInput;

  alert('This is the Jeff quiz. Please answer yes or no.');

  for (var i = 0; i < 5; i++) {
    question = QA[i][0];
    answer = QA[i][1];
    userInput = prompt(question);
    if (userInput.charAt(0).toLowerCase() == answer.toLowerCase()) {
      score++;
      console.log('The user\'s answer to question ' + (i + 1) + ' was ' + userInput + ' and was correct.');
      document.getElementById('question' + (i)).innerHTML = 'Correct, score +1!';
    } else {
      console.log('The user\'s answer to question ' + (i + 1) + ' was ' + userInput + ' and was incorrect.');
      document.getElementById('question' + (i)).innerHTML = 'Incorrect.';
    }
  }

  //sixth
  alert('Now try to guess my secret number! It is a whole number between 0 and 30!');
  var answerSix = '24';
  var guessing = true;
  var guessingCounter = 1;

  while (guessing == true) {
    var userAnswer = prompt('This is your ' + guessingCounter + ' guess. Please enter a number between 0 and 30: ' );
    toString(userAnswer);
    console.log('This is guess ' + guessingCounter + ' and the user answer is: ' + userAnswer);
    if (userAnswer == answerSix) {
      alert('Correct! It took you ' + guessingCounter + ' tries!');
      document.getElementById('question5').innerHTML = 'Correct, score + 1!';
      score++;
      guessing = false;
    }
    else if (userAnswer < answerSix && userAnswer >= 0) {
      alert('Incorrect, guess higher! That was your ' + guessingCounter + ' guess.');
      guessingCounter++;
      if (guessingCounter > 4) {
        guessing = false;
      }
    }
    else if (userAnswer > answerSix && userAnswer <= 30) {
      alert('Incorrect, guess lower! That was your ' + guessingCounter + ' guess.');
      guessingCounter++;
      if (guessingCounter > 4) {
        document.getElementById('question5').innerHTML = 'No, that was incorrect.';
        guessing = false;
      }
    }
    else {
      alert('That was not a valid guess, try again. I won\'t count that against your 4 attempts.');
    }
  }

  //seventh
  alert('Now you have 6 tries to guess one of my favorite foods!');

  var answerSeven = ['steak', 'pizza', 'beer', 'teriyaki', 'cheese'];
  var guessingTwo = true;

  for (var j = 1; j < 7; j++) {
    while (guessingTwo) {
      userInput = prompt('This is your ' + j + ' guess. Enter your guess: ');
      toString(userInput).toLowerCase();
      console.log('This is guess number: ' + j + ' and the users guess: ' + userInput);

      for (var k = 0; k < answerSeven.length; k++) {
        if (userInput === answerSeven[k]) {
          alert('That is a correct answer!');
          alert('My favorite foods are: ' + answerSeven.toString());
          document.getElementById('question6').innerHTML = 'Correct, score + 1!';
          score++;
          guessingTwo = false;
          break;
        }
      }
      alert('That is not a correct answer!');
      break;
    }
    if (!guessingTwo) {
      break;
    }
  }

  if (j >= 6) {
    alert('Sorry you are out of guesses!');
    alert('My favorite foods: ' + answerSeven.toString());
    document.getElementById('question6').innerHTML = 'No, that was incorrect.';
  }

  var userName = prompt('What is your name?');
  alert(userName + ', you scored a ' + score + ' out of 7! I\'ve seen better');
  document.getElementById('score').innerHTML = 'You scored a ' + score + ' out of 7!';
}

guessingGame();
