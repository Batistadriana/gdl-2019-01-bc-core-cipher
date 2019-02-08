window.cipher = {

encode: (offset, texto)=> {

    let mensaje = [];    //variable para poner mi resultado.

    for(let i=0; i < texto.length; i++){  //Condicional que avanza letra por letra el largo del texto ingresado.
        texto[i].charCodeAt();            // Enunciado que te da el numero ASCII de cada letra.
        let position = ((texto[i].charCodeAt() - 65 + offset)%26 + 65); //Enunciado que contiene la fórmula que te da el nuevo offset
        let asciiString= String.fromCharCode(position); //Enunciado que con tu nuevo offset te da tu nueva letra.
        mensaje.push(asciiString);        //Enunciado que agrega las nuevas letras a un array por medio de ".push".

    }
    let x = mensaje.join('');  //variable que agarra el array y con ".join" une todas las letras sin espacios.
    return x;
  },

  decode: (offset, texto)=> {

      let mensaje = [];

      for(let i=0; i < texto.length; i++){
          texto[i].charCodeAt();
          let position = ((texto[i].charCodeAt() + 65 - offset)%26 + 65);
          let asciiString= String.fromCharCode(position);
          mensaje.push(asciiString);

      }
      let x = mensaje.join('');
      return x;
    }

};
