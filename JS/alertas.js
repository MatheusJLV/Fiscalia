
var map = L.map('map').setView([0,0] , 1)
L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=aUr2tU2XYdsUSvLPnxQk", {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
  maxZoom: 18
}).addTo(map);

function buscarLocalizacion(e) {
		L.marker(e.latlng).addTo(map);
	}
		
function errorLocalizacion(e) {
		alert("No es posible encontrar su ubicación.");
}

map.on('locationerror', errorLocalizacion);
map.on('locationfound', buscarLocalizacion);

map.locate({setView: true, maxZoom:15});


let loadAlertas = () => {
  let contenedor =document.getElementById("listaAlertas");
  let detalle = document.getElementById("Detalle-Alerta");
  contenedor.innerHTML="";
fetch("../RECURSOS/data/reportes.json")
    .then(function(resultado){
      return resultado.json()
    })
    .then(function(str) {
      //console.log(str); 
      let lista1=str.index;
      for(let elemento of lista1){
        let linea1=document.createElement("hr");
        let linea2=document.createElement("hr");
        

        //console.log("elemento lat");
        //console.log( elemento.latitud);
        //console.log("elemento lon");
        //console.log( elemento.longitud);
        //console.log("ubicacion "+reporte.latitud + " "+ reporte.longitud);
        var m = L.marker([elemento.latitud, elemento.longitud]).addTo(map);
        m.bindPopup('<strong>'+elemento.tipo+'</strong><br/><p>'+ 
        "prioridad: "+elemento.prioridad+'</p><p>'+"Notificado: "+ elemento.fecha+" - " + elemento.hora+'</p>', {maxWidth : 175});

        let alerta = document.createElement("li");
        alerta.setAttribute("class","item_alerta " +elemento.tipo);
        alerta.appendChild(linea1);
        let texto = document.createElement("p");
        texto.innerText=elemento.prioridad + " - "+elemento.tipo+" - "+elemento.fecha+" - "+elemento.hora;
        alerta.appendChild(texto);
        let mostrarbtn=document.createElement("button");
        mostrarbtn.setAttribute("type","button");
        mostrarbtn.innerHTML="Detalles";
        let identificador=elemento.id+"";

        mostrarbtn.addEventListener("click",function(){
        //console.log(identificador);
        let lista2=str.reportes;
        detalle.innerHTML="";
        let titulo=document.createElement("h3");
        titulo.innerText="Detalles de la denuncia";
        let tiempo=document.createElement("p");
        let prioridad=document.createElement("p");
        let detalles=document.createElement("p");
        let info=document.createElement("p");
        //console.log(lista2);
        let reporte=lista2[identificador];
        tiempo.innerText="Reportado el: "+reporte.fecha+" a las "+reporte.hora+" horas.";
        prioridad.innerText="Alerta de prioridad: "+reporte.prioridad;
        //console.log(reporte);
        detalle.appendChild(titulo);
        detalle.appendChild(prioridad);
        detalle.appendChild(tiempo);
        switch(reporte.tipo) {
          case "transito":
            if(reporte.logged==0){
              //console.log("no logged")
              info.innerText="Reportado de forma anonima. ";
            }else{
              info.innerText="Reportado por usuario valido. ";
              //console.log("logged")
            }
            if(reporte.heridos<0){
              info.innerText+="Se desconoce el numero de heridos. ";
              //console.log("no se herid")
            }else if(reporte.heridos==0){
              info.innerText+="Aparentemente sin heridos. ";
              //console.log("no herid")
            }else if(reporte.heridos==1){
              info.innerText+="Existe la probabilidad de haber al menos un herido. ";
              //console.log("herid")
            }else if(reporte.heridos>1){
              info.innerText+="Multiples heridos en la escena. ";
              //console.log("multi herid");
            }
            if(reporte.fuga==1){
              info.innerText+="Alguno de los involucrados se dio a la fuga. ";
            }
            if(reporte.grua==1){
              info.innerText+="Se necesita grua en la escena. ";
            }
            if(reporte.riesgo==1){
              info.innerText+="CUIDADO! RIESGO DE PELIGRO EN LA ESCENA (materiales inflamables o vehiculos en llamas)! ";
            }
            if(reporte.bloqueo==1){
              info.innerText+="LA RUTA SE ENCUENTRA BLOQUEADA/CONGESTIONADA!";
            }
            info.innerHTML+="<br>Los usuarios comentan: "+reporte.comentarios;

            detalle.appendChild(info);

            // code block
            break;
          case "robo":
            if(reporte.logged==0){
              //console.log("no logged")
              info.innerText="Reportado de forma anonima. ";
            }else{
              info.innerText="Reportado por usuario valido. ";
              //console.log("logged")
            }
            info.innerHTML+="<br>Los usuarios comentan: "+reporte.comentarios;

            detalle.appendChild(info);
            // code block
            break;
          case "asesinato":
            if(reporte.logged==0){
              //console.log("no logged")
              info.innerText="Reportado de forma anonima. ";
            }else{
              info.innerText="Reportado por usuario valido. ";
              //console.log("logged")
            }
            info.innerHTML+="<br>Los usuarios comentan: "+reporte.comentarios;

            detalle.appendChild(info);
            // code block
            break;
          case "rinia":
            if(reporte.logged==0){
              //console.log("no logged")
              info.innerText="Reportado de forma anonima. ";
            }else{
              info.innerText="Reportado por usuario valido. ";
              //console.log("logged")
            }
            info.innerHTML+="<br>Los usuarios comentan: "+reporte.comentarios;

            detalle.appendChild(info);
            // code block
            break;
          case "violencia":
            if(reporte.logged==0){
              //console.log("no logged")
              info.innerText="Reportado de forma anonima. ";
            }else{
              info.innerText="Reportado por usuario valido. ";
              //console.log("logged")
            }
            info.innerHTML+="<br>Los usuarios comentan: "+reporte.comentarios;

            detalle.appendChild(info);
            // code block
            break;

        }
        });

        let eliminarbtn=document.createElement("button");
        eliminarbtn.setAttribute("type","button");
        eliminarbtn.innerHTML="Eliminar";
        eliminarbtn.addEventListener("click",function(){
        var objetivo = alerta;
        objetivo.style.display = "none";
        });
        
        alerta.appendChild(mostrarbtn);
        alerta.appendChild(eliminarbtn);
        alerta.appendChild(linea2);
        contenedor.appendChild(alerta);
      }
     
    }


    )
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}


let setBuscar = () => {
  let buscadorForm = document.getElementById('buscarCategoria');
  buscadorForm.addEventListener('click', (e) => {
    e.preventDefault();
    let cateSearch = document.getElementById('Tipo').value
    console.log(cateSearch)
    //document.getElementById('listaAlertas').innerHTML = "";
    let alertas =document.getElementsByClassName("item_alerta");
    //console.log(alertas);
    for(let alerta of alertas){
      console.log(alerta);
      if (!(alerta.className.includes(cateSearch))){
        alerta.style.display="none";
      }else{
        alerta.style.display="block";
      }
    }
  
  /*fetch("../RECURSOS/data/reportes.json")
    .then(function(resultado){
      return resultado.text()
    })
    .then(function(str) {
      
    })
    .catch(function(error) {
      console.log('Hubo un problema con la petición Fetch:' + error.message);
    });*/
    
    
  })
}
document.addEventListener('DOMContentLoaded', function() {
  loadAlertas();
  setBuscar(); 
})