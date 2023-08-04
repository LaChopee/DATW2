
window.addEventListener("load", ()=>{
    //leemos el boton
    const boton=document.querySelectorAll('.boton');
    //si ocurre el evento de click en el boton 0 sustituyo la bombilla por kla imagen apagada
    boton[0].addEventListener("click", ()=>{
        const bombilla=document.querySelector("#bombilla");
        bombilla.src="../img/off.gif";
    });
    boton[1].addEventListener("click", ()=>{
        const bombilla=document.querySelector("#bombilla");
        bombilla.src="../img/on.gif";
    });
})