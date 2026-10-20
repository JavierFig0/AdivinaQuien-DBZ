// =========================================================
// SONIDOS
// =========================================================
// Los archivos se crean con herramientas/generar_sonidos.py
const NOMBRES_SONIDOS = ["clic", "seleccion", "tachar", "golpe", "teletransporte", "carga-ki", "si", "no", "rafaga", "victoria", "derrota"];
const CLAVE_SILENCIO = "adivinaquien-dbz-silencio";

const audios = {};
NOMBRES_SONIDOS.forEach((nombre) => {
  audios[nombre] = new Audio(`sonidos/${nombre}.wav`);
  audios[nombre].preload = "auto";
});

let silenciado = false;
try {
  silenciado = localStorage.getItem(CLAVE_SILENCIO) === "1";
} catch {}

function sonar(nombre) {
  if (silenciado) return;
  const audio = audios[nombre].cloneNode(); // Una copia, para que el mismo sonido pueda sonar encima de sí mismo
  audio.volume = 0.6;
  audio.play().catch(() => {});
}

const btnSonido = document.getElementById("btnSonido");

function actualizarBotonSonido() {
  btnSonido.textContent = silenciado ? "🔇" : "🔊";
  btnSonido.setAttribute("aria-label", silenciado ? "Activar sonido" : "Silenciar");
}

btnSonido.addEventListener("click", function () {
  silenciado = !silenciado;
  try {
    localStorage.setItem(CLAVE_SILENCIO, silenciado ? "1" : "0");
  } catch {}
  actualizarBotonSonido();
  sonar("clic");
});

actualizarBotonSonido();
