
//FUNCION PARA CAMBIAR DE PANTALLA DE JUEGO AL TABLERO
function mostrarJuego() {
  var inicio = document.getElementById("inicio");
  var juego = document.getElementById("juego");

  inicio.style.display = "none";
  juego.style.display = "block";
  juego.classList.add("animate__fadeIn");
}

//PREGUNTAS DEL JUGADOR
var preguntas2 = {
  colorCabello: {
    pregunta: "¿El personaje tiene el cabello de color negro?",
    valor: "negro",
  },
  sexo: {
    pregunta: "¿El personaje es mujer?",
    valor: "mujer",
  },
  colorRopa: {
    pregunta: "¿El personaje utiliza ropa de color Naranja?",
    valor: "naranja",
  },
  accesoriosCabeza: {
    pregunta: "¿Tu personaje utiliza algun accesorio en la cabeza?",
    valor: "si",
  },
  raza: {
    pregunta: "¿El personaje es un sayajin?",
    valor: "saiyajin",
  },
  Edad: {
    pregunta: "¿El personaje es un niño?",
    valor: "menor",
  },
  capa: {
    pregunta: "¿Tu personaje utiliza capa o un caparazon?",
    valor: "si",
  },
  revivido: {
    pregunta: "¿Tu personaje lo han revivido con las esferas del Dragon?",
    valor: "si",
  },
  TipoCabello: {
    pregunta: "¿Tu personaje es calvo?",
    valor: "calvo",
  },
  torneo: {
    pregunta: "¿Tu personaje a participado en torneo de artes marciales?",
    valor: "si",
  },
  habitacionTiempo: {
    pregunta: "¿Tu personaje a entrenado en la habitación del tiempo?",
    valor: "si",
  },
  fusion: {
    pregunta: "¿Tu personaje se ha fusionado con otro personaje?",
    valor: "si",
  },
  Transformacion: {
    pregunta: "¿Tu personaje tiene algún tipo de Transformacion?",
    valor: "si",
  },
};


//PREGUNTAS DEL CPU
var preguntas = {
  colorCabello: {
    pregunta: "¿El personaje tiene el cabello de color negro?",
    valor: "negro",
  },
  sexo: {
    pregunta: "¿El personaje es mujer?",
    valor: "mujer",
  },
  colorRopa: {
    pregunta: "¿El personaje utiliza ropa de color Naranja?",
    valor: "naranja",
  },
  accesoriosCabeza: {
    pregunta: "¿Tu personaje utiliza algun accesorio en la cabeza?",
    valor: "si",
  },
  raza: {
    pregunta: "¿El personaje es un sayajin?",
    valor: "saiyajin",
  },
  Edad: {
    pregunta: "¿El personaje es un niño?",
    valor: "menor",
  },
  capa: {
    pregunta: "¿Tu personaje utiliza capa o un caparazon?",
    valor: "si",
  },
  revivido: {
    pregunta: "¿Tu personaje lo han revivido con las esferas del Dragon?",
    valor: "si",
  },
  TipoCabello: {
    pregunta: "¿Tu personaje es calvo?",
    valor: "calvo",
  },
  torneo: {
    pregunta: "¿Tu personaje a participado en torneo de artes marciales?",
    valor: "si",
  },
  habitacionTiempo: {
    pregunta: "¿Tu personaje a entrenado en la habitación del tiempo?",
    valor: "si",
  },
  fusion: {
    pregunta: "¿Tu personaje se ha fusionado con otro personaje?",
    valor: "si",
  },
  Transformacion: {
    pregunta: "¿Tu personaje tiene algún tipo de Transformacion?",
    valor: "si",
  },
};

