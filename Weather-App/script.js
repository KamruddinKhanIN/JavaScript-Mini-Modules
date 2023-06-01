const API_KEY= "4b78c7240d2fe16887418d7bc89e6d24";

const userTab= document.querySelector("[data-userWeather]");
const searchTab= document.querySelector("[data-searchWeather]");


const userContainer= document.querySelector(".weather-container");

const grantAccessContainer= document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-screen-container");
const weatherInfoContainer = document.querySelector(".weather-data-main-container");

let currentTab = userTab;
currentTab.classList.add("current-tab");
getfromSessionStorage();


userTab.addEventListener('click',() => {switchTab(userTab)})

searchTab.addEventListener('click',() => {switchTab(searchTab)})

function switchTab(clickedTab){
    if (clickedTab!=currentTab)
     {
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
     


        if(!searchForm.classList.contains("active"))
        {  
        grantAccessContainer.classList.remove("active");
        weatherInfoContainer.classList.remove("active");
        searchForm.classList.add("active");
        }
        else {

        searchForm.classList.remove("active");
        weatherInfoContainer.classList.remove("active");

        getfromSessionStorage();
        }
     }

}

// userTab.addEventListener('click',() => {switchTab(userTab)});

function getfromSessionStorage(){
    const localCoordinates= sessionStorage.getItem("user-coordinates");

    if(!localCoordinates)
    {
        grantAccessContainer.classList.add("active")
    }

    else
    {
        const coordiantes= JSON.parse(localCoordinates);
        fetchUserWeatherInfo(coordiantes);
    }
}

async function fetchUserWeatherInfo(coordinates)
{
    const {lat,lon}= coordinates;

    grantAccessContainer.classList.remove("active");
    loadingScreen.classList.add("active");

    try{
        const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);
        const data= await response.json();
        loadingScreen.classList.remove("active");
        renderWeatherInfo(data);
        weatherInfoContainer.classList.add("active");
    }
    catch(e)
    {
        alert("Please Refresh The Browser")
    }
}

function renderWeatherInfo(weatherInfo){
    const cityName = document.querySelector("[data-cityName]");
    const countryIcon = document.querySelector("[data-cityFlag]");
    const desc = document.querySelector("[data-weatherDescription]");
    const weatherIcon = document.querySelector("[data-weatherIcon]");
    const temp = document.querySelector("[data-weatherTemp]");
    const windspeed = document.querySelector("[data-windspeed]");
    const humidity = document.querySelector("[data-humidity]");
    const cloudiness = document.querySelector("[data-clouds]");

    cityName.innerText = weatherInfo?.name;
    countryIcon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    desc.innerText = weatherInfo?.weather?.[0]?.description;
    weatherIcon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    temp.innerText = `${weatherInfo?.main?.temp} °C`;
    windspeed.innerText = `${weatherInfo?.wind?.speed} m/s`;
    humidity.innerText = `${weatherInfo?.main?.humidity}%`;
    cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

}

const grantAccessButton= document.querySelector("[data-grantAccess]");

grantAccessButton.addEventListener('click', () => {getLocation()});

function getLocation(){
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => showPosition(position));
    }
    else {
        alert("Your Browser Doesn't Support Geolocation Tracking")
    }
}

function showPosition(position){
    const userCoordinates={
        lat: position.coords.latitude,
        lon: position.coords.longitude,
    };

    sessionStorage.setItem("user-coordinates", JSON.stringify(userCoordinates));
    fetchUserWeatherInfo(userCoordinates);
}

const searchInput = document.querySelector("[data-searchInput]");

searchForm.addEventListener("submit", (e) => {
    e.preventDefault(); //Prevents Default Method
    let cityName = searchInput.value;

    if(cityName === "")
        return;
    else 
        fetchSearchWeatherInfo(cityName);
})

const errorPage= document.querySelector("[data-404Error]")

async function fetchSearchWeatherInfo(city) {
    loadingScreen.classList.add("active");
    weatherInfoContainer.classList.remove("active");
    grantAccessContainer.classList.remove("active");

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
          );
        const data = await response.json();

        console.log("Rsponse" , response);

        if(response.status != 404)
        {
        loadingScreen.classList.remove("active");
        errorPage.classList.remove("active");
        renderWeatherInfo(data);
        weatherInfoContainer.classList.add("active");
        }

        else{
        loadingScreen.classList.remove("active");
        errorPage.classList.add("active");
        }
    }
    catch(err) {
        alert("Please Refresh Your Browser");
    }
}