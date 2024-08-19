/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generadorexcusa();
};

let generadorexcusa = () => {
  let quien = ["El perro", "Mi abuela", "El cartero", "Mi conejo", "El vecino"];
  let accion = ["se comió", "rompió", "chocó", "rompió", "se llevó"];
  let que = [
    "mi tarea",
    "mi telefono",
    "el auto",
    "mi abrigo",
    "mi computadora"
  ];
  let cuando = [
    "antes de la clase",
    "cuando estaba durmiendo",
    "mientras hacia ejercicio",
    "durante el almuerzo",
    "cuando estaba rezando"
  ];

  let Numquien = Math.floor(Math.random() * quien.length);
  let Numaccion = Math.floor(Math.random() * accion.length);
  let Numque = Math.floor(Math.random() * que.length);
  let Numcuando = Math.floor(Math.random() * quien.length);
  return (
    quien[Numquien] +
    " " +
    accion[Numaccion] +
    " " +
    que[Numque] +
    " " +
    cuando[Numcuando]
  );
};
