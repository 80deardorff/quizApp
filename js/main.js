
// FUNCTION FOR SUBMITTING QUIZ RESULTS
function submit() {
  // VARIABLE FOR NUMBER OF CORRECT ANSWERS
  let numCorrect = 0;
  // CHECKS ANSWERS FOR CORRECT VALUES AND ADDS 1 TO THE NUMBER CORRECT FOR EACH CORRECT ANSWER
  for (let i = 1; i <= 2; i++) {
    let answer = document.getElementsByName('group' + i);
    for (let j = 0; j < answer.length; j++) {
      if (answer[j].value == 'correct' && answer[j].checked) {
        numCorrect++;
      }
      // RESETS ANSWERS AFTER SUBMISSION OF TEST
      answer[j].checked = false;
    }
  }
  // POSTS SCORE & CHANGES MESSAGE IN MODAL ACCORDINGLY
  let score = document.getElementById('score');
  let message = document.getElementById('exampleModalLongTitle')
  score.innerText = 'Your score : ' + numCorrect + '/10';
  if (numCorrect == 10) {
    message.innerText = 'Perfect!';
  } else if (numCorrect > 5) {
    message.innerText = 'The force is strong with you.';
  } else {
    message.innerText = 'The force is not very strong with you.';
  }
}








let audio1 = document.getElementById('audio1')
function soundEffect() {
  audio1.play();
}
