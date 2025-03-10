const fullname = localStorage.getItem('fullname');
console.log(fullname);

function UpdataValues(difficulty, amount, eachTime) {
    localStorage.setItem('difficulty', `${difficulty}`);
    localStorage.setItem('amount', `${amount}`);
    localStorage.setItem('eachTime', `${eachTime}`);
    console.log(eachTime);

    window.location.href = "page5.html";
} 
function Bg(){
    var img = localStorage.getItem('bg')
    if(img){
        document.getElementById('bgimg').src=`${img}`
        // var page = document
    }
}
Bg()