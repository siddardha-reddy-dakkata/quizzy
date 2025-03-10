var answers = document.getElementsByClassName("answer");


var curr = -1;
function showAnswer(index){
    for (let i = 0; i < answers.length; i++) {
        if (index == i) {
            if (curr != i) {
                answers[i].style.display = "block";
                answers[i].style.color = "aliceblue";
                curr = index;
            }
            else {
                curr = -1;
                answers[i].style.display = "none";
            }
            
        }
        else answers[i].style.display = "none";
    }
}


function clearAll() {
    for (let i = 0; i < 3; i++) {

        document.getElementsByClassName("inputFields")[i].value = "";
    }
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

   document.getElementsByClassName("container")[0].style.display = "flex";

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

   document.getElementsByClassName("container")[0].style.display = "none";
}