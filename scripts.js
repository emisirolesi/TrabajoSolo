document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener valores de usuario y contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validar usuario y contraseña
  if (username === 'usuario' && password === 'contraseña') {
    alert('Inicio de sesión exitoso');
    // redidirigir a otra pagina?
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
