// https://youtu.be/N8Xt5rP_DUo?si=AMzcTHPeoP440PJb&t=18778

import { cartagena, santaMarta, medellin, sanAndres } from "./ciudades.js";

//Obtener los elelentos del DOM
let enlaces = document.querySelectorAll('a');
let titulo = document.getElementById('titulo');
let subtitulo = document.getElementById('subtitulo');
let descripcion = document.getElementById('descripcion');

let precio = document.getElementById('precio')
let imagen = document.getElementById('imagen')


console.log(enlaces);

//Agregar evento clic a cada enlace
enlaces.forEach(function (enlace) {
  enlace.addEventListener('click', function () {
    enlaces.forEach(function(enlace) {
      enlace.classList.remove('activo'); //Quitar la clase "activo" de todos los enlaces
    });
    this.classList.add('activo'); //Agregar la casle "activo" al enlace seleccionado

    // Obtener la data correspondiete según el enlace
    let data = obtenerData(this.textContent)
    titulo.innerHTML = data.titulo
    subtitulo.innerHTML = data.subtitulo
    descripcion.innerHTML = data.descripcion
    precio.innerHTML = data.precio
    imagen.src = data.imagen
    imagen.alt = `imagen-de-la-ciudad-de-${data.titulo}`;
  });
});


function obtenerData (enlace) {
  let data = {
    'Cartagena': cartagena,
    'Santa Marta': santaMarta,
    'Medellín': medellin,
    'San Andrés': sanAndres
  };
  return data[enlace];
}