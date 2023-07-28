/**
 * Definir una función que determine si la cadena de yecto que se le pasa como parametro es un
 * palindromo, es decir, si se lee de la misma forma desde la izquierda u desde la derecha. Ej: "La
 * ruta nos aporto otro paso natural"
 */

function leerPalindromo(){
    let palindromo=document.getElementById("palindromo").value;
    let texto;
    let tra;
    if(isNaN(palindromo)){
        texto="palíndroma";
    }else{
        texto="capicua"
    }
    if(isNaN(palindromo)){
        tra="La frase '";
    }else{
        tra="El número '"
    }
    if(palindromo!=""){
        if(validarPalindromo(palindromo)){
            document.getElementById("resultadoPalindromo").innerHTML=tra+palindromo+"' es "+texto;
            document.getElementById("resultadoPalindromo").style.color="#4fc978";
        }else{
            document.getElementById("resultadoPalindromo").innerHTML=tra+palindromo+"' NO es "+texto;
            document.getElementById("resultadoPalindromo").style.color=" rgb(105, 45, 45)";

        }
    }else{
        document.getElementById("resultadoPalindromo").innerHTML="Error. Indica una frase o palabra valida";
        document.getElementById("resultadoPalindromo").style.color="#2b2b2b";
    }
}

function validarPalindromo(texto){
    //pasar todo a minuscula y eliminar los espacios en blanco
    let cadenaOriginal=texto.toLowerCase().replaceAll(" ","");
    //convertir la cadena en un array separado por letras
    let letrasEspacios=cadenaOriginal.split("");
    //convertir la cadena en un array separado por letras e invertido
    let letrasReves=cadenaOriginal.split("").reverse();
    console.log(letrasEspacios);
    console.log(letrasReves);
    //creamos el array en cadena
    let cadena1=letrasEspacios.join("");
    let cadena2=letrasReves.join("");
    //comparamos las dos cadenas
    if(cadena1==cadena2){
        return true;
    }else{
        return false;
    }
}