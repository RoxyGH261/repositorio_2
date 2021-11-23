var preguntas1 =[
    "encontraron a un detective muerto en su oficina los sopechosos eran : jonas,erika,sofia y nicolas.Antes de morir el detective subrayo en el calendario los numeros 7;10;11;8;9 ¿Quien lo asesino?",
    "¿Lo del escudo al final que ave es?",
    "Teníamos un poderoso tesoro perdido, ahora está roto. ¿cual es?",
    "Aquí todo es como muy azul ¿Sabes? por ello nuestro elemento es",
    ];
    var opciones = [
        ["erika",
        "sofia",
        "jonas",
        "nicolas"],
        ["aguila",
        "cuervo",
        "perico",
        "condor"],
        ["la corona",
        "el brasalete",
        "el collar","la diadema"],
        ["tierra",
        "aire",
        "agua","fuego"]
        ]
        var puntajePorOpcion = [
            [ 1, 7, 2, 0],
            [ 1, 1, 7, 1],
            [ 7, 1, 1, 1],
            [ 1, 1, 1, 7],
            [ 0, 7, 2, 1]
        ]
        // Acá se define el despliegue de las preguntas y se almacenan los puntajes
var puntaje = 0;
var i = 0;

// Despliegue de los resultado1
function mostrarResultado() {
    // Se remueven los hijos del div con clase "card", dentro de él agregaremos los resultados
    var div = document.getElementsByClassName("card.1")[0];
    div.innerHTML = "";

    // Se actualiza la barra de progreso
    document.getElementById("barra-progreso").value = i * 100 / (preguntas1.length - 1);

    // Agregamos los elementos correspondientes a los resultados
    div.innerHTML += "<h3 class='resultado_titulo'>Resultados</h3>";

    // Determinamos estilo de vida (max = 35)
    if (puntaje > 18) {
        estiloVida = "<span id='estilo-excelente'>eres un ravenclaw</span>";
    } else if (puntaje>13 ) {
        estiloVida = "<span id='estilo-bueno'>sabes un poco de ravenclaw </span>";
    }
    else{estiloVida= "<span id='estilo-bueno'> nada de nada </span>"}
        div.innerHTML += `<p class='resultado_obtenido'>Has obtenido ${puntaje} puntos, lo cual significa que tu eres ${estiloVida}.</p>`;
    } 



function actualizarPuntaje(opcion) {
    var indice = opcion - 1;
    
    if (i < preguntas1.length) {
        puntaje += puntajePorOpcion[i][indice];
        siguientePregunta();
    } else {
        mostrarResultado();
    }
}

function siguientePregunta() {
    document.getElementById("preguntas1").innerHTML = preguntas1[i];
    document.getElementById("op1.1").innerHTML = opciones[i][0];
    document.getElementById("op2.1").innerHTML = opciones[i][1];
    document.getElementById("op3.1").innerHTML = opciones[i][2];
    document.getElementById("op4.1").innerHTML = opciones[i][3];
    document.getElementById("barra-progreso").value = i * 100 / preguntas1.length;
    i++;
}

siguientePregunta(); { // Muestra la primera pregunta
document.getElementById("op1.1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2.1").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3.1").addEventListener("click", function () {
    actualizarPuntaje(3);})
document.getElementById("op4.1").addEventListener("click", function () {
    actualizarPuntaje(4);})}