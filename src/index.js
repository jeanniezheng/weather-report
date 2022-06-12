const state = {
    temp: 50
};

const assignTemp = () => {
    const temperature = document.getElementById("temp-degree")
    temperature.textContent = `${state.temp}`

}

const changeDegreeColor = () => {
    const degree = document.getElementById("temp-degree");
    degree.textContent = `${state.temp}`

    let color = "black"
    let landscape = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
    let landImg = ""


    if (state.temp < 49) {
        color = "teal";
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
    const cityName = document.getElementById("temp-title"); //TEMPERATURE

    const newCity = document.getElementById("city-input").value; //input city 
    cityName.textContent = `Temperature for ${newCity}`

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
}

registerEventHandlers();