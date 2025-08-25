import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import App from './App';



const root = ReactDOM.createRoot(document.getElementById('root'))

let numero = 0; // valor unidad
let numero2 = 0; //decenas 
let numero3 = 0; //centenas
let numero4 = 0; //unidades de millar
let numero5 = 0; //decenas de millar
let numero6 = 0; //centenas de millar


// setInterval recibe una función y el tiempo en milisegundos
setInterval(() => {
  if (numero === 10) {
    numero = 0;
    numero2++;
  }
  if (numero2 === 10) {
    numero2 = 0;
    numero3++;
  }

  if (numero3 === 10) {
    numero3 = 0;
    numero4++;
  }


  if (numero4 === 10) {
    numero4 = 0;
    numero5++;
  }

  if (numero5 === 10) {
    numero5 = 0;
    numero6++;
  }

  if (numero === 9 && numero2 === 9 && numero3 === 9 && numero4 === 9 && numero5 === 9 && numero6 === 10) {
    numero = 0;
    numero2 = 0;
    numero3 = 0;
    numero4 = 0;
    numero5 = 0;
    numero6 = 0;

  }
  root.render(
    <React.StrictMode>
      <App valor={numero} valor2={numero2} valor3={numero3} valor4={numero4} valor5={numero5} valor6={numero6} />
    </React.StrictMode>,
  )
  numero++;
}, 1000);//para verificar que funciona pon 1 y veras que va to rapido 





