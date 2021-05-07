// Importando modulo de estilos style.css
import style from "./style.scss";

// Importando imagenes modulos
import logo from "./assets/webpack.svg";
import gemini from "./assets/saga-kanon.png";

// Importando la dataJSON
import data from "./data.json";

// JavaScript Moderno
const arr = [1, 2, 3, 4];

// Destructuracion de arreglos
const nuevoArreglo = () => console.log(...arr);
console.log('Hola desde webpack');
nuevoArreglo();

// Iyectando la imagen en el index.html como ejemplo
// document.getElementById('app').innerHTML = `<img src="${logo}" alt="webpack">`;

// insertar las imagenes al DOM con javaScript

// Creando elemento padre
const divPadre = document.querySelector('#app');

// Creando Elementos hijos
const h1 = document.createElement('h1');
h1.textContent = "Hola Mundo con Webpack";
const imgLogo = document.createElement('img');
imgLogo.src = "./assets/webpack.svg";
imgLogo.classList.add('tamImagen')
const imagen = document.createElement('img');
imagen.src = "./assets/saga-kanon.png";
const nav = document.createElement('nav');
nav.classList.add('menu');

let menu = "";
data.links.forEach((el) => (menu += `<a href="${el[1]}">${el[0]}</a>`));

nav.innerHTML = menu;

// Insertando los elemntos hijos al padre
divPadre.appendChild(h1);
divPadre.appendChild(imgLogo);
divPadre.appendChild(nav);
divPadre.appendChild(imagen);
