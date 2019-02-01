window.cipher = {

encode: (offset, texto)=> {

    let mensaje = [];

    for(let i=0; i < texto.length; i++){
        texto[i].charCodeAt();
        let position = ((texto[i].charCodeAt() - 65 + offset)%26 + 65);
        let asciiString= String.fromCharCode(position);
        mensaje.push(asciiString);

    }
    let x = mensaje.join('');
    return x;
  }



}
