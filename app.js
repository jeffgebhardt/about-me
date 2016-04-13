alert('This is the Jeff quiz. Please answer yes or no.');

var score = 0;

var answerOne = prompt('Is my name Jeff?').toLowerCase();
if (answerOne === 'yes' || answerOne === 'y') {
  document.getElementById('questionOne').innerHTML = 'Correct, + 1 score!';
  console.log('The users answer to question 1 was ' + answerOne + ' and was correct.');
  score++;
}
else {
  document.getElementById('questionOne').innerHTML = 'No, that was incorrect';
  console.log('The users answer was question 1 ' + answerOne + ' and was incorrect.');
}

var answerTwo = prompt('Have I lived in Austria before?').toLowerCase();
if (answerTwo === 'no' || answerTwo === 'n') {
  document.getElementById('questionTwo').innerHTML = 'Correct, + 1 score!';
  console.log('The users answer to question 2 was ' + answerTwo + ' and was correct.');
  score++;
}
else {
  document.getElementById('questionTwo').innerHTML = 'No, that was incorrect';
  console.log('The users answer to question 2 was ' + answerTwo + ' and was incorrect.');
}

var answerThree = prompt('42 is the answer to life?').toLowerCase();
if (answerThree === 'yes' || answerThree === 'y') {
  document.getElementById('questionThree').innerHTML = 'Correct, + 1 score!';
  console.log('The users answer to question 3 was ' + answerThree + ' and was correct.');
  score++;
}
else {
  document.getElementById('questionThree').innerHTML = 'No, that was incorrect';
  console.log('The users answer to question 3 was ' + answerThree + ' and was incorrect.');
}

var answerFour = prompt('I have a chocolate lab named Charlie?').toLowerCase();
if (answerFour === 'yes' || answerFour === 'y') {
  document.getElementById('questionFour').innerHTML = 'Correct, + 1 score!';
  console.log('The users answer to question 4 was ' + answerFour + ' and was correct.');
  score++;
}
else {
  document.getElementById('questionFour').innerHTML = 'No, that was incorrect';
  console.log('The users answer to question 4 was ' + answerFour + ' and was incorrect.');
}

var answerFive = prompt('Is the world flat?').toLowerCase();
if (answerFive === 'no' || answerFive === 'n') {
  document.getElementById('questionFive').innerHTML = 'Correct, + 1 score!';
  console.log('The users answer to question 5 was ' + answerFive + ' and was correct.');
  score++;
}
else {
  document.getElementById('questionFive').innerHTML = 'No, that was incorrect';
  console.log('The users answer to question 5 was ' + answerFive + ' and was incorrect.');
}

document.getElementById('score').innerHTML = 'You scored a ' + score + '!';

alert('Now try to guess my secret number! It is a whole number between 0 and 30!');
var answerSix = '24';
var guessing = true;
var guessingCounter = 1;

while (guessing === true) {
  var userAnswer = prompt('This is your ' + guessingCounter + ' guess. Please enter a number between 0 and 30: ' );
  toString(userAnswer);
  console.log('This is guess ' + guessingCounter + 'And the user answer is: ' + userAnswer);
  if (userAnswer === answerSix) {
    alert('Correct! It took you ' + guessingCounter + ' tries!');
    guessing = false;
  }
  else if (userAnswer < answerSix && userAnswer >= 0) {
    alert('Incorrect, guess higher! That was your ' + guessingCounter + ' guess.');
    guessingCounter++;
    if (guessingCounter > 3) {
      guessing = false;
    }
  }
  else if (userAnswer > answerSix && userAnswer <= 30) {
    alert('Incorrect, guess lower! That was your ' + guessingCounter + ' guess.');
    guessingCounter++;
    if (guessingCounter > 3) {
      guessing = false;
    }
  }
  else {
    alert('That was not a valid guess, try again. I won\'t count that against your 4 attempts.');
  }
}
