alert('This is the Jeff quiz. Please answer yes or y.');

var answerOne = prompt('Is my name Jeff?');
var score = 0;

if (answerOne.toLowerCase() === 'yes' || answerOne.toLowerCase() === 'y') {
  document.getElementById('questionOne').innerHTML = 'Correct, + 1 score!';
  score++;
}
else {
  document.getElementById('questionOne').innerHTML = 'No, that was incorrect';
}

var answerTwo = prompt('Have I lived in Austria before?');

if (answerTwo.toLowerCase() === 'no' || answerTwo.toLowerCase() === 'n') {
  document.getElementById('questionTwo').innerHTML = 'Correct, + 1 score!';
  score++;
}
else {
  document.getElementById('questionTwo').innerHTML = 'No, that was incorrect';
}

var answerThree = prompt('42 is the answer to life?');

if (answerThree.toLowerCase() === 'yes' || answerThree.toLowerCase() === 'y') {
  document.getElementById('questionThree').innerHTML = 'Correct, + 1 score!';
  score++;
}
else {
  document.getElementById('questionThree').innerHTML = 'No, that was incorrect';
}

document.getElementById('score').innerHTML = 'You scored a ' + score + '!';
