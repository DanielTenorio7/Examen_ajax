$(document).ready(function() {
    $('#create').on('click', function(e) {
        e.preventDefault();

        // Capturar los valores del formulario
        const username = $('input[name="username"]').val();
        const email = $('input[name="email"]').val();
        const password = $('input[name="password"]').val();
        const confirmPassword = $('input[name="confirm_password"]').val();  // Capturar el campo de confirmación de contraseña

        // Validar que no estén vacíos los campos
        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert("Por favor, rellena todos los campos.");
            return;
        }

        // Validar que las contraseñas coincidan
        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
            return;
        }

        // Enviar datos mediante AJAX si las contraseñas coinciden
        $.ajax({
            url: 'php/register.php',  // Asegúrate de que esta ruta sea correcta
            type: 'POST',
            data: { 
                username: username, 
                email: email, 
                password: password 
            },
            success: function(response) {
                // Limpiar los campos después de la inserción exitosa
                $('input[name="username"]').val('');
                $('input[name="email"]').val('');
                $('input[name="password"]').val('');
                $('input[name="confirm_password"]').val('');

                alert("Usuario registrado exitosamente.");
            },
            error: function(xhr, status, error) {
                console.error("Error al crear usuario:", status, error);
                alert("Error al crear usuario.");
            }
        });
    });
});


// Capturamos el evento de envío del formulario
$("#loginForm").submit(function(e) {
    e.preventDefault(); // Evita que el formulario se envíe de la manera tradicional

    // Obtenemos los valores del formulario
    var email = $("#email").val();
    var password = $("#password").val();

    // Enviamos los datos por AJAX al archivo PHP
    $.ajax({
        url: 'php/login.php', // Archivo PHP que maneja la verificación
        type: 'POST',
        data: {
            email: email,
            password: password
        },
        success: function(response) {
            // Manejamos la respuesta del servidor
            console.log("Respuesta del servidor: ", response);
            var trimmedResponse = $.trim(response); // Elimina espacios en blanco extra
            if(trimmedResponse === 'success') {
                // Redirigimos al dashboard si el login es exitoso
                window.location.href = "http://localhost/Examen_ajax/lista.html";
            } else {
                // Mostramos el mensaje de error en caso de fallo
                alert(trimmedResponse);
            }
        },
        error: function(xhr, status, error) {
            console.error("Error al iniciar sesión:", status, error);
            alert("Hubo un error al intentar iniciar sesión.");
        }
    });
});