//PERSONASJES Y SUS CARACTERISTICAS
var personajes = [
  {
    id: 1,
    nombre: "Goku",
    colorCabello: "negro",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Goku.webp",
  },
  {
    id: 2,
    nombre: "Vegeta",
    colorCabello: "amarillo",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Vegeta.webp",
  },
  {
    id: 3,
    nombre: "Gohan",
    colorCabello: "negro",
    colorRopa: "morado",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Gojan.webp",
  },
  {
    id: 4,
    nombre: "Piccolo",
    colorCabello: "na",
    colorRopa: "morado",
    sexo: "Hombre",
    raza: "namekusei",
    capa: "si",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "si",
    TipoCabello: "calvo",
    fusion: "si",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "si",
    img: "img/Piccolo.webp",
  },
  {
    id: 5,
    nombre: "Trunks",
    colorCabello: "amarillo",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Trunks.webp",
  },
  {
    id: 6,
    nombre: "Goten",
    colorCabello: "amarillo",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Goten.webp",
  },
  {
    id: 7,
    nombre: "Krillin",
    colorCabello: "na",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Krillin.webp",
  },
  {
    id: 8,
    nombre: "Bulma",
    colorCabello: "azul",
    colorRopa: "rojo",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Bulma.webp",
  },
  {
    id: 9,
    nombre: "Freezer",
    colorCabello: "na",
    colorRopa: "na",
    sexo: "Hombre",
    raza: "frieza",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Frieza.webp",
  },
  {
    id: 10,
    nombre: "Cell",
    colorCabello: "na",
    colorRopa: "na",
    sexo: "Hombre",
    raza: "androide",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Cell.webp",
  },
  {
    id: 11,
    nombre: "maestro Roshi",
    colorCabello: "na",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "humano",
    capa: "si",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Roshi.webp",
  },
  {
    id: 12,
    nombre: "Videl",
    colorCabello: "negro",
    colorRopa: "rojo",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "si",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Videl.webp",
  },
  {
    id: 13,
    nombre: "Android 17",
    colorCabello: "negro",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "androide",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/AndroideN17.webp",
  },
  {
    id: 14,
    nombre: "Android 18",
    colorCabello: "amarillo",
    colorRopa: "azul",
    sexo: "mujer",
    raza: "androide",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Android_18.webp",
  },
  {
    id: 15,
    nombre: "Lunch",
    colorCabello: "azul",
    colorRopa: "amarillo",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "si",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Lunch.webp",
  },
  {
    id: 16,
    nombre: "Majin Buu",
    colorCabello: "na",
    colorRopa: "blanca",
    sexo: "Hombre",
    raza: "na",
    capa: "si",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "si",
    torneo: "no",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Super_Buu.webp",
  },
  {
    id: 17,
    nombre: "Dende",
    colorCabello: "na",
    colorRopa: "blanca",
    sexo: "Hombre",
    raza: "namekusei",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Dende.webp",
  },
  {
    id: 18,
    nombre: "mr. Satan",
    colorCabello: "negro",
    colorRopa: "cafe",
    sexo: "Hombre",
    raza: "humana",
    capa: "si",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/mrSatan.webp",
  },
  {
    id: 19,
    nombre: "Raditz",
    colorCabello: "negro",
    colorRopa: "negro",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Raditz.webp",
  },
  {
    id: 20,
    nombre: "Nappa",
    colorCabello: "na",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Nappa.webp",
  },
  {
    id: 21,
    nombre: "Bardock",
    colorCabello: "negro",
    colorRopa: "negro",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "si",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Bardock.webp",
  },
  {
    id: 22,
    nombre: "yamcha",
    colorCabello: "negro",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Yamcha.webp",
  },
  {
    id: 23,
    nombre: "Dabura",
    colorCabello: "na",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "demonio",
    capa: "si",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Dabura.webp",
  },
  {
    id: 24,
    nombre: "Milk",
    colorCabello: "negro",
    colorRopa: "azul",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Milk.webp",
  },
];

