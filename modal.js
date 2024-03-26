const button = document.querySelector("button") //falei que a tag "button" é igual a constante "button"
const modal = document.querySelector ("dialog") //falei que a tag "dialog" ´é igual a variavel "dialog"
const buttonClose = document.querySelector ("dialog p button") //falei que a tag "button" é igual a constante "buttonClose"
const buttonEnviar = document.querySelector ("dialog div button") //Botão enviar
const modal1 = document.querySelector ("dialog dialog") //segunda dialog
const buttonOk = document.querySelector ("dialog dialog p button ") //Botão do segundo dialog, o botão "ok!"

//"button.onclick" essa tag serve para ativar a função com apenas um click
button.onclick = function (){
    modal.showModal ()  //chamei o popup/Modal

}

buttonClose.onclick = function (){ //fechei a primeira dialog
    modal.close ()
}

buttonEnviar.onclick = function (){
    modal1.showModal ()  //chamei a segunda dialog

}

buttonOk.onclick = function (){ //fechei todas as dialog
    modal1.close ()
    modal.close ()
}