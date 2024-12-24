// Función para mostrar el mensaje al hacer clic en las estrellas
function showMessage(message) {
    var messageContainer = document.querySelector('.message-container');
    var messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageContainer.style.display = 'block';

    // Desaparecer el mensaje después de 5 segundos
    setTimeout(function() {
        messageContainer.style.display = 'none';
    }, 3000);  // 5000ms = 5 segundos
}

// Función para abrir el modal cuando se hace clic en la luna
function openModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "block";
}

// Función para cerrar el modal
function closeModal() {
    var modal = document.getElementById('modal');
    modal.style.display = "none";
}

// Cerrar el modal cuando se hace clic fuera del contenido del modal
window.onclick = function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.style.display = "none";
    }
}



const textElement = document.getElementById('typed-text');
const phrases = [
  'Kiara y Jhosep 💖 Juntos x siempre y para siempre 💖',
  'TE AMO MI PRINCESA 💖'
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentPhrase = phrases[phraseIndex];
  
  if (!isDeleting) {
    textElement.innerText = currentPhrase.slice(0, charIndex++);
    if (charIndex > currentPhrase.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // Pausa antes de empezar a borrar
    } else {
      setTimeout(typeEffect, 150); // Velocidad de escritura
    }
  } else {
    textElement.innerText = currentPhrase.slice(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Cambiar a la siguiente frase
      setTimeout(typeEffect, 500); // Pausa antes de escribir de nuevo
    } else {
      setTimeout(typeEffect, 100); // Velocidad de borrado
    }
  }
}

// Iniciar el efecto de escritura
typeEffect();


