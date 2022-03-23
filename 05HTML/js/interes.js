//funcion que se encargue por una expresion regular

function validarn(e){
    var teclado = (document.all)?e.keycode : e.which;
    /* vamos a aplicar una prueba logica de el teclado a partir de un patron este patrondebe ser
    numerico o solo acepta 0-9, todo lo deja escapar*/

    if (teclado==8) return true};   
    var patron = /[0-9]\d .]/;

    var probar = String.fromCharCode(teclado);
    return patron.test(probar);

}

function interes(){
    var valor = document.formulario1.cantidad.value;
    //tipo dato
    var resul = parseInt(valor);
    var interes = resul*0.025;
    var total = resul + interes;

    //vamos a imprimir el resultado

    document.formulario1.sueldo.value="$"+ total;
}

function borrar(){
    document.formulario1.sueldoI.value="";
    document.formulario1.cantidad.value="";
}