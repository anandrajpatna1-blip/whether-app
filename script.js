const apiKey = "2bcd81877f7b4537afa103606261311";

async function getWeather() {

    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter city name");
        return;
    }

    let url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        if (data.error) {
            alert("City not found!");
            return;
        }

        document.getElementById("cityName").innerText =
            data.location.name;

        document.getElementById("temperature").innerText =
            data.current.temp_c + " °C";

        document.getElementById("condition").innerText =
            data.current.condition.text;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.current.humidity + "%";

        document.getElementById("wind").innerText =
            "Wind Speed: " + data.current.wind_kph + " km/h";

    } catch (error) {
        alert("Something went wrong!");
    }
}