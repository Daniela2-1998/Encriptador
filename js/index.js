const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;  
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(textoAEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoAEncriptar = textoAEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoAEncriptar.includes(matrizCodigo[i][0])){
            textoAEncriptar = textoAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return textoAEncriptar;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;  
    textArea.value = "";
}

function desencriptar(textoADesencriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoADesencriptar = textoADesencriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoADesencriptar.includes(matrizCodigo[i][1])){
            textoADesencriptar = textoADesencriptar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return textoADesencriptar;
}

function botonCopiarMensaje(){
        const copiado = copiarMensaje(mensaje.value);
}

function copiarMensaje(mensaje){
    let mensajeACopiar = mensaje;
    document.querySelector(".text_area").value = "";
    document.querySelector(".text_area").value = mensajeACopiar;
    console.log("Mensaje copiado con éxito: " + mensajeACopiar);
}

function botonLimpiarCampos(textArea.value){
    return textArea.normalize("NFD").replace(/[^a-zA-Z0-9 ]/g, "");
    document.alert("Campos vacíos");
}