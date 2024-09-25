const token = "8e4e7098f7984a6db88205826242509";
const idioma = "es";
const inputCiudad = document.getElementById("input-ciudad");

async function obtenerClima() {
    const ciudad = inputCiudad.value;
    if (!ciudad) {
        alert("Ingrese una ciudad");
        return;
    }

    const apiClimaActual = `https://api.weatherapi.com/v1/current.json?q=${ciudad}&lang=${idioma}&key=${token}`;

    try {
        const response = await fetch(apiClimaActual);
        if (!response.ok) {
            throw new Error("Ciudad no encontrada o error en la API");
        }
        const data = await response.json();
        mostrarClima(data);
    } catch (error) {
        alert(error.message);
    }
}

function mostrarClima(data) {
    document.querySelector(".clima-icono").src = data.current.condition.icon;
    document.querySelector(".clima-texto").innerHTML = data.current.condition.text;
    document.querySelector(".temp").innerHTML = data.current.temp_c + "°C";
    document.querySelector(".ciudad").innerHTML = data.location.name;
    document.querySelector(".humedad").innerHTML = data.current.humidity + "%";
    document.querySelector(".viento").innerHTML = data.current.wind_kph + "Km/H";
}