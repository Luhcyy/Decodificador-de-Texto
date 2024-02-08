let textInput = document.querySelector('#decrypt-area');
let textOutput = document.querySelector('#text-content');

const dialogWindow = document.querySelector('#dialog-box');
const dialogText = document.querySelector('#dialog-text');
const closeButton = document.querySelector('#dialog-close')

function closeDialog() {
    dialogWindow.setAttribute('style', 'display: none')
    dialogWindow.classList.remove('animate');
    textInput.value = '';
}

function openDialog(message) {
    dialogText.innerText = message
    dialogWindow.setAttribute('style', 'display: flex')
    setTimeout(function() {
        dialogWindow.classList.add('animate');
    }, 200)
}


function changeCodeArea() {
    document.querySelector('.no-content').setAttribute('style', 'display: flex');
    document.querySelector('.showing-content').setAttribute('style', 'display: none');
};


function textCleaner() {
    document.querySelector(".no-content").setAttribute("style", "display: none");
    document.querySelector(".showing-content").setAttribute("style", "display:flex");
    textInput.value = '';
};

function verifySpecial(phrase) {
    const letterlist = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ', '0',
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    const allLetters = phrase.split('').every(caracter => letterlist.includes(caracter))
    
    if(allLetters) {
    return false;
    } else {
        return true;
    }
}

function verifyUpper(phrase) {
    for (let i = 0; i < phrase.length; i++) {
        if (phrase[i] !== phrase[i].toLowerCase()) {
            return true;
        }
    }
    return false;
}

function encrypt() {
    let text = textInput.value;
    if (verifySpecial(text) || verifyUpper(text)) {
        openDialog("O texto não deve conter caracteres especiais ou letras maiúsculas.");
        textCleaner();
        changeCodeArea();
        return;
    }
    let resultEncrypt = text.replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/a/g, 'ai')
    .replace(/o/g, 'ober').replace(/u/g, 'ufat');
    textOutput.value = resultEncrypt;
    changeCodeArea();
    textCleaner();
    

}

function decrypt() {
    let text = textInput.value;
    if (verifySpecial(text) || verifyUpper(text)) {
        openDialog("O texto não deve conter caracteres especiais ou letras maiúsculas.");
        return;
    }
    let resultDecrypt = text.replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ai/g, 'a')
    .replace(/ober/g, 'o').replace(/ufat/g, 'u');
    textOutput.value = resultDecrypt;
    changeCodeArea();
    textCleaner();
    
}

function copy() {
    let copyText = document.getElementById('text-content');
    copyText.select();
    document.execCommand('copy');
    openDialog("Texto copiado")
}

