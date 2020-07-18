

/*Funcion para leer el xml con las direcciones */
function loadData() {
  fetch("../data/locations.xml")
    .then(function(resultado) {
      return resultado.text()
    })
    .then(function(str) {
      /*window.alert(str)*/
      var parser = new DOMParser();
      var xml = parser.parseFromString(str, "text/xml");

      var locations = xml.getElementsByTagName("location");
      
      for (var i = 0; i < locations.length; i += 1) {
          var location = locations[i]
          
          var tipo = location.getElementsByTagName('tipo')[0]
          var latitud = location.getElementsByTagName('latitud')[0]
          var longitud = location.getElementsByTagName('longitud')[0]
          var descripcion = location.getElementsByTagName('descripcion')[0]
          var imagen = location.getElementsByTagName('imagen')[0]

          /* Asignación del tipo de ubicacion al punto en el mapa */
          switch (tipo.textContent) {

            case 'Parque':
              var m = L.marker([latitud.textContent, longitud.textContent], {icon: L.AwesomeMarkers.icon({icon: 'tree', prefix: 'fa', markerColor: 'green', spin:false}) }).addTo(map);
              m.bindPopup('<strong>'+tipo.textContent+'</strong><br/><img src='+imagen.textContent+' width="175" height="125" align="center"><br/><p>'+descripcion.textContent+'</p>', {maxWidth : 175});
              break;

            case 'Veterinaria':
              var m = L.marker([latitud.textContent, longitud.textContent], {icon: L.AwesomeMarkers.icon({icon: 'user-md', prefix: 'fa', markerColor: 'blue', spin:false}) }).addTo(map);
              m.bindPopup('<strong>'+tipo.textContent+'</strong><br/><img src='+imagen.textContent+' width="175" height="125"><br/><p>'+descripcion.textContent+'</p>', {maxWidth : 175});
              break;

            case 'Tienda':
              var m = L.marker([latitud.textContent, longitud.textContent], {icon: L.AwesomeMarkers.icon({icon: 'bone', prefix: 'fa', markerColor: 'orage', spin:false}) }).addTo(map);
              m.bindPopup('<strong>'+tipo.textContent+'</strong><br/><img src='+imagen.textContent+' width="175" height="125"><br/><p>'+descripcion.textContent+'</p>', {maxWidth : 175});
              break;
              
            default:
              
          }
          /*window.alert(descripcion.textContent) /*para saber que accedi bien */
      }

    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    //loadData()
})

/* Links utiles para marcadores
https://mappinggis.com/2016/12/utilizando-los-iconos-bootstrap-leaflet/ guia de como usar
https://fontawesome.com/ (aqui obtenemos el codigo de prefix e icon) 

Links para cuadro dentro de mapa
https://github.com/dalbrx/Leaflet.ResizableControl
https://mappinggis.com/2018/06/15-plugins-de-leaflet-para-mejorar-la-interfaz-de-usuario/

*/