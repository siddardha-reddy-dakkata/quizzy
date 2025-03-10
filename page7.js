function tryAgain() {
    window.location.href = "page3.html";
}
function goToHome() {
    window.location.href = "page2.html";
}

const score = localStorage.getItem('score');
const amount = localStorage.getItem('amount');

console.log(score);
console.log(amount);





var percent = (Math.floor(parseInt(score) / parseInt(amount) * 100));
var filling = 1.8 * percent % 180;

if (parseInt(amount) == parseInt(score)) filling = 180;






var scoreDiv = document.getElementsByClassName("Score")[0];
scoreDiv.innerHTML = `<b>Your <span class="highlight1">Score</span> ${score} Out of ${amount}</b>`




var insideCircle = document.getElementsByClassName("inside-circle")[0];
insideCircle.innerHTML = percent + "%";




const circleElement = document.querySelector('.circle-wrap .circle .mask.full');
document.documentElement.style.setProperty('--rotation-degree', `${filling}deg`);

