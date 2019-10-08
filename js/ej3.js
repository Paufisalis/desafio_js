window.onload = function() {
  // Numero de enlaces de la pagina
enlaces = document.getElementsByTagName('a');
console.log(enlaces.length);
  // Direccion del penultimo enlace
var prelast = enlaces.length - 2;
var prelast_link = enlaces[prelast];
console.log(prelast_link);
  // Numero de enlaces que apuntan a http://prueba
var cont=0;
for(var i=0; i < enlaces.length - 1; i++){
  var href = enlaces[i].href
  if(href =='http://prueba/'){
    cont +=1
  }
}
console.log(cont);
  // Numero de enlaces del tercer parrafo
var parrafo =  document.getElementsByTagName('p');
var tercer_parrafo = parrafo[2];
var enlaces_parrafo = tercer_parrafo.getElementsByTagName('a');
console.log(enlaces_parrafo.length);
}
