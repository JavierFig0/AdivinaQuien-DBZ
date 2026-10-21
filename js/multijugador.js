// =========================================================
// MULTIJUGADOR EN LÍNEA CON PEERJS
// =========================================================
// PeerJS conecta los dos navegadores directamente (WebRTC), así que no hace
// falta un servidor propio y el juego funciona en GitHub Pages.
// El servidor gratuito de PeerJS solo sirve para que los dos se encuentren:
// quien crea la sala se registra con un id hecho con el código, y su amigo
// se conecta a ese id. Después se mandan mensajes como { tipo: "pregunta", id: "calvo" }.
//
// Para que nadie haga trampa, tu personaje NUNCA se envía durante la partida:
// tu amigo manda la pregunta, tu navegador calcula la respuesta y solo devuelve sí o no.

const PREFIJO_SALA = "adivinaquien-dbz-"; // Para no chocar con ids de otras apps que usan PeerJS
const LETRAS_CODIGO = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789"; // Sin O/0 ni I/1 para no confundirse
const LARGO_CODIGO = 5;

let peer = null;
let conexion = null;
let soyAnfitrion = false; // Quien crea la sala decide quién empieza

// =========================================================
// MENSAJES EN LA PANTALLA DE INICIO
// =========================================================
function mostrarEstadoSala(texto, esError = false) {
  $("salaEstado").textContent = texto;
  $("salaEstado").classList.toggle("error", esError);
}

function generarCodigo() {
  let codigo = "";
  for (let i = 0; i < LARGO_CODIGO; i++) codigo += alAzar(LETRAS_CODIGO);
  return codigo;
}

function peerDisponible() {
  if (typeof Peer === "undefined") {
    mostrarEstadoSala("No se pudo cargar PeerJS. Revisa tu conexión a internet.", true);
    return false;
  }
  return true;
}

function errorDeConexion(err) {
  // Durante la partida los errores del servidor no importan: los dos ya están conectados
  if (!$("juego").classList.contains("oculto")) return;
  console.error(err);
  mostrarEstadoSala("Hubo un problema con la conexión. Inténtalo de nuevo.", true);
}

// =========================================================
// CREAR UNA SALA
// =========================================================
$("btnCrearSala").addEventListener("click", () => {
  sonar("clic");
  crearSala();
});

function crearSala() {
  if (!peerDisponible()) return;
  salirDeSala();
  soyAnfitrion = true;
  const codigo = generarCodigo();
  mostrarEstadoSala("Creando sala…");

  peer = new Peer(PREFIJO_SALA + codigo);

  peer.on("open", function () {
    $("codigoSala").textContent = codigo;
    $("salaInicio").classList.add("oculto");
    $("salaCreada").classList.remove("oculto");
    mostrarEstadoSala("Esperando a que tu amigo se una…");
  });

  peer.on("connection", function (nueva) {
    // La sala es para dos: si ya hay alguien, se rechaza
    if (conexion) {
      nueva.on("open", () => nueva.close());
      return;
    }
    prepararConexion(nueva);
  });

  peer.on("error", function (err) {
    if (err.type === "unavailable-id") {
      crearSala(); // Ese código ya lo usa otra sala: probar con otro
    } else {
      errorDeConexion(err);
    }
  });
}

$("btnCopiar").addEventListener("click", async function () {
  // Enlace que une directo a la sala: .../index.html?sala=K7P2Q
  const enlace = `${location.href.split("?")[0]}?sala=${$("codigoSala").textContent}`;
  if (await copiarTexto(enlace)) {
    mostrarEstadoSala("¡Enlace copiado! Mándaselo a tu amigo.");
  } else {
    mostrarEstadoSala(`Copia este enlace: ${enlace}`);
  }
});

async function copiarTexto(texto) {
  // navigator.clipboard solo existe con https o localhost, por eso hay respaldo
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(texto);
      return true;
    } catch {}
  }
  return copiarConTextarea(texto);
}

