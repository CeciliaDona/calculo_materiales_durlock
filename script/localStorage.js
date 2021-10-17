
/* LocalStorage: capturé los datos de la sección "contacto.html" mediante el evento onclick y guardo esos datos ingresados por el usuario en el localStorage*/

function enviar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let telefono = document.getElementById("tel").value;
    let mail = document.getElementById("mail").value;

    localStorage.setItem("nombreLS", nombre);
    localStorage.setItem("apellidoLS", apellido);
    localStorage.setItem("telefonoLS", telefono);
    localStorage.setItem("mailLS", mail);
}








