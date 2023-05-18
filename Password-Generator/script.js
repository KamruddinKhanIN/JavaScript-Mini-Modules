const inputSlider= document.querySelector("[data-Slider]");
const dataLengthDisplay= document.querySelector("[data-passwordLength]");
const passwordCopyMsg= document.querySelector("[data-copyMsg]");
const passwordCopyButton= document.querySelector("[data-copyButton]");
const password=document.querySelector("[data-passwordDisplay]");
const checkboxes=document.querySelectorAll("input[type=checkbox]");
const upperCaseChck=document.querySelector("#uppercase");
const lowerCaseChck=document.querySelector("#lowercase");
const numbersChck=document.querySelector("#numbers");
const symbolsChck=document.querySelector("#symbols");
const strengthIndicator=document.querySelector(".strength-indicator");
const generatePasswordButton=document.querySelector("[data-generatePassword]");


// We put default values for now.
let pass="";
let passwordLength=10;
let checkboxStatus=1;
let strengthOfPassword;

 
// This function sets the password length accordin to slider input
function handleSlider(){
    inputSlider.value= passwordLength;
    dataLengthDisplay.textContent= passwordLength;
}

function setStrengthIndicator(strength){
     strengthIndicator.classList.add(strength);
}

function getRandomInt(min,max){
    return Math.floor((Math.random() * (max-min))+min); 
}

function genearteRandomNo(){
    return getRandomInt(0,9);
}

function getLowerCase(){
    return String.fromCharCode(getRandomInt(97,123));
}