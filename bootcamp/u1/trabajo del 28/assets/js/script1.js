function datos() {
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var email = document.getElementById("email").value;
    var fechaNacimiento = document.getElementById("fecha-nacimiento").value;
    var mensaje = "Nombres; " + nombres
    var info = document.getElementById("info").value;
    +"\nApellidos: "  + apellidos
    +"\nCorreo electrónico: " + email
    +"\nFecha de nacimiento: " + fechaNacimiento
    +"\ninfo:"+info

    console.log(mensaje);
}


