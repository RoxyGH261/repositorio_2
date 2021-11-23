var preguntas1 =[
    "¿Se necesitan 4 rasgos para pertenecer a Hufflepuff",
	"¿ya te debes haber cansado de esta pregunta pero Hufflepuff q elemento representa",
	"para ingresar a su sala comun debes.....",
	"Quienes estudiaron en Hufflepuff",];
    var opciones = [
        ["Curiosidad,caracter,valentia y carisma",
		"El trabajo duro, la paciencia, la amistad y la honestidad ",
		"valentia,astucia,conocimientos y la bondad"],
		["agua",
		"tierra",
		"fuego"],
		["rodar barriles",
		"tocar barriles",
		"empujar barriles"],
		["seamus finnigan",
		"andromeda tonks",
		"zabini blaise"]
		]
        var puntajePorOpcion = [
            [ 0, 9, 1],
            [ 0, 9, 1],
            [ 0, 9, 1],
            [ 0, 9, 1]
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
        estiloVida = "<span id='estilo-excelente'>eres un hufflepuf</span>";
    } else if (puntaje>13 ) {
        estiloVida = "<span id='estilo-bueno'>sabes un poco de hufflepuf </span>";
    }
    else{estiloVida= "<span id='estilo-bueno'> no sabes nada de nada </span>"}
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
    document.getElementById("op1").innerHTML = opciones[i][0];
    document.getElementById("op2").innerHTML = opciones[i][1];
    document.getElementById("op3").innerHTML = opciones[i][2];
    document.getElementById("barra-progreso").value = i * 100 / preguntas1.length;
    i++;
}

siguientePregunta(); { // Muestra la primera pregunta
document.getElementById("op1").addEventListener("click", function () {
    actualizarPuntaje(1);
});
document.getElementById("op2").addEventListener("click", function () {
    actualizarPuntaje(2);
});
document.getElementById("op3").addEventListener("click", function () {
    actualizarPuntaje(3);})
document.getElementById("op4").addEventListener("click", function () {
    actualizarPuntaje(4);})}

   