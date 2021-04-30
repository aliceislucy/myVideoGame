const video = document.getElementById("static");

video.volume = 0.02;


const backButton = document.getElementById("backButton");

function goToBedroom(){
    document.location.href="/bedroom.html";
}

backButton.addEventListener("click", goToBedroom)