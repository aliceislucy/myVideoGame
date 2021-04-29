// DOM SELECTORS

const cinematic = document.querySelector(".cinematic");
const body = document.querySelector("body");



// AFTER THE CINEMATIC, EVERYTHING INSIDE THE BODY IS DELETED AND REPLACED BY THE DIV.TEXT

function displayText() {
  body.innerHTML = "";
  let text = document.createElement("div");
  text.className = "text";
  text.textContent = "Where...   Where am I... ?";
  body.appendChild(text);
}

cinematic.addEventListener("ended", displayText);



// AT THE END OF THE TEXT ANIMATION, THE PAGE REDIRECTS TO THE BEDROOM :

const animation = document.querySelector(".text");

function goToBedroom() {
  document.location.href="/bedroom.html";
}

animation.addEventListener("animationend", goToBedroom)