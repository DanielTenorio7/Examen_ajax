console.log("¡Este es un mensaje desde script.js!");

$(document).ready(function() {
    fetchUsers();
    
    $('#create').on('click', function(e) {
    if ($('#userForm')[0].checkValidity()) {
        e.preventDefault();
        const name = $('#name').val();
        const email = $('#email').val();
        const telefono = $('#telefono').val();
        const rol = $('#rol').val();
        const salario = $('#salario').val();
        

        $.ajax({
            url: 'php/create.php',
            type: 'POST',
            data: { name, email, telefono, rol, salario },
            success: function(response) {
                $('#userForm')[0].reset();
                fetchUsers();
                alert("Usuario creado exitosamente.");
            },
            error: function(xhr, status, error) {
                console.error("Error al crear usuario:", status, error);
                alert("Error al crear usuario.");
            }
        });
    }
    });

// Guardar cambios (Actualizar usuario)
    $('#save').on('click', function(e) {
        if ($('#userForm')[0].checkValidity()) {
        e.preventDefault();
        const id = $('#userId').val();
        const name = $('#name').val();
        const email = $('#email').val();
        const telefono = $('#telefono').val();
        const rol = $('#rol').val();
        const salario = $('#salario').val();

        $.ajax({
            url: 'php/update.php',
            type: 'POST',
            data: { id, name, email ,telefono,rol,salario},
            success: function(response) {
                $('#userForm')[0].reset();
                fetchUsers();
                //alert("Usuario actualizado exitosamente prueba.");
            },
            error: function(xhr, status, error) {
                console.error("Error al actualizar usuario:", status, error);
                alert("Error al actualizar usuario.");
            }
        });
    }
    });

    // Leer usuarios
    function fetchUsers() {
        $.ajax({
            url: 'php/read.php',
            type: 'GET',
            success: function(response) {
                $('#userTable tbody').html(response);
            }
        });
    }

    // Editar usuario
    $(document).on('click', '.editUser', function() {
        const id = $(this).data('id');
        const name = $(this).data('name');
        const email = $(this).data('email');
        const telefono = $(this).data('telefono');
        const rol = $(this).data('rol');
        const salario = $(this).data('salario');
    

        $('#userId').val(id);
        $('#name').val(name);
        $('#email').val(email);
        $('#telefono').val(telefono);
        $('#rol').val(rol);
        $('#salario').val(salario);
    });

    // Eliminar usuario
    $(document).on('click', '.deleteUser', function() {
        const id = $(this).data('id');

        $.ajax({
            url: 'php/delete.php',
            type: 'POST',
            data: { id },
            success: function(response) {
                fetchUsers();
            }
        });
    });
}); 