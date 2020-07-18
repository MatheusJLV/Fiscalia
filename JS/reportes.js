function setChangeForm(){
  var transitobtn = document.getElementById("transito_btn");
  var robobtn = document.getElementById("robo_btn");
  var asesinatobtn = document.getElementById("asesinato_btn");
  var riniabtn = document.getElementById("rinia_btn");
  var violenciabtn = document.getElementById("violencia_btn");
  var asesinatobtn = document.getElementById("asesinato_btn");

  var transitoForm=document.getElementById("Contenedor_reportar_transito");
  var roboForm=document.getElementById("Contenedor_reportar_robo");
  var asesinatoForm=document.getElementById("Contenedor_reportar_asesinato");
  var riniaForm=document.getElementById("Contenedor_reportar_rinia");
  var violenciaForm=document.getElementById("Contenedor_reportar_violencia");

  transitoForm.style.display="none";
    roboForm.style.display="none";
    asesinatoForm.style.display="none";
    riniaForm.style.display="none";
    violenciaForm.style.display="none";

  transitobtn.addEventListener("click",function(){
    transitoForm.style.display="block";
    roboForm.style.display="none";
    asesinatoForm.style.display="none";
    riniaForm.style.display="none";
    violenciaForm.style.display="none";
  });

  robobtn.addEventListener("click",function(){
    transitoForm.style.display="none";
    roboForm.style.display="block";
    asesinatoForm.style.display="none";
    riniaForm.style.display="none";
    violenciaForm.style.display="none";
  });

  violenciabtn.addEventListener("click",function(){
    transitoForm.style.display="none";
    roboForm.style.display="none";
    asesinatoForm.style.display="none";
    riniaForm.style.display="none";
    violenciaForm.style.display="block";
  });

  asesinatobtn.addEventListener("click",function(){
    transitoForm.style.display="none";
    roboForm.style.display="none";
    asesinatoForm.style.display="block";
    riniaForm.style.display="none";
    violenciaForm.style.display="none";
  });

  riniabtn.addEventListener("click",function(){
    transitoForm.style.display="none";
    roboForm.style.display="none";
    asesinatoForm.style.display="none";
    riniaForm.style.display="block";
    violenciaForm.style.display="none";
  });

  var motocb = document.getElementById("motocb");
  var carrocb = document.getElementById("carrocb");
  var pesadocb = document.getElementById("pesadocb");

  var motobtn = document.getElementById("motobtn");
  var carrobtn = document.getElementById("carrobtn");
  var pesadobtn = document.getElementById("pesadobtn");

  motobtn.addEventListener("click",function(){
    motocb.checked=!motocb.checked;
  });

  carrobtn.addEventListener("click",function(){
    carrocb.checked=!carrocb.checked;
  });

  pesadobtn.addEventListener("click",function(){
    pesadocb.checked=!pesadocb.checked;
  });
  
}
document.addEventListener('DOMContentLoaded', function() {
  setChangeForm();
})