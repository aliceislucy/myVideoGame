// FACE CHANGES TO SURPRISED

const div = document.getElementById("image-container");
const body = document.querySelector("body");


setTimeout ( function () {
  let image = document.createElement("img");
  image.src = "/image/mirror/mirror-reflection-surprise.png";
  image.className = "image";
  console.log();
  div.innerHTML = "";
  div.appendChild(image);
  let text = document.createElement("div");
  text.className = "text";
  text.textContent = "What is that !!!?";
  body.appendChild(text);
}, 7000);

// BACK BUTTON REDIRECTS TO BEDROOM

const backButton = document.getElementById("backButton");

function goToBedroom(){
    document.location.href="/bedroom.html";
}

backButton.addEventListener("click", goToBedroom)