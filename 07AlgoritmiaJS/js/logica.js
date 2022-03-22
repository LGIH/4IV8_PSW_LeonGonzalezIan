
//problema 1

function problema1(){
    let resultado= '';

    for(let i = tecto.length - 1; i >= 0; --i){
        resultado += texto[i];
    }
    return resultado;
}

console.log("El contenido de un prompt es del tipo: " + typeof(valor1));




//problema 2


//problema 3

function problema3(){

    //definir un alfabeto
    var alfabeto= ["A", "B", "C", "D","E", "F", "G", "H", 
        "I","J", "K", "L", "M", "N", "O", "P","Q","R", "S", 
        "T", "U", "V", "W", "X", "Y","Z"]

    //Vamos a obtener la entrada de datos
    var p3_input= document.querySelector('#p3-input');

    var p3_palabras= p3_input.split(',');

    // tengo que eliminar los espacios

    p3_palabras = p3_palabras.map(function (palabra){
        //crear una expresion que me recupere las palabras
        return palabra.replace(/\s/g, '').toUpperCase()
    });

    //tengo que calcular cuantos caracteres unicos hay
    var p3_res = '';

    p3_palabras.forEach(function (palabra, i){
        //separar las palabras actuales del array que
        //contiene cada letra de dicha palabra
        var letras_unicas[];
        var palabra_array = palabra.split('');

        //interacion
        alfabeto.forEach(function(letra, J){
            //itero la palabra
            palabra_array.forEach(function (letras_palabras, k){
                //comprobar que la letra este adentro de el alfabeto
                if(letras_palabras == letras){
                    //si la letra no la hemos contado
                    //la agregamos a un array para contar 
                    //las letras unicas
                    if(letras_unicas.idexOf(letra)<0){
                        letras_unicas.push(letra);
                    }
                }
            });
        });
        p3_res += 'palabra: ' + palabra + ' = ' + letras_unicas.length +'\n';

    });
    document.querySelector('#p3-output').textContent = p3_res;


}