//PERSONASJES Y SUS CARACTERISTICAS
var personajes2 = [
  {
    id: 1,
    nombre: "Goku",
    colorCabello: "negro",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Goku.webp",
  },
  {
    id: 2,
    nombre: "Vegeta",
    colorCabello: "amarillo",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Vegeta.webp",
  },
  {
    id: 3,
    nombre: "Gohan",
    colorCabello: "negro",
    colorRopa: "morado",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Gojan.webp",
  },
  {
    id: 4,
    nombre: "Piccolo",
    colorCabello: "na",
    colorRopa: "morado",
    sexo: "Hombre",
    raza: "namekusei",
    capa: "si",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "si",
    TipoCabello: "calvo",
    fusion: "si",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "si",
    img: "img/Piccolo.webp",
  },
  {
    id: 5,
    nombre: "Trunks",
    colorCabello: "amarillo",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Trunks.webp",
  },
  {
    id: 6,
    nombre: "Goten",
    colorCabello: "amarillo",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "si",
    img: "img/Goten.webp",
  },
  {
    id: 7,
    nombre: "Krillin",
    colorCabello: "na",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Krillin.webp",
  },
  {
    id: 8,
    nombre: "Bulma",
    colorCabello: "azul",
    colorRopa: "rojo",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "Medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Bulma.webp",
  },
  {
    id: 9,
    nombre: "Freezer",
    colorCabello: "na",
    colorRopa: "na",
    sexo: "Hombre",
    raza: "frieza",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Frieza.webp",
  },
  {
    id: 10,
    nombre: "Cell",
    colorCabello: "na",
    colorRopa: "na",
    sexo: "Hombre",
    raza: "androide",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "si",
    torneo: "si",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Cell.webp",
  },
  {
    id: 11,
    nombre: "maestro Roshi",
    colorCabello: "na",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "humano",
    capa: "si",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Roshi.webp",
  },
  {
    id: 12,
    nombre: "Videl",
    colorCabello: "negro",
    colorRopa: "rojo",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "si",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/videl.webp",
  },
  {
    id: 13,
    nombre: "Android 17",
    colorCabello: "negro",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "androide",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/androideN17.webp",
  },
  {
    id: 14,
    nombre: "Android 18",
    colorCabello: "amarillo",
    colorRopa: "azul",
    sexo: "mujer",
    raza: "androide",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/android_18.webp",
  },
  {
    id: 15,
    nombre: "Lunch",
    colorCabello: "azul",
    colorRopa: "amarillo",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "si",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Lunch.webp",
  },
  {
    id: 16,
    nombre: "Majin Buu",
    colorCabello: "na",
    colorRopa: "blanca",
    sexo: "Hombre",
    raza: "na",
    capa: "si",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "si",
    torneo: "no",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/Super_Buu.webp",
  },
  {
    id: 17,
    nombre: "Dende",
    colorCabello: "na",
    colorRopa: "blanca",
    sexo: "Hombre",
    raza: "namekusei",
    capa: "no",
    Edad: "menor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/dende.webp",
  },
  {
    id: 18,
    nombre: "Mr. Satan",
    colorCabello: "negro",
    colorRopa: "cafe",
    sexo: "Hombre",
    raza: "humana",
    capa: "si",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/mrSatan.webp",
  },
  {
    id: 19,
    nombre: "Raditz",
    colorCabello: "negro",
    colorRopa: "negro",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/raditz.webp",
  },
  {
    id: 20,
    nombre: "Nappa",
    colorCabello: "na",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/nappa.webp",
  },
  {
    id: 21,
    nombre: "Bardock",
    colorCabello: "negro",
    colorRopa: "negro",
    sexo: "Hombre",
    raza: "saiyajin",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "si",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "si",
    habitacionTiempo: "no",
    img: "img/bardock.webp",
  },
  {
    id: 22,
    nombre: "yamcha",
    colorCabello: "negro",
    colorRopa: "naranja",
    sexo: "Hombre",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "si",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "si",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/yamcha.webp",
  },
  {
    id: 23,
    nombre: "Dabura",
    colorCabello: "na",
    colorRopa: "azul",
    sexo: "Hombre",
    raza: "demonio",
    capa: "si",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "calvo",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Dabura.webp",
  },
  {
    id: 24,
    nombre: "Milk",
    colorCabello: "negro",
    colorRopa: "azul",
    sexo: "mujer",
    raza: "humano",
    capa: "no",
    Edad: "mayor",
    revivido: "no",
    accesoriosCabeza: "no",
    TipoCabello: "medio",
    fusion: "no",
    torneo: "no",
    Transformacion: "no",
    habitacionTiempo: "no",
    img: "img/Milk.webp",
  },
];

var key_ = ""; // Variable para almacenar la clave de la pregunta actual
var comparacion_ = ""; // Variable para almacenar el valor de comparación de la pregunta actual
var tablero = document.getElementById("tablero"); // Elemento HTML donde se mostrarán los personajes
var PElegir = document.getElementById("PElegir");
var alertwrap = document.getElementById("alert-wrap");
var wrapQues = document.getElementById("wrap-Questions");
var character = document.getElementById("character");
var characterwrap = document.getElementById("character-wrap");

// AGREGAR PERSONAJES AL TEABLERO
personajes.map((personaje) => {
  tablero.innerHTML += `
    <div id="${personaje.id}" id="miDiv" class="tablero-item">
      <img src="${personaje.img}" alt="${personaje.nombre}" />
      <span>${personaje.nombre}</span>
    </div>
  `;
});

