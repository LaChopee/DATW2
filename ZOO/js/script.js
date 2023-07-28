

//--------COMPRAR ENTRADAS--------

function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }


//---------BANER QUE CAMBIA LA IMAGEN----------------

let arrayImg=new Array(4)  //-declarar unidades del array-
arrayImg[0]=new Image();
arrayImg[0].src="img/jimmi-el-mono.webp";
arrayImg[1]=new Image();
arrayImg[1].src="img/cabarceno.webp";
arrayImg[2]=new Image();
arrayImg[2].src="img/tucan.webp";
arrayImg[3]=new Image();
arrayImg[3].src="img/mapache.webp";
contador=0

function cambiarImagen(){
  document.querySelector("#fotosBaner").src=arrayImg[contador].src;
  contador++;
  //operador ternario
  contador=contador==4?contador=0:contador=contador;
  setTimeout("cambiarImagen()", 5000);//se llama a sí mismo  
}

window.addEventListener("load", ()=>{
  cambiarImagen();
})