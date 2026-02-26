let searchInputBox=document.getElementById("search");
let searchIcon=document.getElementById("magnifier_glass");
let weatherApiUrl; 
searchIcon.addEventListener("click",async () => {
    let cityName=searchInputBox.value;
    weatherApiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=3ce191dd3f42dc37dfe69b0f8805f8b9`;
    let weatherResponse=await fetch(weatherApiUrl);
    let weatherReport=await weatherResponse.json();
    console.log(weatherReport);

    document.getElementById("city_name_container").textContent=weatherReport.name;
    document.getElementById("weather_type").textContent=weatherReport.weather[0].description;
    document.getElementById("weather_degree_celcius").textContent=parseInt(weatherReport.main.temp-273.15)+"°C";
    document.getElementById("humidity_percentage").textContent=weatherReport.main.humidity+"%";
    document.getElementById("wind_speed").textContent=weatherReport.wind.speed+"km/h";
    let weatherId=weatherReport.weather[0].id;
    let weatheImage=document.getElementById("image");
    if(weatherId>=200 && weatherId<=232)
    {
        weatheImage.src="../../../ASSESSTS/images/thunderstrom.jpg";
    }
    else if(weatherId>=300 && weatherId<=321)
    {
        weatheImage.src="../../../ASSESSTS/images/rain.png";
    }
    else if(weatherId>=600 && weatherId<=622)
    {
        weatheImage.src="../../../ASSESSTS/images/showerrain.png";
    }
    else if(weatherId>=701 && weatherId<=781)
    {
        weatheImage.src="../../../ASSESSTS/images/snow.png";
    }
    else if(weatherId==800)
    {
        weatheImage.src="../../../ASSESSTS/images/mist.png";
    }
    else if(weatherId>=801 && weatherId<=804)
    {
        weatheImage.src="../../../ASSESSTS/images/drizzle.png";
    }
});