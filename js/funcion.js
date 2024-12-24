document.addEventListener("DOMContentLoaded", () => {
    const phrases = document.querySelectorAll('.phrase');
    let index = 0;

    const showPhrase = () => {
        if (index < phrases.length) {
            phrases[index].style.display = 'block';
            index++;
            setTimeout(showPhrase, 3000); // Muestra cada frase después de 3 segundos
        }
    };

    showPhrase();
});


// Fecha de inicio: 24 de noviembre
const fechaInicio = new Date('2024-11-24');

// Función para calcular los días transcurridos desde la fecha de inicio
function calcularDias() {
    const fechaHoy = new Date();
    const diferencia = fechaHoy - fechaInicio; // Diferencia en milisegundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24)); // Convertir milisegundos a días
    document.getElementById("daysCount").textContent = dias;
}

// Llamar a la función al cargar la página
calcularDias();
// Obtener elementos
// Obtener elementos
const playBtn = document.getElementById("play-btn");
const audio = document.getElementById("music-background");

// Al hacer clic en el botón
playBtn.addEventListener("click", () => {
    // Si el audio está pausado, configuramos el inicio en el segundo 10
    if (audio.paused) {
        audio.currentTime = 15;  // Saltamos los primeros 10 segundos
        audio.play();  // Reproducir la música
        playBtn.textContent = "❌ Pausar Música";  // Cambiar el texto del botón
    } else {
        audio.pause();  // Pausar la música
        playBtn.textContent = "🎶 Reproducir Música";  // Volver al texto original
    }
});

