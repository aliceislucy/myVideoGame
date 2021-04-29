// DOM SELECTORS

const cinematic = document.querySelector(".cinematic");
const body = document.querySelector("body");
const div = document.getElementsByTagName("div");



// AFTER THE CINEMATIC, EVERYTHING INSIDE THE BODY IS DELETED AND REPLACED BY THE DIV.TEXT

function displayText() {
  body.innerHTML = "";
  let text = document.createElement("div");
  text.className = "text";
  text.textContent = "Where... Where am I... ?";
  body.appendChild(text);
  setTimeout(function () {
    setInterval(function () {
      if (text.style.opacity > "0") {
        text.style.opacity -= "0.1"
    }}, 300);
  }, 4000);
}

cinematic.addEventListener("ended", displayText);



// AT THE END OF THE TEXT ANIMATION, THE PAGE REDIRECTS TO THE BEDROOM :


setTimeout(function () {
  document.location.href="/bedroom.html";
}, 12000);


