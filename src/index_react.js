// Importando React
import React from 'react';
import ReactDOM from 'react-dom';
import { HelloWorld } from './components/helloWorld.jsx';



// Importando modulo de estilos style.css
import style from "./style.scss";

// Importando imagenes modulos
import logo from "./assets/webpack.svg";

// Importando la dataJSON
import data from "./data.json";


ReactDOM.render(
    <HelloWorld name="React" logo={logo} menu={data.links} />,
    document.getElementById("app")
);