// FUNCIÓN PARA MARCAR LOS DIVS AL ESCOGER PERSONAJE
let divSeleccionado = null;
let nombreImagen;
const divs = document.getElementsByClassName("tablero-item");

function handleClick() {
  // Desmarcar el div seleccionado previamente
  if (divSeleccionado !== null) {
    divSeleccionado.classList.remove("seleccionado");
  }
  // Marcar el nuevo div seleccionado
  this.classList.add("seleccionado");
  divSeleccionado = this;
  // Obtener el nombre de la imagen
  nombreImagen = this.querySelector("img").alt;
}
// Agregar un evento de clic a cada div
for (let i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", handleClick);
}
let divsSeleccionados = []; // Array para almacenar los divs seleccionados

// FUNCION PARA DESABILITAR PERSONAJES AL SELECCIONARLOS
function habilitarSeleccion() {
  // Agregar un evento de clic a cada div
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
      // Si el div ya está seleccionado, deseleccionarlo y habilitarlo
      if (divsSeleccionados.includes(this)) {
        this.classList.remove("desactivado");
        this.removeAttribute("disabled");
        divsSeleccionados = divsSeleccionados.filter((div) => div !== this);
      } else {
        // Marcar el nuevo div seleccionado y deshabilitarlo
        this.classList.add("desactivado");
        this.setAttribute("disabled", "disabled");
        divsSeleccionados.push(this);
      }

      // Obtener el nombre de la imagen
      nombreImagen = this.querySelector("img").alt;
    });
  }
}

//FUNCIÓN PARA ELEGIR PERSONAJE
var nombreLista = "";
var randomId;
const btnElegir = document.getElementById("btnElegir");
var BtnPersonaje = document.getElementById("containerQ");
var DivPreguntas = document.getElementById("containerQuestions");

btnElegir.addEventListener("click", function () {
  // Genera el número aleatorio entre 1 y 24
  randomId = Math.floor(Math.random() * 24) + 1;
  console.log(randomId);

  for (var i = 0; i < personajes.length; i++) {
    if (personajes[i].id === randomId) {
      nombreLista = personajes[i].nombre;
      break;
    }
  }

  //cambia titulo de Escoge personaje a "adivina el personaje"
  document.getElementById("TittleSpan").innerHTML = "Adivina el Personaje";
  habilitarSeleccion();

  for (let i = 0; i < divs.length; i++) {
    divs[i].removeEventListener("click", handleClick);
  }

  var personajeEncontrado = personajes.find(
    (personaje) => personaje.nombre === nombreImagen
  );
  //Agregar personaje escogido en la parte de abajo
  if (personajeEncontrado) {
    PElegir.innerHTML += `
      <div id="${personajeEncontrado.id}" class="PElegir-item">
        <img src="${personajeEncontrado.img}" alt="${personajeEncontrado.nombre}" />
        <span>${personajeEncontrado.nombre}</span>
      </div>
    `;
  }

  if (divSeleccionado !== null) {
    divSeleccionado.classList.remove("seleccionado");
    divSeleccionado = null;
  }
  BtnPersonaje.style.display = "none";
  DivPreguntas.style.display = "block";
});

// FUNCION QUE SE EJECUTA AL EVALUAR UNA PREGUNTA (AL HACER CLICK EN "SI" O "NO")
document.getElementById("btn_si").addEventListener("click", evaluar);
document.getElementById("btn_no").addEventListener("click", evaluar);
function evaluar(e) {
  if (e.target.id === "btn_si") {
    alertwrap.style.display = "none";

    personajes = personajes.filter(
      (personaje) => personaje[key_] === comparacion_
    ); // Se actualiza el arreglo de personajes solo con aquellos que cumplen con la respuesta afirmativa
    getPreguntas(); // Se obtiene la siguiente pregunta
  } else if (e.target.id === "btn_no") {
    alertwrap.style.display = "none";

    personajes = personajes.filter(
      (personaje) => personaje[key_] !== comparacion_
    );
    getPreguntas();
  }
}

// FUNCIÓN PARA OBTENER LA SIGUIENTE PREGUNTA ALEATORIAMENTE
const getRandomInt = (max) => Math.floor(Math.random() * max);

