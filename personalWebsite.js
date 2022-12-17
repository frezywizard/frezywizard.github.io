let aboutMe = document.getElementById("aboutMe");
let resume = document.getElementById("resume");
let ph1 = document.getElementById("PlH1");
let ph2 = document.getElementById("PlH2");

let allThemFacts = document.querySelector("#sideBarBtns");

allThemFacts.addEventListener("click", changeSizeAndTextabtme);

aboutMe.addEventListener("click", changeSizeAndTextabtme);
resume.addEventListener("click", changeSizeAndTextresume);
ph1.addEventListener("click", changeSizeAndTextph1);
ph2.addEventListener("click", changeSizeAndTextph2);

function changeSizeAndTextabtme(){
    aboutMe.style.color = "red";
}
function changeSizeAndTextresume(){
    resume.style.color = "red";
}
function changeSizeAndTextph1(){
    ph1.style.color = "red";
}
function changeSizeAndTextph2(){
    ph2.style.color = "red";
}
