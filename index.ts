const container = document.querySelector('#container') as HTMLAnchorElement;
const levelSatisfation = document.querySelectorAll('.material-symbols-outlined');
let sadFace = document.querySelector('#sad-face') as HTMLAnchorElement;
let neutralFace = document.querySelector('#neutral-face') as HTMLAnchorElement;
let happyFace = document.querySelector('#happy-face') as HTMLAnchorElement;
let verySatisfiedFace = document.querySelector('#verySatisfied-face') as HTMLAnchorElement;

const faces:HTMLAnchorElement[] = [sadFace, neutralFace, happyFace, verySatisfiedFace];

function configText(): void {
    container.style.fontSize = '1.2rem';
    container.style.textAlign = 'center';
    container.style.backgroundColor = '#80FF52'
}

faces.forEach(face => {
    face.addEventListener('click', function() {
       configText();
        if(face === sadFace) {
            container.innerHTML = '<p><b> Grau de satisfação: Ruim.<br> Sentimos muito que você não tenha tido uma boa experiência conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>'
        } else if (face === neutralFace) {
            container.innerHTML = '<p><b> Grau de satisfação: Normal. <br> Sentimos muito que você não tenha tido uma boa experiência conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>'
        } else if (face === happyFace) {
            container.innerHTML = "<p><b>Grau de satisfação: Bom.<br> Ficamos felizes que você tenha tido uma experiência positiva conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>"
        } else {
            container.innerHTML = "<p><b>Grau de satisfação: Muito Satisfeito.<br> Ficamos felizes que você tenha tido uma experiência positiva conosco. Continuaremos trabalhando para melhorarmos cada vez mais.</p>"

        }
    })
});   
