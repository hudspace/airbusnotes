<script language="JavaScript">


<!-- Begin
// Insert number of questions
var numQues = 20;

// Insert number of choices in each question
var numChoi = 4;

// Insert number of questions displayed in answer area
var answers = new Array(4);

// Insert answers to questions
answers[0] = "1000 psi";
answers[1] = "To electrically isolate the antiskid system, in case that is what's causing the braking malfunction.";
answers[2] = "Oxygen Mask...ON";
answers[3] = "10 kts";
answers[4] = "250 kts/220 kts";
answers[5] = "350 kts/0.82M";
answers[6] = "100 ft AGL";
answers[7] = "300 ℃";
answers[8] = "Fans off";
answers[9] = "2 min on, 15 sec off, 2 min on, 15 sec off, 1 min on, 30 min off";
answers[10] = "One ADR";
answers[11] = "650 &#8451";
answers[12] = "3000 psi";
answers[13] = "38 kts, gust included";
answers[14] = "No";
answers[15] = "171,519 lbs";
answers[16] = "25,000 ft";
answers[17] = "36 &#8451";
answers[18] = "39,100 ft";
answers[19] = "1090 &#8451";

// Do not change anything below here ...
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
  form.solutions.value = correctAnswers;
}
//  End -->








/*var questions = [
  ['How many states are in the United States?', 50],
  ['How many continents are there?', 7],
  ['How many legs does an insect have?', 6]
];
var correctAnswers = 0;
var question;
var answer;
var response;
var correct = [];
var wrong = [];



function print(message) {
  document.write(message);
}

function buildList(arr) {
  var listHTML = '<ol>';
  for (var i = 0; i < arr.length; i += 1) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i += 1) {
  question = questions[i][0];
  answer = questions[i][1];
  response = prompt(question);
  response = parseInt(response);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  } 
}

html = "You got " + correctAnswers + " question(s) right."
html += '<h2>You got these questions correct:</h2>';
html += buildList(correct);
html += '<h2>You got these questions wrong:</h2>';
html += buildList(wrong);
print(html);*/
