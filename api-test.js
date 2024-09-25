const token = "8e4e7098f7984a6db88205826242509";
const idioma = "es";
const ciudad = "Huancayo";

const apiClimaActual = `https://api.weatherapi.com/v1/current.json?
q=${ciudad}&lang=${idioma}&key=${token}`;

const response = await fetch(apiClimaActual);
let data = await response.json();

console.log(data);