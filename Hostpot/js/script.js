document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Proceso de autenticación (aquí puedes integrar un backend si es necesario)
        window.location.href = 'status.html'; // Redirige a la página de estado
    } else {
        document.getElementById('error-message').innerText = 'Por favor ingresa tus credenciales.';
    }
});
