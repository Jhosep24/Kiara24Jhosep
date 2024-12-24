document.addEventListener("DOMContentLoaded", () => {
    // Agregar animación de escritura a las frases
    const phrases = document.querySelectorAll(".phrase");
    let currentPhraseIndex = 0;

    function showNextPhrase() {
        if (currentPhraseIndex < phrases.length) {
            phrases[currentPhraseIndex].style.opacity = 1;
            currentPhraseIndex++;
            setTimeout(showNextPhrase, 4000); // Mostrar la siguiente frase después de 4 segundos
        }
    }

    showNextPhrase();
});


const texto = "Te amo, mi princesa Kiara 💖";
let index = 0;
let borrar = false;
let esperando = false; // Control para esperar antes de borrar

function escribirYBorrar() {
    const elemento = document.getElementById("maquina-escribir");

    if (borrar) {
        // Borrar el texto
        elemento.textContent = texto.substring(0, index);
        index--;
        if (index < 0) {
            borrar = false;  // Cambiar a escribir cuando se termine de borrar
            esperando = false; // Ya no está esperando, se puede escribir de nuevo
        }
    } else {
        // Escribir el texto
        elemento.textContent = texto.substring(0, index);
        index++;
        if (index > texto.length) {
            // Esperar 3 segundos antes de borrar
            if (!esperando) {
                esperando = true;
                setTimeout(() => {
                    borrar = true; // Comienza a borrar después de 3 segundos
                }, 3000); // 3000ms = 3 segundos
            }
        }
    }
}

// Escribir y borrar continuamente
setInterval(escribirYBorrar, 100); // Cada 100ms (puedes ajustar la velocidad)
