const body = document.querySelector("body");


// TEXT APPEARS AFTER 5 SECONDS

setTimeout(function () {
    let text = document.createElement("div");
    text.className = "text";
    text.textContent = "Looks like a couple celebrating something... I wonder if I could find a clue that could help me get out of here ! Who are these people anyway ?!";
    body.appendChild(text);
}, 4000);


// BACK BUTTON REDIRECTS TO BEDROOM

const backButton = document.getElementById("backButton");

function goToBedroom(){
    document.location.href="/bedroom.html";
}

backButton.addEventListener("click", goToBedroom)