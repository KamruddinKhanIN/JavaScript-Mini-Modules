async function showWeather(){
    let latitude = 23.520445;
    let longitude= 87.311920;
    let city="goa";
    const API_KEY= "4b78c7240d2fe16887418d7bc89e6d24";


    const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);

    const data= await response.json();
    console.log("Weather" , data);

    let newPara= document.createElement('p');

    newPara.textContent=`${data?.main?.temp.toFixed(2)} °C`;

    document.body.appendChild(newPara);
}

