"""Genera los efectos de sonido del juego en la carpeta sonidos/.

Los sonidos se crean desde cero con matemáticas (ondas, ruido y envolventes),
así que son propios y no dependen de ninguna página externa.
Solo usa la biblioteca estándar de Python:

    python3 herramientas/generar_sonidos.py
"""

import math
import random
import struct
import wave
from pathlib import Path

FRECUENCIA = 22050
CARPETA = Path(__file__).resolve().parent.parent / "sonidos"
random.seed(7)


# =========================================================
# BLOQUES BÁSICOS
# =========================================================
def muestras(duracion):
    return int(duracion * FRECUENCIA)


def barrido(f_inicio, f_fin, duracion, forma="seno", curva=1.0):
    # curva > 1: el cambio de tono se acelera al final
    n = muestras(duracion)
    fase = 0.0
    salida = []
    for i in range(n):
        avance = (i / n) ** curva
        f = f_inicio + (f_fin - f_inicio) * avance
        fase += 2 * math.pi * f / FRECUENCIA
        if forma == "seno":
            salida.append(math.sin(fase))
        elif forma == "cuadrada":
            salida.append(1.0 if math.sin(fase) >= 0 else -1.0)
        elif forma == "sierra":
            salida.append(2 * ((fase / (2 * math.pi)) % 1) - 1)
    return salida


def tono(f, duracion, forma="seno"):
    return barrido(f, f, duracion, forma)


def ruido(duracion):
    return [random.uniform(-1, 1) for _ in range(muestras(duracion))]


def paso_bajo(senal, corte_inicio, corte_fin=None):
    corte_fin = corte_inicio if corte_fin is None else corte_fin
    salida, anterior = [], 0.0
    for i, x in enumerate(senal):
        corte = corte_inicio + (corte_fin - corte_inicio) * i / max(1, len(senal))
        a = 1 - math.exp(-2 * math.pi * corte / FRECUENCIA)
        anterior += a * (x - anterior)
        salida.append(anterior)
    return salida


def envolvente(senal, ataque=0.005, caida=None, sostener=1.0):
    n = len(senal)
    a = max(1, muestras(ataque))
    c = n - a if caida is None else max(1, muestras(caida))
    salida = []
    for i, x in enumerate(senal):
        if i < a:
            v = i / a
        elif i >= n - c:
            v = sostener * ((n - i) / c) ** 2
        else:
            v = sostener
        salida.append(x * v)
    return salida


def temblor(senal, velocidad, profundidad):
    if isinstance(velocidad, (int, float)):
        velocidad = (velocidad, velocidad)
    salida, fase = [], 0.0
    for i, x in enumerate(senal):
        v = velocidad[0] + (velocidad[1] - velocidad[0]) * i / len(senal)
        fase += 2 * math.pi * v / FRECUENCIA
        salida.append(x * (1 - profundidad * (0.5 + 0.5 * math.sin(fase))))
    return salida


def mezclar(*pistas):
    largo = max(muestras(inicio) + len(senal) for senal, _, inicio in pistas)
    salida = [0.0] * largo
    for senal, volumen, inicio in pistas:
        desplazamiento = muestras(inicio)
        for i, x in enumerate(senal):
            salida[desplazamiento + i] += x * volumen
    return salida


def silencio(duracion):
    return [0.0] * muestras(duracion)


def guardar(nombre, senal, volumen=0.8):
    pico = max(abs(x) for x in senal) or 1
    final = muestras(0.01)  # Desvanecer el final evita un "clic" al terminar
    for i in range(final):
        senal[-1 - i] *= i / final
    datos = b"".join(struct.pack("<h", int(x / pico * volumen * 32767)) for x in senal)
    with wave.open(str(CARPETA / f"{nombre}.wav"), "wb") as archivo:
        archivo.setnchannels(1)
        archivo.setsampwidth(2)
        archivo.setframerate(FRECUENCIA)
        archivo.writeframes(datos)
    print(f"  {nombre}.wav  ({len(senal) / FRECUENCIA:.2f} s)")


# =========================================================
# EFECTOS DEL JUEGO
# =========================================================
def clic():
    pitido = lambda f, d: envolvente(mezclar((tono(f, d), 0.7, 0), (tono(f * 2, d), 0.2, 0)), caida=d * 0.8)
    return mezclar((pitido(1900, 0.05), 1, 0), (pitido(2500, 0.05), 0.8, 0.065))


def seleccion():
    pitido = lambda f: envolvente(tono(f, 0.045, "cuadrada"), caida=0.03)
    pitidos = [(paso_bajo(pitido(f), 3500), 0.5, k * 0.06) for k, f in enumerate((1100, 1500, 2000))]
    return mezclar(*pitidos)


def tachar():
    aire = paso_bajo(ruido(0.22), 4500, 500)
    return envolvente(aire, ataque=0.06, caida=0.14)


