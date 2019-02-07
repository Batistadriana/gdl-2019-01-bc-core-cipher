 function boton2a() {
     document.getElementById("screen1").style.display = "none";
     document.getElementById("screen2a").style.display = "block";
  }
     document.getElementById('botonEncode').addEventListener('click', boton2a);

 function boton2b(){
     document.getElementById('screen1').style.display = "none";
     document.getElementById("screen2b").style.display = "block";
  }
     document.getElementById('botonDecode').addEventListener('click', boton2b);

 function returnA(){
     document.getElementById("screen2a").style.display = "none";
     document.getElementById("screen1").style.display = "block";
  }

     document.getElementById('volverA').addEventListener('click', returnA);

 function returnB(){
     document.getElementById("screen2b").style.display = "none";
     document.getElementById("screen1").style.display = "block";
  }

     document.getElementById('volverB').addEventListener('click', returnB);


//Funciones para los argumentos de cipher.js
 function encodeArg(){

     let offsetIn = Number(document.getElementById("offsetC").value);
     let messageIn = document.getElementById("messageC").value;
     let messageCod = window.cipher.encode(offsetIn, messageIn);
     document.getElementById('outputE').innerHTML = messageCod;

  }

     document.getElementById('encode').addEventListener('click', encodeArg);

  function decodeArg(){

     let offsetIn = Number(document.getElementById("offsetD").value);
     let messageIn = document.getElementById("messageD").value;
     let messageDec = window.cipher.decode(offsetIn, messageIn);
     document.getElementById('outputD').innerHTML = messageDec;

  }

     document.getElementById('decode').addEventListener('click', decodeArg);
