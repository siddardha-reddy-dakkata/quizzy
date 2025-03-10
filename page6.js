// import {category, amount, difficulty} from "jsFileLocation" //need to be imported

// var category = 16, amount = 10,difficulty = "hard";

var cat = localStorage.getItem('category');
var num = localStorage.getItem('amount');
var diff = localStorage.getItem('difficulty');
var qTime = localStorage.getItem('eachTime');

var category = parseInt(cat), amount = parseInt(num),difficulty = diff, eachTime = parseInt(qTime);





let questions_heading1 =document.getElementsByClassName("questions_heading1")[0];
let topic_heading = document.querySelector(".topic_heading");
let Spacing = document.querySelectorAll(".Spacing");
let radio_button = document.querySelectorAll("input");
let waviy = document.querySelector(".waviy");
// let btn = document.querySelector(".btn");
let section1 = document.querySelector(".section1_right");
let section2 = document.querySelector(".section1_left");
let center = document.querySelector(".center");
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let Correct = "";
let answers = "";
let prev_position = 0;
let score=0;
var response_arr;
// let score



async function loader() {

  let url = await fetch(
        `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`
  )
  data = await url.json();
  console.log(data);
  await showquestion(data.results);
  response_arr=await data.results



  waviy.style.display = "none";
  // btn.style.display = "block";
  center.style.display = "block";
  // btn.disabled = "true";
  
  // btn.addEventListener("click", () => {
  //   console.log("clicked");
  //   if (prev_position > 0) {
  //     prev_position--;
  //     showquestion(data.results);
  //   }
  // });
  btn1.addEventListener("click", () => {
    if (prev_position + 2 < data.results.length) {
      seconds=eachTime
      prev_position++;
      deselectRadio()
      showquestion(data.results);
    } 
    else {
      seconds=eachTime
      prev_position++;
      deselectRadio()
      showquestion(data.results);


      btn1.disabled = "true";
      seconds=eachTime
      btn1.style.display = "none";
      // btn.style.display = "none";
      btn2.style.display="flex"
    }
  });
}
loader();

function deselectRadio() {
  radio_button.forEach((radio) => {
    radio.checked = false; 
    radio.parentElement.nextElementSibling.style.color = "grey"; 
  });
}
async function showquestion(data) {
  let ele = data[prev_position];
  let correct = ele.correct_answer;
  Correct=correct
  
  let incorrect = ele.incorrect_answers;
  incorrect.splice(Math.random() * incorrect.length, 0, correct);
  topic_heading.innerHTML = `${ele.category}`;
  questions_heading1.innerHTML = `${ele.question}`;
  Spacing.forEach((label, index) => {
    if (index < incorrect.length) {
      label.innerHTML = incorrect[index];
    } else {
      label.innerHTML = "";
      radio_button[index].style.display = "none";
    }
  });

}
// totPercentage = score / total  * 100;
// graph = 1.8 * totPercentage;

async function selectOption(id) {
  let selected = document.getElementById(id);
  answers = selected.parentElement.nextElementSibling.textContent;
  console.log(Correct);
  if (answers == Correct) {
    score++;
    console.log("correct answer");
  } else {
    console.log("wrong answer");
  }
}
console.log(score);
let seconds=eachTime
let setinterval = setInterval(() => {
  if (seconds <= 0) {
    if (prev_position + 1 < data.results.length) {
      btn1.click();
      seconds = eachTime;
    }
    else if (prev_position + 1 == data.results.length) {
      btn2.click();
    }
    else {
      clearInterval(setinterval); 
      s=0; 
      btn1.style.opacity = 0;  
      // btn.style.opacity = 0;   
      btn2.style.display = "block";
    }
  } else {
    seconds -= 1; 
  }
  let clock_second = document.getElementsByClassName("clock_second")[0];
  clock_second.innerHTML = seconds;
  let offset = 276.32 - (276.32 * seconds) / eachTime;
  document.getElementById("second").style.strokeDashoffset = offset;
}, 1000);

