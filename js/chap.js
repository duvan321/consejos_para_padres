// JavaScript para mostrar la alerta cuando se envíe el formulario
document.addEventListener('DOMContentLoaded', function() {
  var form = document.querySelector('#myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    // Obtén los valores de los campos del formulario
    var name = form.elements['name'].value;
    var email = form.elements['email'].value;
    var message = form.elements['message'].value;
    
    // Muestra la alerta con los datos del formulario
    alert('Gracias por enviar el formulario:\n\nNombre: ' + name + '\nCorreo electrónico: ' + email + '\nMensaje: ' + message);
    
    // Limpia los campos del formulario
    form.reset();
  });
});
function toggleMenu() {
  let menuLinks = document.querySelector('.menu-links');
  menuLinks.style.display = (menuLinks.style.display === 'none') ? 'block' : 'none';
}
