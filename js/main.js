// =========================================================
// DATOS: PREGUNTAS
// =========================================================
// Cada pregunta compara una propiedad del personaje con un valor.
// "claves" son las palabras que reconoce el cuadro de texto: la pregunta
// escrita debe tener al menos una palabra de CADA grupo.
// Las claves van sin acentos y pueden ser el inicio de una palabra
// (por ejemplo "transform" reconoce "transforma" y "transformación").
const preguntas = [
  { id: "peloNegro", categoria: "Apariencia", texto: "¿Tiene el cabello negro?", propiedad: "colorCabello", valor: "negro",
    claves: [["pelo", "cabello", "cabellera"], ["negro", "negra", "oscuro", "oscura"]] },
  { id: "peloAmarillo", categoria: "Apariencia", texto: "¿Tiene el cabello amarillo?", propiedad: "colorCabello", valor: "amarillo",
    claves: [["pelo", "cabello", "cabellera", "rubio", "rubia"], ["amarillo", "amarilla", "rubio", "rubia", "dorado", "dorada"]] },
  { id: "peloAzul", categoria: "Apariencia", texto: "¿Tiene el cabello azul?", propiedad: "colorCabello", valor: "azul",
    claves: [["pelo", "cabello", "cabellera"], ["azul"]] },
  { id: "calvo", categoria: "Apariencia", texto: "¿Es calvo (no tiene pelo)?", propiedad: "colorCabello", valor: "ninguno",
    claves: [["calvo", "calva", "pelon", "pelona", "sin pelo", "sin cabello", "no tiene pelo", "no tiene cabello"]] },
  { id: "bigote", categoria: "Apariencia", texto: "¿Tiene bigote o barba?", propiedad: "bigote", valor: true,
    claves: [["bigote", "barba", "mostacho"]] },
  { id: "antenas", categoria: "Apariencia", texto: "¿Tiene antenas en la cabeza?", propiedad: "antenas", valor: true,
    claves: [["antena"]] },
  { id: "pielVerde", categoria: "Apariencia", texto: "¿Tiene la piel verde?", propiedad: "pielVerde", valor: true,
    claves: [["verde"]] },
  { id: "lentes", categoria: "Apariencia", texto: "¿Usa lentes?", propiedad: "lentes", valor: true,
    claves: [["lente", "gafas", "anteojos"]] },
  { id: "accesorio", categoria: "Apariencia", texto: "¿Usa algún accesorio en la cabeza?", propiedad: "accesorioCabeza", valor: true,
    claves: [["accesorio", "turbante", "diadema", "cinta", "liston", "mono", "sombrero", "gorro", "panuelo", "banda"]] },

  { id: "ropaNaranja", categoria: "Ropa", texto: "¿Usa ropa naranja?", propiedad: "colorRopa", valor: "naranja",
    claves: [["naranja", "anaranjad"]] },
  { id: "ropaAzul", categoria: "Ropa", texto: "¿Usa ropa azul?", propiedad: "colorRopa", valor: "azul",
    claves: [["azul"]] },
  { id: "ropaMorada", categoria: "Ropa", texto: "¿Usa ropa morada?", propiedad: "colorRopa", valor: "morado",
    claves: [["morad", "purpura", "violeta", "lila"]] },
  { id: "ropaRoja", categoria: "Ropa", texto: "¿Usa ropa roja?", propiedad: "colorRopa", valor: "rojo",
    claves: [["rojo", "roja"]] },
  { id: "capa", categoria: "Ropa", texto: "¿Usa capa o caparazón?", propiedad: "capa", valor: true,
    claves: [["capa", "caparazon", "concha"]] },
  { id: "armadura", categoria: "Ropa", texto: "¿Usa armadura de saiyajin?", propiedad: "armadura", valor: true,
    claves: [["armadura"]] },

  { id: "mujer", categoria: "Quién es", texto: "¿Es mujer?", propiedad: "sexo", valor: "mujer",
    claves: [["mujer", "chica", "femenin", "dama", "senora", "senorita"]] },
  { id: "nino", categoria: "Quién es", texto: "¿Es un niño?", propiedad: "edad", valor: "niño",
    claves: [["nino", "nina", "pequeno", "chico", "infante", "menor"]] },
  { id: "saiyajin", categoria: "Quién es", texto: "¿Es saiyajin (o mitad saiyajin)?", propiedad: "raza", valor: "saiyajin",
    claves: [["saiyajin", "sayajin", "saiyayin", "saiyan", "saiya"]] },
  { id: "humano", categoria: "Quién es", texto: "¿Es humano?", propiedad: "raza", valor: "humano",
    claves: [["humano", "humana", "terricola"]] },
  { id: "androide", categoria: "Quién es", texto: "¿Es un androide?", propiedad: "raza", valor: "androide",
    claves: [["androide", "robot", "cyborg", "ciborg", "maquina"]] },
  { id: "namekiano", categoria: "Quién es", texto: "¿Es namekiano?", propiedad: "raza", valor: "namekiano",
    claves: [["namek"]] },

  { id: "villano", categoria: "Historia", texto: "¿Ha sido villano?", propiedad: "villano", valor: true,
    claves: [["villan", "malo", "mala", "malvad", "enemig"]] },
  { id: "familiaGoku", categoria: "Historia", texto: "¿Es familia de Goku?", propiedad: "familiaGoku", valor: true,
    claves: [["familia", "pariente", "hijo", "hermano", "padre", "papa", "esposa"], ["goku", "kakaroto"]] },
  { id: "familiaVegeta", categoria: "Historia", texto: "¿Es familia de Vegeta?", propiedad: "familiaVegeta", valor: true,
    claves: [["familia", "pariente", "hijo", "esposa", "pareja", "novia"], ["vegeta"]] },
  { id: "freezer", categoria: "Historia", texto: "¿Trabajó para Freezer?", propiedad: "ejercitoFreezer", valor: true,
    claves: [["freezer", "frieza", "freeza"], ["trabaj", "ejercito", "soldado", "sirvi", "ordenes"]] },
  { id: "torneo", categoria: "Historia", texto: "¿Ha participado en un torneo de artes marciales?", propiedad: "torneo", valor: true,
    claves: [["torneo", "artes marciales", "tenkaichi", "competencia"]] },
  { id: "revivido", categoria: "Historia", texto: "¿Lo han revivido con las esferas del dragón?", propiedad: "revivido", valor: true,
    claves: [["reviv", "resucit", "esferas", "murio", "muerto"]] },
  { id: "habitacion", categoria: "Historia", texto: "¿Ha entrenado en la Habitación del Tiempo?", propiedad: "habitacionTiempo", valor: true,
    claves: [["habitacion", "cuarto", "sala"], ["tiempo"]] },
  { id: "fusion", categoria: "Historia", texto: "¿Se ha fusionado con otro personaje?", propiedad: "fusion", valor: true,
    claves: [["fusion", "absorb"]] },
  { id: "transformacion", categoria: "Historia", texto: "¿Tiene alguna transformación?", propiedad: "transformacion", valor: true,
    claves: [["transform", "convierte", "cambia de forma"]] },
];

