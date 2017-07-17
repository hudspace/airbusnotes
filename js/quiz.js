



// Defines the number of questions in the quiz
var numQues = 20;

// Defines the number of choices per question
var numChoi = 4;

// Defines the number of questions displayed in answer area
var answers = new Array(4);

// Answers to questions
answers[0] = "1000 psi";
answers[1] = "To electrically isolate the antiskid system, in case that is what's causing the braking malfunction.";
answers[2] = "Oxygen Mask...ON / 100% / EMER";
answers[3] = "10 kts";
answers[4] = "250 kts/220 kts";
answers[5] = "350 kts/0.82M";
answers[6] = "100 ft AGL";
answers[7] = "300°C";
answers[8] = "Fans off";
answers[9] = "2 min on, 15 sec off, 2 min on, 15 sec off, 1 min on, 30 min off";
answers[10] = "One ADR";
answers[11] = "650°C";
answers[12] = "3000 psi";
answers[13] = "38 kts, gust included";
answers[14] = "No";
answers[15] = "171,519 lbs";
answers[16] = "25,000 ft";
answers[17] = "36°C";
answers[18] = "39,100 ft";
answers[19] = "1090°C";


function getScore(form) {
  var score = 0;
  var currElt;
  var currSelection;
  for (i=0; i<numQues; i++) {
    currElt = i*numChoi;
    for (j=0; j<numChoi; j++) {
      currSelection = form.elements[currElt + j];
      if (currSelection.checked) {
        if (currSelection.value == answers[i]) {
          score++;
          break;
        }
      }
    }
  }
  score = Math.round(score/numQues*100);
  form.percentage.value = score + "%";
  var correctAnswers = "";
  for (i=1; i<=numQues; i++) {
    correctAnswers += i + ". " + answers[i-1] + "\r\n";
  }

  //This part will go away eventually; will instead write function to list only answers that were incorrect
  form.solutions.value = correctAnswers;
}
//  End -->









