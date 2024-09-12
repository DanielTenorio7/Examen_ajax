// Obtener elementos del DOM
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];
var btn2= document.getElementsByClassName("editUser");

// Abrir el modal cuando se hace clic en el botón
btn.onclick = function() {
    modal.style.display = "block";
}


// Cerrar el modal cuando se hace clic en el botón de cerrar (x)
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de la ventana
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


$(document).on('click', '.editUser', function() {
    const id = $(this).data('id') || '';
    const name = $(this).data('name') || '';
    const email = $(this).data('email') || '';
    const telefono = $(this).data('telefono') || '';
    const rol = $(this).data('rol') || '';
    const salario = $(this).data('salario') || '';

    // Abrir el modal
    modal.style.display = "block";

    // Rellenar los campos del formulario con los datos del usuario a editar
    $('#userId').val(id);
    $('#name').val(name);
    $('#email').val(email);
    $('#telefono').val(telefono);
    $('#rol').val(rol);
    $('#salario').val(salario);
});
