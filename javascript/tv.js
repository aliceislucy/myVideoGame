const vid = document.getElementsByTagName("static");

vid.volume = 0.5;


const backButton = document.getElementById("backButton");

function goToBedroom(){
    document.location.href="/bedroom.html";
}

backButton.addEventListener("click", goToBedroom)