const div = document.getElementById("image-container");
const body = document.querySelector("body");


setTimeout ( function () {
  let text = document.createElement("div");
  text.className = "text";
  text.textContent = "Original piece of art...";
  body.appendChild(text);
}, 4000);


// BACK BUTTON REDIRECTS TO BEDROOM

const backButton = document.getElementById("backButton");

function goToBedroom(){
    document.location.href="/bedroom.html";
}

backButton.addEventListener("click", goToBedroom)