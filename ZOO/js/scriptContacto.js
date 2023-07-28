window.addEventListener("load", function(){
    let seleccion=document.querySelector("#formcontacto");
    //declarar div ocultos
    let divTel=document.querySelector(".teleOculto");
    let divEmail=document.querySelector(".emailOculto");
    let divCorreo=document.querySelector(".cpOculto");
    seleccion.addEventListener("change", ()=>{
        let valorSeleccion=seleccion.value;
        switch (valorSeleccion) {
            case "telefono":{
                divTel.style.display="block";
                divEmail.style.display="none";
                divCorreo.style.display="none";
                break;
            }               
            case "email":{
                divEmail.style.display="block";
                divTel.style.display="none";
                divCorreo.style.display="none";
                break;
            }
            case "correo":{
                divCorreo.style.display="block";
                divTel.style.display="none";
                divEmail.style.display="none";
                break;
            }
        }
    })

    let boton=document.querySelector(".button-3");
    boton.addEventListener("click",()=>{
        let nombre=document.querySelector("#nombre").value;
        let apellidos=document.querySelector("#lname").value;
        let mns=document.querySelector("#mensaje").value;
        console.log(nombre+" "+apellidos+" "+mns);
        validarNombre(nombre)
    })
})

let mnsError=document.querySelector("#mnsError")
function validarNombre(nombre){
    if (nombre==null||nombre==""||nombre==" "){
        
    }
}

function validarApellido(){
    
}

function validarContacto(){
    
}

function validarMensaje(){
    
}
