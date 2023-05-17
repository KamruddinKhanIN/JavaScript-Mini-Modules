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
let passwordLeenght=10;
let checkboxStatus=1;
let strengthOfPassword;

 