function copiarConTextarea(texto) {
  const area = document.createElement("textarea");
  area.value = texto;
  area.setAttribute("readonly", "");
  // 16px evita que iOS haga zoom al seleccionar
  area.style.cssText = "position:fixed;top:0;left:0;opacity:0;font-size:16px;";
  document.body.appendChild(area);
  area.focus();
  area.select();
  // iOS ignora select(), necesita el rango explícito
  area.setSelectionRange(0, texto.length);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch {}
  area.remove();
  return ok;
}

$("btnCancelarSala").addEventListener("click", salirDeSala);

// =========================================================
// UNIRSE A UNA SALA
// =========================================================
$("formUnirse").addEventListener("submit", function (e) {
  e.preventDefault();
  sonar("clic");
  unirseASala($("inputCodigo").value);
});

function unirseASala(textoCodigo) {
  const codigo = textoCodigo.trim().toUpperCase();
  if (codigo.length !== LARGO_CODIGO) {
    mostrarEstadoSala(`El código tiene ${LARGO_CODIGO} letras o números.`, true);
    return;
  }
  if (!peerDisponible()) return;
  salirDeSala();
  soyAnfitrion = false;
  mostrarEstadoSala("Conectando…");

  peer = new Peer();

  peer.on("open", function () {
    prepararConexion(peer.connect(PREFIJO_SALA + codigo, { reliable: true }));
  });

  peer.on("error", function (err) {
    if (err.type === "peer-unavailable") {
      conexion = null; // Así el aviso de "red bloqueada" no tapa este mensaje
      mostrarEstadoSala("No existe una sala con ese código. Revisa que esté bien escrito.", true);
    } else {
      errorDeConexion(err);
    }
  });
}

const salaDelEnlace = new URLSearchParams(location.search).get("sala");
if (salaDelEnlace) {
  document.querySelector('.modo[data-modo="amigo"]').click();
  $("inputCodigo").value = salaDelEnlace.toUpperCase();
  history.replaceState(null, "", location.pathname); // Para no volver a unirse al recargar
  unirseASala(salaDelEnlace);
}

// =========================================================
// CONEXIÓN ENTRE LOS DOS JUGADORES
// =========================================================
function prepararConexion(nueva) {
  conexion = nueva;

  // Algunas redes bloquean la conexión directa: avisar si tarda demasiado
  const espera = setTimeout(function () {
    if (conexion === nueva && !nueva.open) {
      mostrarEstadoSala(
        "No se pudo conectar. Algunas redes (como el wifi de la escuela) bloquean la conexión directa; prueben con otra red.",
        true
      );
    }
  }, 15000);

  nueva.on("open", function () {
    clearTimeout(espera);
    modo = "amigo";
    sonar("carga-ki");
    mostrarEstadoSala("");
    mostrarJuego();
  });

  nueva.on("data", recibirMensaje);

  // Solo cuenta si se cierra la conexión actual (no una vieja que cerramos nosotros)
  nueva.on("close", () => {
    if (conexion === nueva) amigoDesconectado();
  });
  nueva.on("error", () => {
    if (conexion === nueva) amigoDesconectado();
  });
}

function enviar(mensaje) {
  if (conexion && conexion.open) conexion.send(mensaje);
}

function salirDeSala() {
  const anterior = conexion;
  conexion = null; // Primero, para que su evento "close" no avise de desconexión
  if (anterior) anterior.close();
  if (peer) peer.destroy();
  peer = null;
  $("salaInicio").classList.remove("oculto");
  $("salaCreada").classList.add("oculto");
  mostrarEstadoSala("");
}

