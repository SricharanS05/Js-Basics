const API_KEY="86b749ef58f81f42cf1a8f048ebe1f6c";

async function getWeather(){
    const city=document.getElementById("cityname").value.trim();
    const em=document.getElementById("em");
    try{
        em.textContent="Loading..";
        if(city===""){
            throw new Error("Please enter a city name !");
            return;
        }
        const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric`);
        const data=await response.json();
        if(!(response.ok)){
            throw new Error(data.message || "Failed to fetch city details");
        }
        document.getElementById("city").textContent = "City: "+ data.name + ", Country: " +
        data.sys.country;

        document.getElementById("temp").textContent =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("des").textContent =
            "Weather: " + data.weather[0].description;

        document.getElementById("hum").textContent =
            "Humidity: " + data.main.humidity + "%";

        em.textContent = "";
    }
    catch(error){
        em.textContent=error.message;
    }

}