function Selected(id) {
  let input = document.querySelectorAll("input");
  input.forEach((ele) => {
    ele.parentElement.nextElementSibling.style.color = "#9f9999";
  });
  let spacing = document.getElementById(id);
  spacing.parentElement.nextElementSibling.style.color = "white";
  console.log("clicked");
  selectOption(id);
}
let dynamiccolor = document.querySelector(".dynamiccolor");
let section1_left = document.querySelector(".section1_left");
let section1_right = document.querySelector(".section1_right");
let dynamiccolor1 = document.querySelector(".dynamiccolor1");
section1_left.addEventListener("mousemove", (e) => {
  let rect = section1_left.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  dynamiccolor.style.left = `${x}px`;
  dynamiccolor.style.top = `${y}px`;
  dynamiccolor.style.opacity = 1;

  const offsetX = Math.abs(rect.width / 2 - x);
  const offsetY = Math.abs(rect.height / 2 - y);

  section1_left.style.borderTop = "1px solid transparent";
  section1_left.style.borderRight = "1px solid transparent";
  section1_left.style.borderBottom = "1px solid transparent";
  section1_left.style.borderLeft = "1px solid transparent";

  if (offsetX > offsetY) {
    if (x < rect.width / 2) {
      section1_left.style.borderLeft = "4px solid red";
      section1_left.style.borderTop = "4px solid red";
      section1_left.style.transform = "rotateY(-6.25deg) rotateX(-4.24889deg)";
    } else {
      section1_left.style.borderRight = "4px solid white";
      section1_left.style.borderBottom = "4px solid white";
      section1_left.style.transform = "rotateY(-6.28deg) rotateX(3.24889deg)";
    }
  } else {
    if (y < rect.height / 2) {
      section1_left.style.borderTop = "4px solid red";
    } else {
      section1_left.style.borderBottom = "4px solid white";
    }
  }
});
section1_left.addEventListener("mouseleave", () => {
  dynamiccolor.style.opacity = 0;
  section1_left.style.borderLeft = "1px solid transparent";
  section1_left.style.borderTop = "1px solid transparent";
  section1_left.style.borderRight = "1px solid transparent";
  section1_left.style.borderBottom = "1px solid transparent";
});
section1_right.addEventListener("mousemove", (e) => {
  let rect = section1_right.getBoundingClientRect();
  let x = e.clientX - rect.left;
  let y = e.clientY - rect.top;
  dynamiccolor1.style.left = `${x}px`;
  dynamiccolor1.style.top = `${y}px`;
  dynamiccolor1.style.opacity = 1;

  const offsetX = Math.abs(rect.width / 2 - x);
  const offsetY = Math.abs(rect.height / 2 - y);

  section1_right.style.borderTop = "1px solid transparent";
  section1_right.style.borderRight = "1px solid transparent";
  section1_right.style.borderBottom = "1px solid transparent";
  section1_right.style.borderLeft = "1px solid transparent";

  if (offsetX > offsetY) {
    if (x < rect.width / 2) {
      section1_right.style.borderLeft = "4px solid red";
      section1_right.style.borderTop = "4px solid red";
      section1_right.style.transform = "rotateY(-6.25deg) rotateX(-4.24889deg)";
    } else {
      section1_right.style.borderRight = "4px solid white";
      section1_right.style.borderBottom = "4px solid white";
      section1_right.style.transform = "rotateY(-6.28deg) rotateX(3.24889deg)";
    }
  } else {
    if (y < rect.height / 2) {
      section1_right.style.borderTop = "4px solid red";
    } else {
      section1_right.style.borderBottom = "4px solid white";
    }
  }
});
section1_right.addEventListener("mouseleave", () => {
  dynamiccolor1.style.opacity = 0;
  section1_right.style.borderLeft = "1px solid transparent";
  section1_right.style.borderTop = "1px solid transparent";
  section1_right.style.borderRight = "1px solid transparent";
  section1_right.style.borderBottom = "1px solid transparent";
});

btn2.addEventListener("click", () => {
  Submit();
  btn2.style.opacity=0.5
  btn2.disabled="true"
  window.location.href = "page7.html" // Link has to be Inserted...
  localStorage.setItem('score', `${score}`);
});
function Submit() {
  console.log(score);
  localStorage.setItem('score', `${score}`);
}
btn2.removeEventListener('click',Submit);

