var caesar = caesar || (function() {
			var doStaff = function (txt, desp, action) {
				var replace = (function() {
					var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
						'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
					var l = abc.length;
					return function(c) {
						var i = abc.indexOf(c.toLowerCase());
						if (i != -1) {
							var pos = i;
							if (action) {
								// forward
								pos += desp;
								pos -= (pos >= l)?l:0;
							} else {
								// backward
								pos -= desp;
								pos += (pos < 0)?l:0;
							}
							return abc[pos];
						}
						return c;
					};
				})();
				var re = (/([a-z])/ig);
				return String(txt).replace(re, function (match) {
					return replace(match);
				});
			};
 
			return {
					encode: function(txt, desp) {
					return doStaff(txt, desp, true);
				},
					decode: function(txt, desp) {
					return doStaff(txt, desp, false);
				}
			};
		})();
 
		function codificar()
		{
			document.getElementById("resultado").innerHTML=caesar.encode(document.getElementById("cadena").value, 3);
		}
		function kroddecodificar()
		{
			document.getElementById("resultado").innerHTML=caesar.decode(document.getElementById("cadena").value, 3);
		}var caesar = caesar || (function() {
			var doStaff = function (txt, desp, action) {
				var replace = (function() {
					var abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
						'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
					var l = abc.length;
					return function(c) {
						var i = abc.indexOf(c.toLowerCase());
						if (i != -1) {
							var pos = i;
							if (action) {
								// forward
								pos += desp;
								pos -= (pos >= l)?l:0;
							} else {
								// backward
								pos -= desp;
								pos += (pos < 0)?l:0;
							}
							return abc[pos];
						}
						return c;
					};
				})();
				var re = (/([a-z])/ig);
				return String(txt).replace(re, function (match) {
					return replace(match);
				});
			};
 
			return {
					encode: function(txt, desp) {
					return doStaff(txt, desp, true);
				},
					decode: function(txt, desp) {
					return doStaff(txt, desp, false);
				}
			};
		})();
 
		function codificar()
		{
			document.getElementById("resultado").innerHTML=caesar.encode(document.getElementById("cadena").value, 3);
		}
		function decodificar()
		{
			document.getElementById("resultado").innerHTML=caesar.decode(document.getElementById("cadena").value, 3);
		}

        /*var alfabeto = 'abcdefghijklmnñopqrstuvwxyzABCDEFGHIJKLMNÑOPQRSTUVWXYZ01234567890',
        desplazamiento = 1,
        boton_de_cifrar = document.getElementById('cifrar'),
        boton_de_descifrar = document.getElementById('descifrar'),
        entrada = document.getElementById('input'),
        salida = document.getElementById('output');
    
        function cifrar(input, output, desplazamiento){
            var resultado = '';
            //Usaremos un bucle
            for(var i=0, c; c=input[i]; i++){
                var caracter_actual = '',
                    indice_actual = alfabeto.indexOf( c );
    
                if((indice_actual + desplazamiento) <= alfabeto.length){
                    //Desaplazamos el caracter.
                    caracter_actual = alfabeto[ (indice_actual + desplazamiento) ];
    
                    //El guion lo usamos para delimitar cada caracter cifrado y poder decifrarlo.
                    resultado += caracter_actual + '';
                }
                else{
                    var indice_actual_temporal = indice_actual + desplazamiento,
                        sobrante = indice_actual_temporal - alfabeto.length;
    
                    //
                    //Usaremos solo el desplazamiento para reemplazar el caracter.
                    caracter_actual = alfabeto[sobrante];
    
                    resultado += caracter_actual + ' ';
                }
            }
    
            output.value = resultado.replace(/\-$/,' ');
        }
    
        function descifrar(output, desplazamiento){
            var array_de_caracteres = output.value.split(' '),
                resultado = '';
    
            //Usaremos un bucle
            for(var i=0, c; c=array_de_caracteres[i]; i++){
    
                c = String.fromCharCode( parseInt( c ) );
    
                var caracter_actual = '',
                    indice_actual = alfabeto.indexOf( c );
    
                if((indice_actual - desplazamiento) >= 0){
                    caracter_actual = alfabeto[ (indice_actual - desplazamiento) ];
    
                    resultado += caracter_actual;
                }
                else{
                    var indice_actual_temporal = indice_actual - desplazamiento,
                        sobrante = parseInt(indice_actual_temporal.toString().replace('-',' ') );
    
    
                    caracter_actual = alfabeto[alfabeto.length - sobrante];

                }
            }
    
            output.value = resultado
        }
    
    
        boton_de_cifrar.addEventListener('click', function(){
            cifrar(entrada.value, salida, desplazamiento);
        }, false);
    
        boton_de_descifrar.addEventListener('click', function(){
            descifrar(salida, desplazamiento);
        }, false);
		
		
		
	*/