def golpe():
    cuerpo = envolvente(barrido(160, 45, 0.22, curva=0.5), ataque=0.002, caida=0.2)
    chasquido = envolvente(paso_bajo(ruido(0.03), 3000), ataque=0.001, caida=0.025)
    return mezclar((cuerpo, 1, 0), (chasquido, 0.6, 0))


def teletransporte():
    subida = envolvente(barrido(250, 2600, 0.13, curva=2), ataque=0.01, caida=0.05)
    destello = envolvente(
        mezclar((tono(3100, 0.25), 0.5, 0), (tono(4150, 0.25), 0.3, 0)),
        ataque=0.002, caida=0.24,
    )
    return mezclar((subida, 0.8, 0), (temblor(destello, 28, 0.6), 0.35, 0.1))


def carga_ki():
    d = 1.3
    zumbido = paso_bajo(barrido(90, 230, d, "sierra", curva=1.5), 1200, 3500)
    zumbido = temblor(zumbido, (18, 55), 0.7)
    energia = temblor(barrido(200, 950, d, curva=1.6), (25, 60), 0.5)
    viento = paso_bajo(ruido(d), 800, 5000)
    carga = envolvente(mezclar((zumbido, 0.6, 0), (energia, 0.3, 0), (viento, 0.25, 0)), ataque=0.9, caida=0.05)
    estallido = envolvente(paso_bajo(ruido(0.35), 2500, 300), ataque=0.003, caida=0.33)
    return mezclar((carga, 1, 0), (estallido, 0.45, d - 0.03), (golpe(), 0.35, d - 0.03))


def si():
    nota = lambda f, d: envolvente(mezclar((tono(f, d), 0.7, 0), (tono(f * 2, d), 0.15, 0)), ataque=0.004, caida=d * 0.9)
    return mezclar((nota(784, 0.18), 0.8, 0), (nota(1175, 0.4), 0.9, 0.11))


def no():
    nota = lambda f, d: envolvente(paso_bajo(tono(f, d, "cuadrada"), 900), ataque=0.005, caida=d * 0.6)
    return mezclar((nota(233, 0.16), 0.7, 0), (nota(175, 0.36), 0.8, 0.15))


def rafaga():
    disparo = envolvente(temblor(barrido(1400, 180, 0.45, "sierra", curva=0.6), 40, 0.5), ataque=0.004, caida=0.35)
    disparo = paso_bajo(disparo, 4000, 900)
    viento = envolvente(paso_bajo(ruido(0.5), 5000, 600), ataque=0.004, caida=0.45)
    return mezclar((disparo, 0.7, 0), (viento, 0.5, 0))


def victoria():
    def nota(f, d):
        cuerpo = mezclar((tono(f, d, "cuadrada"), 0.35, 0), (tono(f, d), 0.6, 0), (tono(f * 2, d), 0.15, 0))
        return envolvente(paso_bajo(cuerpo, 3200), ataque=0.006, caida=d * 0.5)

    notas = [(523, 0.13), (659, 0.13), (784, 0.13), (1047, 0.13)]
    pistas = [(nota(f, d + 0.05), 0.8, k * 0.12) for k, (f, d) in enumerate(notas)]
    final = envolvente(temblor(nota(1047, 0.9), 6, 0.25), ataque=0.01, caida=0.7)
    acorde = envolvente(mezclar((tono(523, 0.9), 0.4, 0), (tono(784, 0.9), 0.3, 0)), ataque=0.02, caida=0.7)
    brillo = envolvente(temblor(tono(3136, 0.8), 22, 0.7), ataque=0.05, caida=0.7)
    return mezclar(*pistas, (final, 0.8, 0.5), (acorde, 0.5, 0.5), (brillo, 0.12, 0.5))


def derrota():
    caida = envolvente(temblor(barrido(520, 90, 1.1, "sierra", curva=0.7), (9, 3), 0.5), ataque=0.01, caida=0.5)
    caida = paso_bajo(caida, 2500, 400)
    estruendo = envolvente(paso_bajo(ruido(1.0), 400, 120), ataque=0.05, caida=0.8)
    return mezclar((caida, 0.8, 0), (estruendo, 0.9, 0.15))


EFECTOS = {
    "clic": clic,
    "seleccion": seleccion,
    "tachar": tachar,
    "golpe": golpe,
    "teletransporte": teletransporte,
    "carga-ki": carga_ki,
    "si": si,
    "no": (no, 0.5),
    "rafaga": rafaga,
    "victoria": (victoria, 0.7),
    "derrota": derrota,
}

if __name__ == "__main__":
    CARPETA.mkdir(exist_ok=True)
    print(f"Generando sonidos en {CARPETA}:")
    for nombre, efecto in EFECTOS.items():
        crear, volumen = efecto if isinstance(efecto, tuple) else (efecto, 0.8)
        guardar(nombre, crear(), volumen)
