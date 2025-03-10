


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

   document.getElementsByClassName("menuContainer")[0].style.display = "flex";

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

   document.getElementsByClassName("menuContainer")[0].style.display = "none";
}