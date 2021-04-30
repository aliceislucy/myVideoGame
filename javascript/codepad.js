const input = document.getElementById("input");

const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const erase = document.getElementById("erase")
const enter = document.getElementById("enter")



function typeZero () {
    input.value += "0";
    input.focus();
}

function typeOne () {
    input.value += "1";
    input.focus();
}

function typeTwo () {
    input.value += "2";
    input.focus();
}

function typeThree () {
    input.value += "3";
    input.focus();
}

function typeFour () {
    input.value += "4";
    input.focus();
}

function typeFive () {
    input.value += "5";
    input.focus();
}

function typeSix () {
    input.value += "6";
    input.focus();
}

function typeSeven () {
    input.value += "7";
    input.focus();
}

function typeEight () {
    input.value += "8";
    input.focus();
}

function typeNine () {
    input.value += "9";
    input.focus();
}

function typeErase () {
    console.log(input.value.length)
    input.value = input.value.slice(0, -1);
    input.focus();
}

function typeEnter () {
    if (input.value === "165713"){
        location.href = "/cinematic-last.html";
    } else {
        input.value = "";
        input.placeholder = "Wrong code"
        input.focus();
    };
}


zero.addEventListener("click", typeZero);
one.addEventListener("click", typeOne);
two.addEventListener("click", typeTwo);
three.addEventListener("click", typeThree);
four.addEventListener("click", typeFour);
five.addEventListener("click", typeFive);
six.addEventListener("click", typeSix);
seven.addEventListener("click", typeSeven);
eight.addEventListener("click", typeEight);
nine.addEventListener("click", typeNine);
erase.addEventListener("click", typeErase);
enter.addEventListener("click", typeEnter);


const backButton = document.getElementById("backButton");

function goToBedroom(){
    document.location.href="/bedroom.html";
}

backButton.addEventListener("click", goToBedroom)