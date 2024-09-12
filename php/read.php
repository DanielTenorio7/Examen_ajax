<?php
include 'database.php';

$sql = "SELECT * FROM users ORDER BY id DESC";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $telefono = !empty($row['tel']) ? $row['tel'] : ''; // Si 'tel' está vacío, usa una cadena vacía
        $rol = !empty($row['rol']) ? $row['rol'] : '';       // Si 'rol' está vacío, usa una cadena vacía
        $salario = !empty($row['salario']) ? $row['salario'] : '';
        $name = !empty($row['name']) ? $row['name'] : '';
        $email = !empty($row['email']) ? $row['email'] : '';
        
        
        echo "<tr>
            
            <td>{$row['id']}</td>
            <td>{$row['name']}</td>
            <td>{$row['email']}</td>
            <td>{$row['tel']}</td>
            <td>{$row['rol']}</td>
            <td>{$row['created_at']}</td>
            <td>{$row['salario']}</td>

            <td class='botones'>
                <button class='editUser' data-id='{$row['id']}' data-name='{$row['name']}' data-email='{$row['email']}' data-telefono='{$row['tel']} 'data-rol='{$row['rol']} 'data-salario='{$row['salario']}'></button>
                <button class='deleteUser' data-id='{$row['id']}'></button>
            </td>
        </tr>";
    }
} else {
    echo "<tr><td colspan='8'>No hay usuarios</td></tr>";
}

$conn->close();
?>
