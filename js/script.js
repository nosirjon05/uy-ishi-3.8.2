var elForm = document.querySelector(".site-form");
var elInput = elForm.querySelector(".site-input");
var elInputball = elForm.querySelector(".site-input-ball");

var minball = 70

var elp = document.querySelector(".text");

elForm.addEventListener("submit", function(evt) {
   evt.preventDefault();

   if  (elInputball.value >= minball) {
    elp.textContent = "siz o'ttingiz";
   } else if  (elInputball.value <= minball) {
    elp.textContent = "siz yiqildingiz";
   }
});