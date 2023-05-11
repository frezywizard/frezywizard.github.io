
let allThemFacts = document.querySelector("#sideBarBtns");
document.addEventListener("DOMContentLoaded", function() {
    var aboutMe = document.getElementById("aboutMe");
    var resume = document.getElementById("resume");
    var ph1 = document.getElementById("PlH1");
    var ph2 = document.getElementById("PlH2");
    var originalText = aboutMe.textContent;


    aboutMe.addEventListener("click", function() {
        aboutMe.classList.remove("selected");
        aboutMe.classList.add("selected");
        changeSizeAndTextabtme();
    });

    resume.addEventListener("click", function() {
        resume.classList.remove("selected");
        resume.classList.add("selected");
        changeSizeAndTextresume();
    });

    ph1.addEventListener("click", function() {
        ph1.classList.remove("selected");
        ph1.classList.add("selected");
        changeSizeAndTextph1();
    });

    ph2.addEventListener("click", function() {
        ph2.classList.remove("selected");
        ph2.classList.add("selected");
        changeSizeAndTextph2();
    });

    function changeTextBack() {
        if (!aboutMe.contains(event.target)) {
          aboutMe.textContent = originalText;
        }
      }
      

    function changeText() {
        aboutMe.textContent = "Add content here soon";
      }
      
      if (aboutMe.matches(":focus")) {
        changeText();
      }
      
      aboutMe.addEventListener("click", changeText);
      document.addEventListener("click", changeTextBack);
});


