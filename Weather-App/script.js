const API_KEY= "4b78c7240d2fe16887418d7bc89e6d24";

const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

const userTab= document.querySelector("[data-userWeather]");
const searchTab= document.querySelector("[data-searchWeather]");


const userContainer= document.querySelector(".weather-container");

const grantAccessContainer= document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-screen-container");
const weatherInfoContainer = document.querySelector(".weather-data-main-container");

let currentTab = userTab;
currentTab.classList.add("current-tab");


userTab.addEventListener('click',() => {switchTab(userTab)})

searchTab.addEventListener('click',() => {switchTab(searchTab)})

function switchTab(clickedTab){
     if (clickedTab!=currentTab)
     {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
     }
}