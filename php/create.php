<?php
include 'database.php';

$name = $_POST['name'];
$email = $_POST['email'];
$telefono = $_POST['telefono'];
$rol = $_POST['rol'];
$salario = $_POST['salario'];

$sql = "INSERT INTO users (name,email,tel,rol,salario) VALUES ('$name', '$email','$telefono','$rol','$salario')";
if ($conn->query($sql) === TRUE) {
    echo "Nuevo registro creado exitosamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
