<?php
include 'database.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $id = $_POST['id'];
    $name = $_POST['name'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $rol = $_POST['rol'];
    $salario = $_POST['salario'];

    if (!empty($id) && !empty($name) && !empty($email) && !empty($telefono) && !empty($rol) && !empty($salario)) {
        // Preparar la consulta SQL para actualizar el usuario
        $sql = "UPDATE users SET name=?, email=?, tel=?, rol=?, salario=? WHERE id=?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("ssssdi", $name, $email, $telefono, $rol, $salario, $id);

        // Ejecutar la consulta y verificar el resultado
        if ($stmt->execute()) {
            echo "Usuario actualizado exitosamente.";
        } else {
            echo "Error al actualizar el usuario: " . $stmt->error;
        }

        // Cerrar la declaración
        $stmt->close();
    } else {
        echo "Todos los campos son obligatorios.";
    }
} else {
    echo "Método de solicitud no válido.";
}
