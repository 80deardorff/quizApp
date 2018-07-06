let numCorrect = 0;

// FUNCTION THAT CHECKS ANSWERS FOR CORRECT VALUES AND ADDS 1 TO THE NUMBER CORRECT FOR EACH CORRECT ANSWER
function submit() {
  for (let i = 1; i <= 2; i++) {
    let answer = document.getElementsByName('group' + i);
    for (let j = 0; j < answer.length; j++) {
      if (answer[j].value == 'correct' && answer[j].checked) {
        console.log('yes');
        numCorrect++;
      }
    }
  }
}

let audio1 = document.getElementById('audio1')
function soundEffect() {
  audio1.play();
}
