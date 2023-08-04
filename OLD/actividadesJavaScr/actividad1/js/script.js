/**
 * Escribir el código de una función a la que se pasa como parametro un numero entero y devuelve como resultado una cadena de texto que indica si el numero es par o impar. Mostrar por pantalla el resultado devuelto por la función
 */

function leerDato(){
    let numero=document.getElementById("numero").value;
    if(validarDatos(numero)){
        if (numero%2==0){
            document.getElementById("resultado").innerHTML="El número es par";
        }else{
            document.getElementById("resultado").innerHTML="El número es impar";
        }
    }
}


//los parametros o atributos que se pasan a una funcion no tienen pq llamarse igual que en la función de origen
function validarDatos(dato){
    if(isNaN(dato)||dato==""||dato.includes(" ")){
        document.getElementById("resultado").innerHTML="Error. Indica un número, no letras";
    }else{
        return true;
    }
}