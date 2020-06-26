
function setSearch(){
  var boton = document.getElementById("btnSeleccionar");
  boton.addEventListener("click",function(){
    var secciones=document.getElementsByClassName("contenedorSeccion");
    var eleccion = document.getElementById("seleccion");
    var strSelect = eleccion.options[eleccion.selectedIndex].value;
    console.log(strSelect);
    var contenedores = document.getElementsByClassName("contenedorSeccion");
    for (var i = 0; i<contenedores.length; i +=1){
      var contenedor=contenedores[i];
      if(contenedor.getAttribute("id")==strSelect){
        contenedor.style.display=  "";

      }else{
        contenedor.style.display=  "none";
      }
    }
  });
  
}

document.addEventListener('DOMContentLoaded', function() {
  setSearch();
})