// BACK BUTTON REDIRECTS TO BEDROOM

const backButton = document.getElementById("backButton");

function goToBedroom(){
    document.location.href="/bedroom.html";
}

backButton.addEventListener("click", goToBedroom)