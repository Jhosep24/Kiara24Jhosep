// read custom message from query strings
// Tutorial -> https://youtu.be/6ojp1iWUKw8

const urlSearchParams = new URLSearchParams(window.location.search)

const messageCustom = urlSearchParams.get('message')

if (messageCustom) {

  const mainMessageElement = document.querySelector('#mainMessage')
  mainMessageElement.textContent = decodeURI(messageCustom)
}

// the tutorial starts here

const btnOpenElement = document.querySelector('#open')
const btnCloseElement = document.querySelector('#close')

btnCloseElement.disabled = true



btnOpenElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = true
  btnCloseElement.disabled = false
  const coverElement = document.querySelector('.cover')
  coverElement.classList.add('open-cover')

  setTimeout(()=>{
    //
    coverElement.style.zIndex = -1
    
    const paperElement = document.querySelector('.paper')
    paperElement.classList.remove('close-paper')
    paperElement.classList.add('open-paper')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'block'
  
  }, 500)

})
btnCloseElement.addEventListener('click', ()=> {
  btnOpenElement.disabled = false
  btnCloseElement.disabled = true

  const coverElement = document.querySelector('.cover')
  const paperElement = document.querySelector('.paper')
  paperElement.classList.remove('open-paper')
  paperElement.classList.add('close-paper')
  
  setTimeout(()=>{
    coverElement.style.zIndex = 0
    coverElement.classList.remove('open-cover')

    // animacion del corazón
    const heartElement = document.querySelector('.heart')
    heartElement.style.display = 'none'
  },500)
})

//volver menu
function volverAlHome() {
  window.location.href = 'home.html'; // Cambia 'index.html' al nombre de tu archivo principal
}

//musica
// Función para detener la música
// Agregar funcionalidad al botón
// Obtener el botón y el audio
const audioButton = document.getElementById('audio-button');
const audio = document.getElementById('audio');

// Establecer la música para que empiece desde el segundo 10
audio.currentTime = 10;

// Cambiar texto y funcionalidad del botón
audioButton.addEventListener('click', function() {
  if (audio.paused) {
    audio.play(); // Reproducir música
    audioButton.innerHTML = '<span>🎶 Pausar música</span>';
  } else {
    audio.pause(); // Pausar música
    audioButton.innerHTML = '<span>🎶 Reproducir música</span>';
  }
});

  

