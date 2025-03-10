const amount = localStorage.getItem('amount');
const eachTime = localStorage.getItem('eachTime');

var firstLine = document.getElementsByClassName("eachLine")[0];
firstLine.innerHTML = `• You will have a total of ${amount} Questions`;

var secondLine = document.getElementsByClassName("eachLine")[1];
secondLine.innerHTML = `• Each question will have a time of ${eachTime} seconds`;

function quizInterface() {
    window.location.href = "page6.html"    // <-------   Quiz page link here
}