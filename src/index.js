//Funciones de los botones para cambiar pantallas
 function boton2a() {
     document.getElementById('screen1').style.display = 'none';  //va por tu "screen1" y hace que su "estilo de display" sea "none" o sea, que no aparezca.
     document.getElementById('screen2a').style.display = 'block'; //va por tu "screen2a" y hace que su "estilo de display" sea "block" (de "bloque") o sea, que aparezca.
  }
     document.getElementById('botonEncode').addEventListener('click', boton2a); //va por tu botón que te manda a la página de "encode" y le agrega el ".addEventListener"
                                                                                //que es el que te avisará cada que tu boton sea "clickeado" y te mandará a ejecutar la función.
 function boton2b(){
     document.getElementById('screen1').style.display = 'none';
     document.getElementById('screen2b').style.display = 'block';
  }
     document.getElementById('botonDecode').addEventListener('click', boton2b);

 function returnA(){
     document.getElementById('screen2a').style.display = 'none';
     document.getElementById('screen1').style.display = 'block';
  }

     document.getElementById('volverA').addEventListener('click', returnA);

 function returnB(){
     document.getElementById('screen2b').style.display = 'none';
     document.getElementById('screen1').style.display = 'block';
  }

     document.getElementById('volverB').addEventListener('click', returnB);


// Funciones para limpiar los campos
 function cleanA(){
     document.getElementById('offsetC').value="";  //asigna un "vacío" a mi offsetC.
     document.getElementById('messageC').value="";
     document.getElementById('outputE').value="";
  }

     document.getElementById('limpiarA').addEventListener('click', cleanA); //cada que se "clickea" en mi botón "limpiarA", se ejecuta mi función "cleanA".

 function cleanB(){
     document.getElementById('offsetD').value="";
     document.getElementById('messageD').value="";
     document.getElementById('outputD').value="";
  }

     document.getElementById('limpiarB').addEventListener('click', cleanB);



//Funciones para los argumentos de cipher.js
 function encodeArg(){

     let offsetIn = Number(document.getElementById('offsetC').value); //Se crea una variable donde se va agregar en valor númerico lo que entre en mi caja de "offsetC" que está en HTML.
     let messageIn = document.getElementById('messageC').value;       //Se crea una variable donde se le da valor de texto a lo que entra en "messageC" en HTML.
     let messageCod = window.cipher.encode(offsetIn, messageIn);      //Se crea una variable donde se llama a "Encode"(que está en mi cipher.js) y mete mis argumentos (las variables que creé).
     document.getElementById('outputE').innerHTML = messageCod;       //Se imprime en mi caja de HTML ("outputE") lo que hay en "messageCod".

  }

     document.getElementById('encode').addEventListener('click', encodeArg); //Cada que "clickeas" el botón encode, se ejecuta tu función "encodeArg".

  function decodeArg(){

     let offsetIn = Number(document.getElementById('offsetD').value);
     let messageIn = document.getElementById('messageD').value;
     let messageDec = window.cipher.decode(offsetIn, messageIn);
     document.getElementById('outputD').innerHTML = messageDec;

  }

     document.getElementById('decode').addEventListener('click', decodeArg);
