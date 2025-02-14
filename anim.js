// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");



// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Me gusta que sepas donde estoy", time: 18 },
  { text: "no por obligacion", time: 19},
  { text: "sino por que tienes derecho a saber ", time: 27 },
  { text: "a donde te llevo", time: 32 },
  { text: "cuando no te llevo de la mano.", time: 33 },
  { text: "Siempre te quiero ", time: 41 },
  { text: "Aunque el silencio se adueñe de mis palabras", time: 47 },
  { text: "Repito , siempre te quiero", time: 54 },
  { text: "Como aquella constante", time: 59 },
  { text: "que nunca cambia , aunque el entorno cambie.", time: 67 },
  { text: "Mi amor por ti , mi mas profundo ser", time: 72 },
  { text: "Aunque el tiempo se encargue de borrar", time: 78 },
  { text: "Los rostros y voces que fueron nuestra verdad.", time: 83 },
  { text: "", time: 91 },
  { text: "Te llevare siempre en cada rincon de mi memoria", time: 97 },
  { text: "En los susurros del viento", time: 104 },
  { text: "Y los silencios que inundan el alma", time: 108 },
  { text: "At the time", time: 144 },
  { text: "The whisper of birds", time: 148 },
  { text: "Lonely before the sun cried", time: 153 },
  { text: "Fell from the sky", time: 158 },
  { text: "Like water drops", time: 164 },
  { text: "Where I'm now? I don't know why", time: 169 },
  { text: "Nice butterflies in my hands", time: 176 },
  { text: "Too much light for twilight", time: 183 },
  { text: "In the mood for the flowers", time: 188 },
  { text: "Love.", time: 140 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.01; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
  
}

setInterval(updateLyrics, 1);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 0); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 15000);

