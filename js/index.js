const textArea = document.querySelector(".text_area");
const mensaje = document.querySelector(".mensaje");

function botonEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;  
}

function encriptar(textoAEncriptar){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    textoAEncriptar = textoAEncriptar.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(textoAEncriptar.includes(matrizCodigo[i][0])){
            textoAEncriptar =  textoAEncriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return textoAEncriptar;
}


