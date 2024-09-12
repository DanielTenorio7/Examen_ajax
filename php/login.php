<?php
include 'database.php';
session_start();

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Obtenemos los datos enviados por AJAX
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Preparamos la consulta para verificar el correo
    $sql = "SELECT * FROM admin WHERE email = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $email); // Vinculamos el parámetro
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Si encontramos un usuario con ese correo
        $user = $result->fetch_assoc();

        // Verificamos si la contraseña es correcta
        if ($password === $user['password']) {
            // Iniciamos la sesión si las credenciales son correctas
            
            $_SESSION['user_id'] = $user['id'];

            // Enviamos la respuesta de éxito
            echo 'success';
        } else {
            // Si la contraseña es incorrecta
            echo 'Contraseña incorrecta';
        }
    } else {
        // Si no se encuentra un usuario con ese correo
        echo 'El correo no está registrado';
    }

    $stmt->close();
}

$conn->close();
?>
