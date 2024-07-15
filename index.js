const copiarEmail = document.querySelector('[data-copiar]');
const enviarEmail = document.querySelector('[data-enviar]');
const emailElement = document.getElementById('email');

//copiar
copiarEmail.addEventListener('click', () => {
  const email = emailElement.textContent;
 
  navigator.clipboard.writeText(email)
  .then(() => {
    //console.log('Texto del portapapeles:', email);
    alert('Se ha copiado exitosamente en el portapapeles');
  })
  .catch(err => {
    //console.error('Error al leer del portapapeles:', err)
  })

})

//enviar
enviarEmail.addEventListener('click', () => {

})