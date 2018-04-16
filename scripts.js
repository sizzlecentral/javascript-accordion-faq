let questions = document.getElementsByClassName('acc-question');
let answers = document.getElementsByClassName('acc-content');

const toggle = function(q, a) {

  for (let i = 0; i < questions.length; i++) {
    let question = questions[i].id;
    if (question != q) {
      document.getElementById(question).style.backgroundColor = "rgb(71, 193, 191)";
    }
  }

  if (document.getElementById(q.id).style.backgroundColor === "rgb(71, 193, 191)") {
    document.getElementById(q.id).style.backgroundColor = "rgb(0, 132, 142)";
  } else {
    document.getElementById(q.id).style.backgroundColor = "rgb(71, 193, 191)";
  }

  if (document.getElementById(a).style.display === "block") {
    document.getElementById(a).style.display = "none";
  } else {
    document.getElementById(a).style.display = "block";
  }

  for (let i = 0; i < answers.length; i++) {
    let answer = answers[i];
    if (answer.id != a) {
      document.getElementById(answer.id).style.display = "none";
    }
  }

}
