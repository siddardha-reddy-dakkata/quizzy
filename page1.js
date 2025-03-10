
window.fullname = "";

function flipCard() {
    const cardContainer = document.querySelector('.loginParent');
    cardContainer.classList.toggle('flipped');
}
var signUp = document.getElementsByClassName('signin-cards')[0];
// var showsupport = document.getElementById("support")[0];

// var flag = true;
// function flipToSignUp() {
//     if (flag) {
//         signUp.style.transform = "rotateX(180deg)";
//         signUp.style.transform = "rotateY(180deg)";

//         flag = false
//     }
//     else {
//         signUp.style.transform = "rotateX(0deg)";
//         signUp.style.transform = "rotateY(0deg)";
//         flag = true;
//     }
// }



// Login and SignIn info
var loginInfo = {
    "Siddhu" : "Dev@123",
    "carlsen" : "Dev@123"
}
var nameInfo = {
    "Siddhu": "Siddardha",
    "carlsen": "Magnus Carlsen"
}
var flipButton = document.getElementsByClassName("flipButton")[0];
var fullname = "John Doe";


// Getting and Updating signIn Info


function isEmail(input) {
    return input.indexOf('@') !== -1 && input.indexOf('.') !== -1 && input.indexOf('@') < input.indexOf('.');
}

function signIn() {
    var username = document.getElementsByClassName("name")[2].value;
    var fullname = document.getElementsByClassName("name")[3].value;
    var email = document.getElementsByClassName("name")[4].value;
    var pass = document.getElementsByClassName("name")[5].value;
    var confirmpass = document.getElementsByClassName("name")[6].value;

    if (username in loginInfo) {
        alert("User already exists");
        flipCard();
    }
    else if (pass != confirmpass) {
        alert("Password does not match");
    }
    else if (!isEmail(email)) {
        alert("Enter a valid email");
    }
    else {
        loginInfo[username] = pass;
        loginInfo[email] = pass;

        nameInfo[username] = fullname;
        nameInfo[email] = fullname;

        console.log(loginInfo);

        flipCard();
    }
}

//Log In info check
function logIn() {
    var user = document.getElementsByClassName("name")[0].value;
    var pass = document.getElementsByClassName("name")[1].value;
    
    if (!(user in loginInfo)) {
        alert("Username not found");
    }
    else if (pass != loginInfo[user]) {
        alert("Invalid username or password!");
    }
    else {
        fullname = nameInfo[user];

        localStorage.setItem('fullname', `${fullname}`);

        window.location.href = "page2.html";  //  <---- Welcome page link comes here
    }
}

// function logIn() {
//     var user = document.getElementsByClassName("s2")[0].value; // Assuming "s2" class contains username input
//     var pass = document.getElementsByClassName("s2")[1].value; // Assuming "s2" class contains password input
    
//     if (!(user in loginInfo)) { // Corrected the condition to check if user exists in loginInfo
//         alert("Username not found");
//     }
//     else if (pass !== loginInfo[user]) { // Compare password with the stored password for the user
//         alert("Invalid username or password!");
//     }
//     else {
//         // If username and password are correct, proceed to the welcome page
//         window.location.href = "http://127.0.0.1:5500/page2.html";
//         // Set fullname assuming nameInfo is an object mapping usernames to full names
//         fullname = nameInfo[user];
//     }
// }





