const state = {
    temp: 0,
    city: 'chicago'
};

changeCityWeather = () => {
    // const inputCity = document.getElementById.textContent("temp-title-city")
    axios
        .get("http://localhost:5000/location", {
            params: {
                // key: "pk.550a637037518ca239852f3d8db26c66",
                q: state.city,


                // q: inputCity,
            },
        })
        .then((response) => {
            // console.log(response.data);
            let lat = response.data[0].lat;
            let lon = response.data[0].lon;
            console.log("success")
            axios
                .get('http://localhost:5000/weather', {
                    params: {
                        lat: lat,
                        lon: lon

                    },
                })
                .then((response) => {
                    const temperatureK = response.data.current.temp;

                    // state.temp = response // fix this
                    const degree = document.getElementById("temp-degree");
                    degree.textContent = `${temperatureK}`;
                    state.temp = temperatureK;
                    changeDegreeColor();

                })
                .catch((error) => {
                    console.log("error", error.response.data);
                });
        }
        )
        .catch((error) => {
            // console.log("error");
            console.log("error", error.response.data)
        });

};

const changeDegreeColor = () => {
    const degree = document.getElementById("temp-degree");
    degree.textContent = `${state.temp}`

    let color = "black"
    let landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    let landImg = ""


    if (state.temp <= 49) {
        color = "teal";
        landImg = "/assets/images/winter.jpeg"
    }
    else if (state.temp > 49 && state.temp < 60) {
        color = "green";
        landImg = "/assets/images/winter.jpeg"
    }
    else if (state.temp > 59 && state.temp < 70) {
        color = "yellow";
        landscape = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃";
        landImg = "/assets/images/fall.jpg"
    }
    else if (state.temp > 69 && state.temp < 80) {
        color = "orange";
        landscape = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
        landImg = "/assets/images/spring.jpg"
    }
    else {
        color = "red";
        landscape = "🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"
        landImg = "/assets/images/summer.jpg"
    }
    degree.style.color = color
    document.getElementById("landscape-image").textContent = landscape
    document.getElementById("land-img").setAttribute('src', landImg)


}

const changeCityName = () => {
    const cityName = document.getElementById("temp-title-city"); //TEMPERATURE
    const newCity = document.getElementById("city-input").value; //input city 
    cityName.textContent = `${newCity}`
    state.city = newCity

    // cityName.append(newCity)
}

const changeTempUp = () => {
    state.temp += 1;//temp goes up one 
    const button = document.getElementById("temp-degree"); //access what actually changes on web
    button.textContent = state.temp // change the content 
    changeDegreeColor();
}

const changeTempDown = () => {
    state.temp -= 1;
    const button = document.getElementById("temp-degree");
    button.textContent = state.temp

    changeDegreeColor();
}

const updateTemp = () => { }

const registerEventHandlers = () => {
    document.getElementById("up-button").addEventListener("click", changeTempUp);

    document.getElementById("down-button").addEventListener("click", changeTempDown);

    document.getElementById("city-input").addEventListener('input', changeCityName);

    document.getElementById("update-city-button").addEventListener('click', changeCityWeather);
}

registerEventHandlers();