

let textoVacio = '';


function encriptar() {
    let textoDigitadoUsuario = '';

    textoDigitadoUsuario = document.getElementById('ingresar__texto').value;
   

    if (textoDigitadoUsuario==textoVacio) {
       
        inicio ();
        
    }else{
        remove_Img_Detalle('id__img__detalle');
        remove_Img_Detalle('id__texto__mostrar');
        informacionDeTexto('textarea__recibir__texto',textoDigitadoUsuario);
        add_Img_Detalle('id__contenido___boton__copiar');

       

        
        
    }

    

    
    
}

function desencriptar () {

    let textoDigitadoUsuario = '';

    textoDigitadoUsuario = document.getElementById('ingresar__texto').value;
   

    if (textoDigitadoUsuario==textoVacio) {
       
        inicio ();

        
    }else{
        remove_Img_Detalle('id__img__detalle');
        remove_Img_Detalle('id__texto__mostrar');
        desencriptar_Texto('textarea__recibir__texto',textoDigitadoUsuario);
        add_Img_Detalle('id__contenido___boton__copiar');
       
       

        
        
    }
}

function remove_Img_Detalle (elementoId){

    let removeImgDetalle = document.getElementById(elementoId);
    removeImgDetalle.style.display = 'none';

    

}

function add_Img_Detalle (elementoId){

    let removeImgDetalle = document.getElementById(elementoId);
    removeImgDetalle.style.display = 'block';

}


function informacionDeTexto(elemento,texto) {

    let elementoHtml = document.getElementById(elemento);
    elementoHtml.innerHTML = texto;

  

    let textoEncriptado = texto
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');



  
    
    elementoHtml.innerHTML = textoEncriptado;

    
    
}

function desencriptar_Texto(elemento,texto) {


    
    let elementoHtml = document.getElementById(elemento);
    elementoHtml.innerHTML = texto;

    let textoDesencriptado = texto 
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
    

   
   
    
    elementoHtml.innerHTML = textoDesencriptado;

    
}

function restoreDefaultValue() {
    let textarea = document.getElementById('textarea__recibir__texto');
    textarea.textContent = 'Ingresa el texto que desees encriptar o desencriptar.';
}


  


function inicio () {
    add_Img_Detalle('id__img__detalle');
    add_Img_Detalle('id__texto__mostrar');
    
    
    restoreDefaultValue();
    
}

function copiarTexto() {
    
    const textarea = document.getElementById('textarea__recibir__texto');

    
    textarea.select();
    textarea.setSelectionRange(0, 99999); 

  
    document.execCommand('copy');

    // alert('Texto copiado: ' + textarea.value);

    document.getElementById('ingresar__texto').value=textarea.value;

    
}

remove_Img_Detalle('id__contenido___boton__copiar');

