function loadData() {
    fetch("./RECURSOS/data/noticias.xml")
        .then(function(resultado) {
  
              return resultado.text()
          })
          .then(function(str) {
            //console.log(str);
              var parser = new DOMParser()
              var xml = parser.parseFromString(str, "text/xml");
              // console.log
  
              /* Aquí para procesar el xml */
  
              var noticias = xml.getElementsByTagName("Noticia");
              var seccion = document.getElementById('Noticias')
  
              for (var i = 0; i < noticias.length; i += 1) {
                
                  var contenedor = document.createElement("div");
                  contenedor.setAttribute("class","Noticia");
                  var titulo = document.createElement("h3");
                  titulo.setAttribute("class","tituloNoticia");
                  var imagenNoticia = document.createElement("img");
                  imagenNoticia.setAttribute("class","imagenNoticia");
                  var fecha = document.createElement("p");
                  fecha.setAttribute("class","fechaEvento");
                  var contenido = document.createElement("p");
                  contenido.setAttribute("id","parrafoEvento")
  
                  var noticia = noticias[i];
  
                  titulo.innerHTML=noticia.getElementsByTagName("Titulo")[0].textContent;
                  //console.log(titulo.innerHTML);
  
                  imagenNoticia.setAttribute("src",noticia.getElementsByTagName("Location")[0].textContent);
                  imagenNoticia.setAttribute("alt",noticia.getElementsByTagName("Alternativo")[0].textContent)
                  fecha.innerHTML=noticia.getElementsByTagName("Fecha")[0].textContent;
                  //console.log(fecha.innerHTML);
  
                  contenido.innerHTML=noticia.getElementsByTagName("Descripcion")[0].textContent;
                  //console.log(contenido.innerHTML);
  
                  contenedor.appendChild(titulo);
                  contenedor.appendChild(imagenNoticia);
                  contenedor.appendChild(fecha);
                  contenedor.appendChild(contenido);
  
                  seccion.appendChild(contenedor);
            }
  
          })
          .catch(function(error) {
              console.log('Hubo un problema con la busqueda:' + error.message);
          });
  }
  /*
  function setSearch(){
    var boton = document.getElementById("btnBuscar");
    window.alert(boton);
    boton.addEventListener("click",function(){
      var textoBusqueda = document.getElementById("txtBuscador").value;
      //console.log(textoBusqueda);
      var noticias = document.getElementsByClassName("Noticia");
      if(textoBusqueda==""){
        for(var i = 0; i<noticias.length;i++){
          noticias[i].style.display = "block";
        }
      }else{
        for(var i = 0; i<noticias.length;i++){
          var titulo=noticias[i].getElementsByClassName("tituloNoticia")[0].innerHTML;
          //console.log(titulo);
          //console.log((titulo.toLowerCase()).includes(textoBusqueda.toLowerCase()));
          if(!(titulo.toLowerCase()).includes(textoBusqueda.toLowerCase())){
            noticias[i].style.display = "none";
          }
        }
      }
    });
  }
  */
  document.addEventListener('DOMContentLoaded', function() {
      loadData();
      /*setSearch();*/
  })