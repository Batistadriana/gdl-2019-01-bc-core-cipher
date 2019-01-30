//Funcion para "cambiar" de ventanas
function restart(){

  document.getElementById("screen2a").style.display = 'none';
  document.getElementById("screen2b").style.display = 'none';
  document.getElementById("screen3a").style.display = 'none';
  document.getElementById("screen3b").style.display = 'none';

} restart();

function controlScreens(divX, divY){
 let divElement = document.getElementById(divX);
 let divElement2 = document.getElementById(divY);

 //Ocultando la division del inicio
 if(divElement.style.display == 'none'){
   divElement.style.display = 'block';
 }
 else {
   divElement.style.display = 'none';
 }

 //Mostrando la division del menu
 if(divElement2.style.display == 'none'){
   divElement2.style.display = 'block';
 }
 else {
   divElement2.style.display = 'none';
 }
}