function amigoDesconectado() {
  conexion = null;
  clearTimeout(temporizador);
  if (peer) peer.destroy();
  peer = null;

  if ($("juego").classList.contains("oculto")) {
    salirDeSala();
    mostrarEstadoSala("Tu amigo se desconectó.", true);
  } else {
    [modalPreguntas, modalCPU, $("respuesta")].forEach(cerrarModal);
    desactivarModoAdivinar();
    btnPreguntar.disabled = true;
    btnAdivinar.disabled = true;
    sonar("derrota");
    abrirModal(modalAviso);
  }
}

// =========================================================
// INICIO DE LA PARTIDA
// =========================================================
// Lo llama main.js cuando confirmas tu personaje
function avisarListo() {
  enviar({ tipo: "listo" });
  intentarEmpezar();
}

// Solo el anfitrión decide (al azar) quién empieza, cuando los dos están listos
function intentarEmpezar() {
  if (!soyAnfitrion || !rivalListo || fase !== "listo") return;
  const empiezoYo = Math.random() < 0.5;
  enviar({ tipo: "empezar", empiezaAnfitrion: empiezoYo });
  empezarPartida(empiezoYo);
}

// =========================================================
// MENSAJES QUE LLEGAN DEL AMIGO
// =========================================================
function recibirMensaje(mensaje) {
  switch (mensaje.tipo) {
    case "listo":
      rivalListo = true;
      intentarEmpezar();
      break;

    case "empezar":
      empezarPartida(!mensaje.empiezaAnfitrion);
      break;

    case "pregunta":
      contestarAlAmigo({ id: mensaje.id, texto: String(mensaje.texto).slice(0, 120) });
      break;

    case "respuesta":
      recibirRespuesta({ id: mensaje.id, texto: mensaje.texto }, mensaje.si);
      break;

    case "quedan":
      quedanRival = mensaje.cantidad;
      actualizarMarcadores();
      break;

    case "adivinar":
      amigoAdivina(buscarPersonaje(mensaje.intento), buscarPersonaje(mensaje.miPersonaje));
      break;

    case "resultado":
      resultadoDeMiIntento(mensaje.acierto, buscarPersonaje(mensaje.intento), buscarPersonaje(mensaje.suPersonaje));
      break;

    case "revancha":
      if (fase === "fin") {
        cerrarModal(modalFin);
        nuevaPartida();
      }
      break;
  }
}

// Se reutiliza la ventana de preguntas del CPU para que tú contestes Sí o No
function contestarAlAmigo(pregunta) {
  preguntaActualCPU = pregunta;
  $("etiquetaPregunta").textContent = "Tu amigo pregunta";
  $("preguntaCPU").textContent = pregunta.texto;
  $("pistaCPU").textContent = "";
  sonar("teletransporte");
  abrirModal(modalCPU);
}

function responderAlAmigo(si) {
  const pregunta = preguntaActualCPU;
  enviar({ tipo: "respuesta", id: pregunta.id, texto: pregunta.texto, si: si });

  preguntasRival++;
  agregarHistorial("rival", pregunta.texto, si);
  actualizarMarcadores();
  cerrarModal(modalCPU);
  sonar(si ? "si" : "no");
  cambiarTurno("jugador");
}

function amigoAdivina(intento, suPersonaje) {
  const acierto = intento.id === miPersonaje.id;
  // Al terminar ya se pueden revelar los dos personajes
  enviar({ tipo: "resultado", acierto: acierto, intento: intento.id, suPersonaje: miPersonaje.id });
  personajeRival = suPersonaje;

  if (acierto) {
    finPartida(false, `Tu amigo adivinó que tu personaje era ${miPersonaje.nombre}.`);
  } else {
    finPartida(true, `Tu amigo dijo ${intento.nombre} y falló.`);
  }
}

function resultadoDeMiIntento(acierto, intento, suPersonaje) {
  personajeRival = suPersonaje;

  if (acierto) {
    finPartida(true, `¡Adivinaste! Tu amigo tenía a ${suPersonaje.nombre}.`);
  } else {
    finPartida(false, `No era ${intento.nombre}. Tu amigo tenía a ${suPersonaje.nombre}.`);
  }
}