function getPreguntas() {
  var cont = 0;
  var random_ = getRandomInt(Object.keys(preguntas).length);

  if (Object.keys(personajes).length === 0) {
    // Si no hay personajes restantes en el arreglo
    alert("El personaje que buscas no se encuentra en la lista");
    return;
  }
  if (
    Object.keys(preguntas).length > 0 &&
    Object.keys(personajes).length !== 1
  ) {
    // Si aún quedan preguntas y más de un personaje en el arreglo
    for (const key in preguntas) {
      if (cont === random_) {
        document.getElementById(
          "pregunta"
        ).innerHTML = `${preguntas[key].pregunta}`;
        key_ = key;
        comparacion_ = preguntas[key].valor;
        delete preguntas[key];
      }
      cont++;
    }
  } else {
    characterwrap.style.display = "block";
    document.getElementById("spanCharacter").innerHTML = `Tu personaje es: ${personajes[0].nombre}`;
    
  }
}

//BOTONES ADIVINAR, PREGUNTAS Y TURNO
const btnAdivinar = document.getElementById("btnAdivinar");
const btnPregunt = document.getElementById("btnPreguntas");
const btnTurno = document.getElementById("btnTurno");
const btncharacter = document.getElementById("btncharacter");
btnTurno.disabled = true;
btnAdivinar.disabled = true;

//FUNCIÓN PARA MOSTRAR LAS PREGUNTAS CON BOTON PREGUNTAS
btnPregunt.addEventListener("click", function () {
  wrapQues.style.display = "block";
  btnTurno.disabled = false;
  btnPregunt.disabled = true;
  btnAdivinar.disabled = true;
});

//BOTON PARA DAR TURNO AL CPU
btnTurno.addEventListener("click", function () {
  alertwrap.style.display = "block";
  btnPregunt.disabled = false;
  btnAdivinar.disabled = false;
  btnTurno.disabled = true;
});

//BBOTON PARA ADIVINAR EL PERSONAJE
btnAdivinar.addEventListener("click", function () {
  // Agregar un evento de clic a cada div
  for (let i = 0; i < divs.length; i++) {
    divs[i].addEventListener("click", function () {
      // Si el div ya está seleccionado, deseleccionarlo y habilitarlo
      if (divsSeleccionados.includes(this)) {
        this.classList.remove("desactivado");
        this.removeAttribute("disabled");
        divsSeleccionados = divsSeleccionados.filter((div) => div !== this);
      } else {
        // Marcar el nuevo div seleccionado y deshabilitarlo
        this.classList.add("desactivado");
        this.setAttribute("disabled", "disabled");
        divsSeleccionados.push(this);
      }

      // Obtener el nombre de la imagen
      nombreImagen = this.querySelector("img").alt;
      console.log("Nombre de la imagen:", nombreImagen);
      if (nombreImagen == nombreLista) {
        characterwrap.style.display = "block";
        document.getElementById("spanCharacter").innerHTML = "Adivinaste!, el personaje es: " + nombreImagen;
      } else {
        characterwrap.style.display = "block";
        document.getElementById("spanCharacter").innerHTML = "NO!, el personaje era: " + nombreLista;
      }
    });
  }
});



//FUNCIÓN PARA QUE EL CPU CONTESTE LAS PREGUNTAS
function askQuestion(property) {


  var value = preguntas2[property].valor;
  var answer = "No";
  var selectedId = randomId; // ID del personaje seleccionado 

  // Asigna el valor del número aleatorio al campo de entrada

  for (var i = 0; i < personajes2.length; i++) {
    if (personajes2[i].id === selectedId && personajes2[i][property] === value) {
      answer = "Sí";
      break;
    }
  }

  if (answer === "Sí") {
    var alertText = document.getElementById("alert-text");
    alertText.style.display = "block";
    alertText.innerHTML = "Sí";
    alertText.classList.add("green-bg"); 
    setTimeout(function() {
      alertText.style.display = "none";
      alertText.classList.remove("green-bg"); 
    }, 1000);
  } else {
    var alertText = document.getElementById("alert-text");
    alertText.style.display = "block";
    alertText.innerHTML = "No";
    setTimeout(function() {
      alertText.style.display = "none";
    }, 1000);
  }
  
  wrapQues.style.display = "none";
}
  


  btncharacter.addEventListener("click", function () {
    location.reload();
  });



getPreguntas(); // Se obtiene la primera pregunta al cargar la página

