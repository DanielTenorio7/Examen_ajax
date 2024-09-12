<?php
include 'database.php';

// Recoger los datos del formulario
$name = $_POST['username'];
$email = $_POST['email'];
$pwd = $_POST['password'];

// Preparar la consulta SQL con placeholders
$sql = "INSERT INTO admin (username, email, password) VALUES (?, ?, ?)";

// Preparar el statement
$stmt = $conn->prepare($sql);

if ($stmt) {
    // Asociar los parámetros a los placeholders
    $stmt->bind_param("sss", $name, $email, $pwd); // 'sss' indica tres strings
    
    // Ejecutar la consulta
    if ($stmt->execute()) {
        echo "Nuevo registro creado exitosamente";
    } else {
        echo "Error al insertar los datos: " . $stmt->error;
    }
    
    // Cerrar el statement
    $stmt->close();
} else {
    echo "Error en la preparación de la consulta: " . $conn->error;
}

// Cerrar la conexión
$conn->close();
?>
