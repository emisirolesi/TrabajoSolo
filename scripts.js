document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  // Obtener valores de usuario y contraseña
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Validar usuario y contraseña (solo un ejemplo básico)
  if (username === 'usuario' && password === 'contraseña') {
    alert('Inicio de sesión exitoso');
    // Aquí puedes redirigir a otra página
  } else {
    alert('Usuario o contraseña incorrectos');
  }
});
