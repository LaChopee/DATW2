/**
 *Definir Una función que muestre información sobre una cadena de texto que se le pasa como
 argumento. A partir de la cadena que se le pasam la función detemina si esa cadena está fprmada
 sólo por mayusculas, sólo por minúsculas o por una mezcla de ambas
 */

 function leerTexto(){
    let texto=document.getElementById("texto").value;
    if(isNaN(texto)&&texto!=""){
        validarTexto(texto);
    }else{
        document.getElementById("resultadoTexto").innerHTML="Escribe una cadena, ¡SOLO LETRAS!"
    }
 }

 function validarTexto(texto){
    if(texto==texto.toUpperCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto esta en mayúsculas ->";
    }else if(texto==texto.toLowerCase()){
        document.getElementById("resultadoTexto").innerHTML="El texto esta en minúsculas";
    }else{
        document.getElementById("resultadoTexto").innerHTML="El texto esta en mayúsculas y minúsculas";
    }
 }