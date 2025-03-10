const fullname = localStorage.getItem('fullname');
console.log(fullname);


var welcomeUser = document.getElementsByClassName("welcomeUser")[0];
welcomeUser.innerHTML = "Hello " + fullname + " :)";


function redirectToLogin() {
    window.location.href = "page1.html";
    console.log("hello")
}


function show(data){
    var a=document.getElementsByClassName(data)[0]
    a.style.display="block"
    a.style.width="200px"
    a.style.display="flex"
    var b=document.getElementsByClassName("p")[0]
     b.style.display="block"
    var b=document.getElementsByClassName("p")[1]
     b.style.display="block"
    var b=document.getElementsByClassName("p")[2]
     b.style.display="block"
    var b=document.getElementsByClassName("p")[3]
     b.style.display="block"
    var b=document.getElementsByClassName("p")[4]
    b.style.display="block"
    var b=document.getElementsByClassName("p")[5]
    b.style.display="block"
}

function hide(data){
    var a=document.getElementsByClassName(data)[0]
    a.style.width="0px"
     var b=document.getElementsByClassName("p")[0]
    b.style.display="none"
    var b=document.getElementsByClassName("p")[1]
    b.style.display="none"
   var b=document.getElementsByClassName("p")[2]
    b.style.display="none"
   var b=document.getElementsByClassName("p")[3]
    b.style.display="none"
   var b=document.getElementsByClassName("p")[4]
   b.style.display="none"
   var b=document.getElementsByClassName("p")[5]
   b.style.display="none"
}