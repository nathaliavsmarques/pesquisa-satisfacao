"use strict";
const container = document.querySelector('#container');
const levelSatisfation = document.querySelectorAll('.material-symbols-outlined');
let sadFace = document.querySelector('#sad-face');
let neutralFace = document.querySelector('#neutral-face');
let happyFace = document.querySelector('#happy-face');
let verySatisfiedFace = document.querySelector('#verySatisfied-face');
const faces = [sadFace, neutralFace, happyFace, verySatisfiedFace];
function configText() {
    container.style.fontSize = '1.2rem';
    container.style.textAlign = 'center';
    container.style.backgroundColor = '#80FF52';
}
faces.forEach(face => {
    face.addEventListener('click', function () {
        configText();
        if (face === sadFace) {
            container.innerHTML = '<p><b> Grau de satisfação: Ruim.<br> Sentimos muito que você não tenha tido uma boa experiência conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>';
        }
        else if (face === neutralFace) {
            container.innerHTML = '<p><b> Grau de satisfação: Normal. <br> Sentimos muito que você não tenha tido uma boa experiência conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>';
        }
        else if (face === happyFace) {
            container.innerHTML = "<p><b>Grau de satisfação: Bom.<br> Ficamos felizes que você tenha tido uma experiência positiva conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>";
        }
        else {
            container.innerHTML = "<p><b>Grau de satisfação: Muito Satisfeito.<br> Ficamos felizes que você tenha tido uma experiência positiva conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>";
        }
    });
});
