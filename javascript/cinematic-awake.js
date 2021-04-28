const cinematic = document.querySelector(".cinematic");
const body = document.querySelector("body");

function displayText() {
  body.innerHTML = "";
  let div = document.createElement("div");
  div.className = "textContainer";
  div.textContent = "Where...   Where am I... ?";
  body.appendChild(textContainer)
}

cinematic.addEventListener("ended", displayText);