const categorias = ["Apariencia", "Ropa", "Quién es", "Historia"];

// =========================================================
// DATOS: PERSONAJES Y SUS CARACTERÍSTICAS
// =========================================================
// Los colores coinciden con las imágenes del tablero (por eso Vegeta,
// Trunks y Goten tienen el cabello amarillo: están en Super Saiyajin).
const personajes = [
  {
    id: 1, nombre: "Goku", img: "img/Goku.webp",
    colorCabello: "negro", colorRopa: "naranja", sexo: "hombre", edad: "adulto", raza: "saiyajin",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: true, habitacionTiempo: true, fusion: true, transformacion: true,
  },
  {
    id: 2, nombre: "Vegeta", img: "img/Vegeta.webp",
    colorCabello: "amarillo", colorRopa: "azul", sexo: "hombre", edad: "adulto", raza: "saiyajin",
    capa: false, armadura: true, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: true,
    torneo: true, revivido: true, habitacionTiempo: true, fusion: true, transformacion: true,
  },
  {
    id: 3, nombre: "Gohan", img: "img/Gojan.webp",
    colorCabello: "negro", colorRopa: "morado", sexo: "hombre", edad: "niño", raza: "saiyajin",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: true, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: true, fusion: false, transformacion: true,
  },
  {
    id: 4, nombre: "Piccolo", img: "img/Piccolo.webp",
    colorCabello: "ninguno", colorRopa: "morado", sexo: "hombre", edad: "adulto", raza: "namekiano",
    capa: true, armadura: false, accesorioCabeza: true, bigote: false, antenas: true, pielVerde: true, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: true, habitacionTiempo: true, fusion: true, transformacion: false,
  },
  {
    id: 5, nombre: "Trunks", img: "img/Trunks.webp",
    colorCabello: "amarillo", colorRopa: "verde", sexo: "hombre", edad: "niño", raza: "saiyajin",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: true, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: true, fusion: true, transformacion: true,
  },
  {
    id: 6, nombre: "Goten", img: "img/Goten.webp",
    colorCabello: "amarillo", colorRopa: "naranja", sexo: "hombre", edad: "niño", raza: "saiyajin",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: true, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: true, fusion: true, transformacion: true,
  },
  {
    id: 7, nombre: "Krillin", img: "img/Krillin.webp",
    colorCabello: "ninguno", colorRopa: "naranja", sexo: "hombre", edad: "adulto", raza: "humano",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: true, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 8, nombre: "Bulma", img: "img/Bulma.webp",
    colorCabello: "azul", colorRopa: "rojo", sexo: "mujer", edad: "adulto", raza: "humano",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: true, ejercitoFreezer: false,
    torneo: false, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 9, nombre: "Freezer", img: "img/Frieza.webp",
    colorCabello: "ninguno", colorRopa: "ninguno", sexo: "hombre", edad: "adulto", raza: "alien",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: true, habitacionTiempo: false, fusion: false, transformacion: true,
  },
  {
    id: 10, nombre: "Cell", img: "img/Cell.webp",
    colorCabello: "ninguno", colorRopa: "ninguno", sexo: "hombre", edad: "adulto", raza: "androide",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: true, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: false, fusion: true, transformacion: true,
  },
  {
    id: 11, nombre: "Maestro Roshi", img: "img/Roshi.webp",
    colorCabello: "ninguno", colorRopa: "naranja", sexo: "hombre", edad: "adulto", raza: "humano",
    capa: true, armadura: false, accesorioCabeza: false, bigote: true, antenas: false, pielVerde: false, lentes: true,
    villano: false, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: true, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 12, nombre: "Videl", img: "img/Videl.webp",
    colorCabello: "negro", colorRopa: "rojo", sexo: "mujer", edad: "adulto", raza: "humano",
    capa: false, armadura: false, accesorioCabeza: true, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 13, nombre: "Androide 17", img: "img/AndroideN17.webp",
    colorCabello: "negro", colorRopa: "azul", sexo: "hombre", edad: "adulto", raza: "androide",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: true, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 14, nombre: "Androide 18", img: "img/Android_18.webp",
    colorCabello: "amarillo", colorRopa: "azul", sexo: "mujer", edad: "adulto", raza: "androide",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: true, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 15, nombre: "Pan", img: "img/Pan.webp",
    colorCabello: "negro", colorRopa: "rojo", sexo: "mujer", edad: "niño", raza: "saiyajin",
    capa: false, armadura: false, accesorioCabeza: true, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: true, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 16, nombre: "Majin Buu", img: "img/Super_Buu.webp",
    colorCabello: "ninguno", colorRopa: "blanco", sexo: "hombre", edad: "adulto", raza: "majin",
    capa: true, armadura: false, accesorioCabeza: false, bigote: false, antenas: true, pielVerde: false, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: false, revivido: false, habitacionTiempo: true, fusion: true, transformacion: true,
  },
  {
    id: 17, nombre: "Dende", img: "img/Dende.webp",
    colorCabello: "ninguno", colorRopa: "blanco", sexo: "hombre", edad: "niño", raza: "namekiano",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: true, pielVerde: true, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: false, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 18, nombre: "Mr. Satan", img: "img/mrSatan.webp",
    colorCabello: "negro", colorRopa: "cafe", sexo: "hombre", edad: "adulto", raza: "humano",
    capa: true, armadura: false, accesorioCabeza: false, bigote: true, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 19, nombre: "Dr. Gero", img: "img/Dr_Gero.webp",
    colorCabello: "blanco", colorRopa: "cafe", sexo: "hombre", edad: "adulto", raza: "androide",
    capa: false, armadura: false, accesorioCabeza: true, bigote: true, antenas: false, pielVerde: false, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: false, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 20, nombre: "Nappa", img: "img/Nappa.webp",
    colorCabello: "ninguno", colorRopa: "negro", sexo: "hombre", edad: "adulto", raza: "saiyajin",
    capa: false, armadura: true, accesorioCabeza: false, bigote: true, antenas: false, pielVerde: false, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: true,
    torneo: false, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
  {
    id: 21, nombre: "Bardock", img: "img/Bardock.webp",
    colorCabello: "negro", colorRopa: "negro", sexo: "hombre", edad: "adulto", raza: "saiyajin",
    capa: false, armadura: true, accesorioCabeza: true, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: true, familiaVegeta: false, ejercitoFreezer: true,
    torneo: false, revivido: false, habitacionTiempo: false, fusion: false, transformacion: true,
  },
  {
    id: 22, nombre: "Nail", img: "img/Nail.webp",
    colorCabello: "ninguno", colorRopa: "blanco", sexo: "hombre", edad: "adulto", raza: "namekiano",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: true, pielVerde: true, lentes: false,
    villano: false, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: false, revivido: false, habitacionTiempo: false, fusion: true, transformacion: false,
  },
  {
    id: 23, nombre: "Lord Slug", img: "img/Lord_Slug.webp",
    colorCabello: "ninguno", colorRopa: "morado", sexo: "hombre", edad: "adulto", raza: "namekiano",
    capa: true, armadura: false, accesorioCabeza: true, bigote: false, antenas: false, pielVerde: true, lentes: false,
    villano: true, familiaGoku: false, familiaVegeta: false, ejercitoFreezer: false,
    torneo: false, revivido: false, habitacionTiempo: false, fusion: false, transformacion: true,
  },
  {
    id: 24, nombre: "Milk", img: "img/Milk.webp",
    colorCabello: "negro", colorRopa: "azul", sexo: "mujer", edad: "adulto", raza: "humano",
    capa: false, armadura: false, accesorioCabeza: false, bigote: false, antenas: false, pielVerde: false, lentes: false,
    villano: false, familiaGoku: true, familiaVegeta: false, ejercitoFreezer: false,
    torneo: true, revivido: false, habitacionTiempo: false, fusion: false, transformacion: false,
  },
];

// =========================================================
// ESTADO DE LA PARTIDA
// =========================================================
let modo = "cpu"; // "cpu": contra la computadora · "amigo": multijugador en línea
let dificultad = "dificil"; // "facil": el CPU pregunta al azar · "dificil": hace la mejor pregunta
let fase = "elegir"; // "elegir" → "listo" (esperando al amigo) → "jugando" → "fin"
let turno = "jugador"; // "jugador", "rival" (CPU o amigo) o "esperando" (la respuesta del amigo)
let modoAdivinar = false;

let miPersonaje = null;
let personajeRival = null; // Personaje del CPU o del amigo (el del amigo solo se conoce al final)
let seleccionado = null;

let candidatosCPU = [];
let preguntasCPU = [];
let preguntaActualCPU = null;
let respuestasJugador = {}; // Preguntas que ya hizo el jugador: id → true (sí) / false (no)
let descartados = new Set();
let preguntasRival = 0;
let quedanRival = personajes.length;
let rivalListo = false;
let categoriaActiva = categorias[0];
let temporizador = null; // Espera mientras se muestra el "¡SÍ!" o "¡NO!" gigante

// =========================================================
// ELEMENTOS DEL HTML
// =========================================================
const $ = (id) => document.getElementById(id);

const tablero = $("tablero");
const titulo = $("titulo");
const btnElegir = $("btnElegir");
const btnPreguntar = $("btnPreguntar");
const btnAdivinar = $("btnAdivinar");
const modalPreguntas = $("modalPreguntas");
const modalCPU = $("modalCPU");
const modalFin = $("modalFin");
const modalAviso = $("modalAviso");
const inputPregunta = $("inputPregunta");
const mensajeEscribir = $("mensajeEscribir");

// =========================================================
// FUNCIONES DE AYUDA
// =========================================================
const getRandomInt = (max) => Math.floor(Math.random() * max);
const alAzar = (lista) => lista[getRandomInt(lista.length)];
const buscarPersonaje = (id) => personajes.find((personaje) => personaje.id === id);
const buscarPregunta = (id) => preguntas.find((pregunta) => pregunta.id === id);

const nombreRival = () => (modo === "cpu" ? "el CPU" : "tu amigo");
const mayuscula = (texto) => texto.charAt(0).toUpperCase() + texto.slice(1);

function respondeSi(personaje, pregunta) {
  return personaje[pregunta.propiedad] === pregunta.valor;
}

function cartaHTML(personaje) {
  return `<img src="${personaje.img}" alt="${personaje.nombre}" /><span>${personaje.nombre}</span>`;
}

function textoPreguntas(cantidad) {
  return cantidad === 1 ? "1 pregunta" : `${cantidad} preguntas`;
}

function etiquetaRespuesta(si) {
  return si ? `<span class="etiqueta-si">✓ Sí</span>` : `<span class="etiqueta-no">✗ No</span>`;
}

function abrirModal(modal) {
  modal.classList.remove("oculto");
}

function cerrarModal(modal) {
  modal.classList.add("oculto");
}

// =========================================================
// PANTALLA DE INICIO
// =========================================================
document.querySelectorAll(".modo").forEach((boton) => {
  boton.addEventListener("click", function () {
    document.querySelectorAll(".modo").forEach((b) => b.classList.remove("activa"));
    this.classList.add("activa");
    sonar("clic");
    $("menuCPU").classList.toggle("oculto", this.dataset.modo !== "cpu");
    $("menuAmigo").classList.toggle("oculto", this.dataset.modo !== "amigo");
  });
});

const ayudaDificultad = {
  facil: "El CPU hace preguntas al azar. Ideal para empezar.",
  dificil: "El CPU siempre hace la pregunta que más personajes descarta.",
};

document.querySelectorAll(".opcion").forEach((boton) => {
  boton.addEventListener("click", function () {
    document.querySelectorAll(".opcion").forEach((b) => b.classList.remove("activa"));
    this.classList.add("activa");
    sonar("clic");
    dificultad = this.dataset.dificultad;
    $("dificultadAyuda").textContent = ayudaDificultad[dificultad];
  });
});

$("btnJugar").addEventListener("click", function () {
  sonar("carga-ki");
  modo = "cpu";
  mostrarJuego();
});

// También la usa multijugador.js cuando los dos amigos se conectan
function mostrarJuego() {
  $("inicio").classList.add("oculto");
  $("juego").classList.remove("oculto");
  nuevaPartida();
}

// =========================================================
// NUEVA PARTIDA
// =========================================================
function nuevaPartida() {
  fase = "elegir";
  turno = "jugador";
  modoAdivinar = false;
  miPersonaje = null;
  personajeRival = null;
  seleccionado = null;
  candidatosCPU = [...personajes];
  preguntasCPU = [...preguntas];
  preguntaActualCPU = null;
  respuestasJugador = {};
  descartados = new Set();
  preguntasRival = 0;
  quedanRival = personajes.length;
  rivalListo = false;
  categoriaActiva = categorias[0];

  tablero.innerHTML = personajes
    .map((personaje, i) => `
      <button class="carta" data-id="${personaje.id}" style="animation-delay: ${i * 25}ms">
        <span class="carta-figura">
          <img src="${personaje.img}" alt="${personaje.nombre}" />
          <span class="carta-heridas" style="-webkit-mask-image: url('${personaje.img}'); mask-image: url('${personaje.img}')"></span>
        </span>
        <span class="carta-nombre">${personaje.nombre}</span>
      </button>
    `)
    .join("");

  titulo.textContent = "Escoge tu personaje";
  $("textoElegir").textContent = `Haz clic en un personaje para escogerlo. ${mayuscula(nombreRival())} no sabrá cuál es.`;
  $("etiquetaRival").textContent = modo === "cpu" ? "Al CPU le quedan" : "A tu amigo le quedan";
  $("etiquetaFinRival").textContent = modo === "cpu" ? "Personaje del CPU" : "Personaje de tu amigo";
  $("btnFinInicio").textContent = modo === "cpu" ? "Cambiar dificultad" : "Salir al inicio";

  btnElegir.disabled = true;
  btnElegir.classList.remove("oculto");
  $("panelElegir").classList.remove("oculto");
  $("panelPartida").classList.add("oculto");
  $("marcadores").classList.add("oculto");
  $("listaHistorial").innerHTML = `<li class="historial-vacio">Aún no hay preguntas.</li>`;
  desactivarModoAdivinar();
  actualizarMarcadores();
}

// =========================================================
// CLIC EN LAS CARTAS DEL TABLERO
// =========================================================
tablero.addEventListener("click", function (e) {
  const carta = e.target.closest(".carta");
  if (!carta) return;
  const personaje = buscarPersonaje(Number(carta.dataset.id));

  if (fase === "elegir") {
    if (seleccionado) seleccionado.classList.remove("seleccionada");
    carta.classList.add("seleccionada");
    seleccionado = carta;
    sonar("seleccion");
    btnElegir.disabled = false;
  } else if (fase === "jugando" && modoAdivinar) {
    // No se puede adivinar un personaje tachado
    if (!descartados.has(personaje.id)) {
      sonar("rafaga");
      adivinarPersonaje(personaje);
    }
  } else if (fase === "jugando") {
    if (descartados.has(personaje.id)) {
      descartados.delete(personaje.id);
      carta.classList.remove("descartada");
    } else {
      descartados.add(personaje.id);
      carta.classList.add("descartada");
    }
    sonar("tachar");
    actualizarMarcadores();
    // Tu amigo ve cuántos te quedan, pero no cuáles
    if (modo === "amigo") enviar({ tipo: "quedan", cantidad: personajes.length - descartados.size });
  }
});

// =========================================================
// CONFIRMAR PERSONAJE Y EMPEZAR
// =========================================================
btnElegir.addEventListener("click", function () {
  if (!seleccionado) return;

  sonar("golpe");
  miPersonaje = buscarPersonaje(Number(seleccionado.dataset.id));
  seleccionado.classList.remove("seleccionada");
  seleccionado = null;
  $("miPersonaje").innerHTML = cartaHTML(miPersonaje);
  $("cpuReferencia").innerHTML = cartaHTML(miPersonaje);

  if (modo === "cpu") {
    personajeRival = alAzar(personajes);
    empezarPartida(true);
  } else {
    fase = "listo";
    btnElegir.classList.add("oculto");
    $("textoElegir").textContent = `¡Listo, escogiste a ${miPersonaje.nombre}! Esperando a que tu amigo escoja su personaje…`;
    avisarListo();
  }
});

function empezarPartida(empiezoYo) {
  fase = "jugando";
  titulo.textContent = `Adivina el personaje ${modo === "cpu" ? "del CPU" : "de tu amigo"}`;
  $("panelElegir").classList.add("oculto");
  $("panelPartida").classList.remove("oculto");
  $("marcadores").classList.remove("oculto");
  actualizarMarcadores();
  cambiarTurno(empiezoYo ? "jugador" : "rival");
}

// =========================================================
// TURNOS Y MARCADORES
// =========================================================
function cambiarTurno(quien) {
  turno = quien;
  const textos = {
    jugador: "Tu turno",
    rival: modo === "cpu" ? "Turno del CPU…" : "Turno de tu amigo…",
    esperando: "Esperando respuesta…",
  };
  const indicador = $("turno");
  indicador.textContent = textos[quien];
  indicador.classList.toggle("turno-cpu", quien !== "jugador");
  btnPreguntar.disabled = quien !== "jugador";
  btnAdivinar.disabled = quien !== "jugador";
}

function actualizarMarcadores() {
  $("quedanJugador").textContent = personajes.length - descartados.size;
  $("quedanRival").textContent = modo === "cpu" ? candidatosCPU.length : quedanRival;
  $("preguntasJugador").textContent = textoPreguntas(Object.keys(respuestasJugador).length);
  $("preguntasRival").textContent = textoPreguntas(preguntasRival);
}

// quien: "jugador" o "rival"
function agregarHistorial(quien, texto, si) {
  const lista = $("listaHistorial");
  const vacio = lista.querySelector(".historial-vacio");
  if (vacio) vacio.remove();

  const etiqueta = quien === "jugador" ? "TÚ" : modo === "cpu" ? "CPU" : "AMIGO";
  const item = document.createElement("li");
  item.innerHTML = `
    <span class="historial-quien ${quien === "rival" ? "cpu" : ""}">${etiqueta}</span>
    <span class="historial-texto"></span>
    ${etiquetaRespuesta(si)}
  `;
  // textContent porque en modo amigo el texto lo escribe la otra persona
  item.querySelector(".historial-texto").textContent = texto;
  lista.prepend(item);
}

function mostrarRespuesta(texto, si, alTerminar) {
  const caja = $("respuesta");
  $("respuestaPregunta").textContent = texto;
  $("respuestaTexto").textContent = si ? "¡SÍ!" : "¡NO!";
  caja.classList.remove("oculto", "si", "no");
  caja.classList.add(si ? "si" : "no");
  sonar(si ? "si" : "no");

  temporizador = setTimeout(function () {
    caja.classList.add("oculto");
    alTerminar();
  }, 1600);
}

// =========================================================
// PREGUNTAS DEL JUGADOR
// =========================================================
btnPreguntar.addEventListener("click", function () {
  sonar("teletransporte");
  inputPregunta.value = "";
  inputPregunta.placeholder = modo === "amigo"
    ? "Pregunta lo que quieras, ej: ¿tiene cola?"
    : "Escribe tu pregunta, ej: ¿es calvo?";
  mostrarMensaje("");
  dibujarPreguntas();
  abrirModal(modalPreguntas);
  inputPregunta.focus();
});

$("btnCerrarPreguntas").addEventListener("click", () => cerrarModal(modalPreguntas));

function dibujarPreguntas() {
  $("pestanas").innerHTML = categorias
    .map((categoria) => `
      <button class="pestana ${categoria === categoriaActiva ? "activa" : ""}" role="tab"
        aria-selected="${categoria === categoriaActiva}" data-categoria="${categoria}">${categoria}</button>
    `)
    .join("");

  $("listaPreguntas").innerHTML = preguntas
    .filter((pregunta) => pregunta.categoria === categoriaActiva)
    .map((pregunta) => {
      const yaHecha = pregunta.id in respuestasJugador;
      return `
        <button class="pregunta-btn" data-id="${pregunta.id}" ${yaHecha ? "disabled" : ""}>
          <span>${pregunta.texto}</span>
          ${yaHecha ? etiquetaRespuesta(respuestasJugador[pregunta.id]) : ""}
        </button>
      `;
    })
    .join("");
}

$("pestanas").addEventListener("click", function (e) {
  const pestana = e.target.closest(".pestana");
  if (!pestana) return;
  categoriaActiva = pestana.dataset.categoria;
  sonar("clic");
  dibujarPreguntas();
});

$("listaPreguntas").addEventListener("click", function (e) {
  const boton = e.target.closest(".pregunta-btn");
  if (boton && !boton.disabled) hacerPregunta(buscarPregunta(boton.dataset.id));
});

function hacerPregunta(pregunta) {
  if (pregunta.id in respuestasJugador) {
    mostrarMensaje(`Ya preguntaste "${pregunta.texto}" y la respuesta fue ${respuestasJugador[pregunta.id] ? "Sí" : "No"}.`, true);
    return;
  }
  cerrarModal(modalPreguntas);

  if (modo === "amigo") {
    // Tu amigo lee la pregunta y contesta él mismo con Sí o No
    cambiarTurno("esperando");
    enviar({ tipo: "pregunta", id: pregunta.id, texto: pregunta.texto });
  } else {
    recibirRespuesta(pregunta, respondeSi(personajeRival, pregunta));
  }
}

// Llega la respuesta a tu pregunta (calculada aquí contra el CPU, o enviada por tu amigo)
function recibirRespuesta(pregunta, si) {
  respuestasJugador[pregunta.id] = si;
  agregarHistorial("jugador", pregunta.texto, si);
  actualizarMarcadores();
  cambiarTurno("rival");

  mostrarRespuesta(pregunta.texto, si, modo === "cpu" ? turnoCPU : () => {});
}

// =========================================================
// PREGUNTAS ESCRITAS
// =========================================================
// Quita acentos, signos y mayúsculas: "¿Es CALVO?" → "es calvo"
function normalizar(texto) {
  return texto
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

// ¿Alguna palabra del texto empieza con la clave?
function contieneClave(texto, clave) {
  return (" " + texto).includes(" " + clave);
}

// Devuelve las preguntas que encajan con el texto escrito.
// Si varias encajan, se quedan las más específicas (las que piden más grupos de palabras).
function interpretarPregunta(textoEscrito) {
  const texto = normalizar(textoEscrito);
  const coincidencias = preguntas.filter((pregunta) =>
    pregunta.claves.every((grupo) => grupo.some((clave) => contieneClave(texto, clave)))
  );
  if (coincidencias.length === 0) return [];

  const maxGrupos = Math.max(...coincidencias.map((pregunta) => pregunta.claves.length));
  return coincidencias.filter((pregunta) => pregunta.claves.length === maxGrupos);
}

$("formEscribir").addEventListener("submit", function (e) {
  e.preventDefault();
  if (inputPregunta.value.trim() === "") return;

  // Con un amigo se puede preguntar lo que sea: no hace falta entender la pregunta
  if (modo === "amigo") {
    hacerPregunta(preguntaLibre(inputPregunta.value));
    return;
  }

  const opciones = interpretarPregunta(inputPregunta.value);

  if (opciones.length === 1) {
    hacerPregunta(opciones[0]);
  } else if (opciones.length > 1) {
    mostrarMensaje("¿Cuál de estas quisiste decir?");
    mensajeEscribir.insertAdjacentHTML(
      "beforeend",
      `<div class="sugerencias">${opciones
        .map((p) => `<button class="sugerencia" data-id="${p.id}">${p.texto}</button>`)
        .join("")}</div>`
    );
  } else {
    mostrarMensaje("No entendí tu pregunta. Prueba con palabras como: pelo, capa, saiyajin, villano o torneo.", true);
  }
});

mensajeEscribir.addEventListener("click", function (e) {
  const sugerencia = e.target.closest(".sugerencia");
  if (sugerencia) hacerPregunta(buscarPregunta(sugerencia.dataset.id));
});

function preguntaLibre(texto) {
  return { id: "libre:" + normalizar(texto), texto: texto.trim() };
}

function mostrarMensaje(texto, esError = false) {
  mensajeEscribir.textContent = texto;
  mensajeEscribir.classList.toggle("error", esError);
}

// =========================================================
// TURNO DEL CPU
// =========================================================
// Quita las preguntas que ya no sirven: si todos los candidatos
// responden igual, la pregunta no descarta a nadie
function preguntasUtiles() {
  preguntasCPU = preguntasCPU.filter((pregunta) => {
    const cuantosSi = candidatosCPU.filter((personaje) => respondeSi(personaje, pregunta)).length;
    return cuantosSi > 0 && cuantosSi < candidatosCPU.length;
  });
  return preguntasCPU;
}

// La mejor pregunta es la que deja la mitad de candidatos en "sí" y la otra mitad en "no",
// porque así descarta la mitad sin importar la respuesta
function elegirMejorPregunta() {
  let mejores = [];
  let mejorPuntaje = Infinity;

  for (const pregunta of preguntasUtiles()) {
    const cuantosSi = candidatosCPU.filter((personaje) => respondeSi(personaje, pregunta)).length;
    const puntaje = Math.abs(cuantosSi - candidatosCPU.length / 2); // 0 = división perfecta

    if (puntaje < mejorPuntaje) {
      mejorPuntaje = puntaje;
      mejores = [pregunta];
    } else if (puntaje === mejorPuntaje) {
      mejores.push(pregunta);
    }
  }

  // Si hay empate se elige al azar para que el juego no sea siempre igual
  return mejores.length > 0 ? alAzar(mejores) : null;
}

// En fácil el CPU pregunta cualquier cosa, aunque ya no le sirva
function elegirPreguntaAlAzar() {
  return preguntasCPU.length > 0 ? alAzar(preguntasCPU) : null;
}

function turnoCPU() {
  if (candidatosCPU.length === 1) {
    cpuAdivina(candidatosCPU[0]);
    return;
  }

  const pregunta = dificultad === "facil" ? elegirPreguntaAlAzar() : elegirMejorPregunta();
  if (pregunta === null) {
    // Quedan varios personajes que ninguna pregunta puede diferenciar: se arriesga
    cpuAdivina(alAzar(candidatosCPU));
    return;
  }

  preguntaActualCPU = pregunta;
  preguntasCPU = preguntasCPU.filter((p) => p !== pregunta);
  $("etiquetaPregunta").textContent = "El CPU pregunta";
  $("preguntaCPU").textContent = pregunta.texto;
  $("pistaCPU").textContent = "";
  sonar("teletransporte");
  abrirModal(modalCPU);
}

$("btnSi").addEventListener("click", () => (modo === "amigo" ? responderAlAmigo(true) : responderCPU(true)));
$("btnNo").addEventListener("click", () => (modo === "amigo" ? responderAlAmigo(false) : responderCPU(false)));

function responderCPU(respuesta) {
  const pregunta = preguntaActualCPU;
  const correcta = respondeSi(miPersonaje, pregunta);

  // El juego conoce tu personaje, así que no deja contestar mal por error
  if (respuesta !== correcta) {
    $("pistaCPU").textContent = `¡Fíjate bien en ${miPersonaje.nombre}! Según el juego la respuesta es «${correcta ? "Sí" : "No"}».`;
    sonar("no");
    const caja = modalCPU.querySelector(".modal-caja");
    caja.classList.remove("sacudir");
    void caja.offsetWidth; // Reinicia la animación
    caja.classList.add("sacudir");
    return;
  }

  candidatosCPU = candidatosCPU.filter((personaje) => respondeSi(personaje, pregunta) === respuesta);
  preguntasRival++;
  agregarHistorial("rival", pregunta.texto, respuesta);
  actualizarMarcadores();
  cerrarModal(modalCPU);
  cambiarTurno("jugador");
}

function cpuAdivina(personaje) {
  if (personaje.id === miPersonaje.id) {
    finPartida(false, `El CPU adivinó que tu personaje era ${personaje.nombre}.`);
  } else {
    finPartida(true, `El CPU se arriesgó con ${personaje.nombre} y falló.`);
  }
}

// =========================================================
// ADIVINAR EL PERSONAJE DEL RIVAL
// =========================================================
btnAdivinar.addEventListener("click", function () {
  sonar("seleccion");
  modoAdivinar = true;
  tablero.classList.add("modo-adivinar");
  $("avisoAdivinar").classList.remove("oculto");
  btnPreguntar.disabled = true;
  btnAdivinar.disabled = true;
});

$("btnCancelarAdivinar").addEventListener("click", function () {
  desactivarModoAdivinar();
  cambiarTurno("jugador");
});

function desactivarModoAdivinar() {
  modoAdivinar = false;
  tablero.classList.remove("modo-adivinar");
  $("avisoAdivinar").classList.add("oculto");
}

function adivinarPersonaje(personaje) {
  desactivarModoAdivinar();

  if (modo === "amigo") {
    // Tu amigo comprueba el intento y responde con el resultado
    cambiarTurno("esperando");
    enviar({ tipo: "adivinar", intento: personaje.id, miPersonaje: miPersonaje.id });
    return;
  }

  if (personaje.id === personajeRival.id) {
    finPartida(true, `¡Adivinaste! El CPU tenía a ${personaje.nombre}.`);
  } else {
    finPartida(false, `No era ${personaje.nombre}. El CPU tenía a ${personajeRival.nombre}.`);
  }
}

// =========================================================
// FIN DE LA PARTIDA
// =========================================================
function finPartida(gana, texto) {
  fase = "fin";
  btnPreguntar.disabled = true;
  btnAdivinar.disabled = true;
  cerrarModal(modalPreguntas);
  setTimeout(() => sonar(gana ? "victoria" : "derrota"), 400);

  const tituloFin = $("tituloFin");
  tituloFin.textContent = gana ? "¡Ganaste!" : "¡Perdiste!";
  tituloFin.className = "fin-titulo " + (gana ? "gana" : "pierde");
  $("textoFin").textContent = texto;
  $("finJugador").innerHTML = cartaHTML(miPersonaje);
  $("finRival").innerHTML = cartaHTML(personajeRival);
  $("statsFin").textContent =
    `Hiciste ${textoPreguntas(Object.keys(respuestasJugador).length)} · ${mayuscula(nombreRival())} hizo ${textoPreguntas(preguntasRival)}`;
  abrirModal(modalFin);
}

$("btnReiniciar").addEventListener("click", function () {
  sonar("carga-ki");
  if (modo === "amigo") enviar({ tipo: "revancha" });
  cerrarModal(modalFin);
  nuevaPartida();
});

// =========================================================
// VOLVER A LA PANTALLA DE INICIO
// =========================================================
function volverAlInicio() {
  sonar("clic");
  clearTimeout(temporizador); // Para que el CPU no juegue estando en el inicio
  [modalPreguntas, modalCPU, modalFin, modalAviso, $("respuesta")].forEach(cerrarModal);
  desactivarModoAdivinar();
  if (modo === "amigo") salirDeSala();
  $("juego").classList.add("oculto");
  $("inicio").classList.remove("oculto");
}

$("btnInicio").addEventListener("click", function () {
  const enCurso = modo === "amigo" ? fase !== "fin" : fase === "jugando";
  const aviso = modo === "amigo"
    ? "¿Salir al inicio? Se cerrará la partida con tu amigo."
    : "¿Salir al inicio? Se perderá la partida actual.";
  if (enCurso && !confirm(aviso)) return;
  volverAlInicio();
});

$("btnFinInicio").addEventListener("click", volverAlInicio);
$("btnAvisoInicio").addEventListener("click", volverAlInicio);

document.addEventListener("keydown", function (e) {
  if (e.key !== "Escape") return;
  if (!modalPreguntas.classList.contains("oculto")) {
    cerrarModal(modalPreguntas);
  } else if (modoAdivinar) {
    desactivarModoAdivinar();
    cambiarTurno("jugador");
  }
});
