var lenguaje = "Python"
var ciudad = "Lima";
var mansaje = "¡Bienvenidos a la mi sitio web!"

const single = 'comillas simples';
const double = `backticks`; // comillas invertidas

//**Selecionar una letra de los strings */
var animal = "gato";
console.log(animal.charAt(2))
console.log(animal[1])

/**Comillas o tildes invertidas */
const saludo = "Mundo" ;
console.assert(`Hola ${saludo}` === 'Hola Mundo');
//**Caracteres especiales
var frase1 =  `Hola:
                amiga 1`;
alert(frase1);
//el \n genera un salto de linea
var frase2 =  `Hola:\namiga 2`;
alert(frase2);
var letras = "abcd";
var cant_let = letras.length;
alert(cant_let);
var ultimo = letras[letras.length - 1];
//variamos el uso de alert y console para que se acostumbre a ambos
console.log(ultimo);
//convertir minusculas a mayusculas
var minus = "peru";
alert(minus.toUpperCase()); //pasa a mayuscula
