const image = document.querySelector('.icon');
const background = document.querySelector('.background');

let position = 0;
let isJumping = false;
let userPoints = 0;

const handleKeyup = (event) => {
    if (event.keyCode === 32 || event.keyCode === 38) {
        if (!isJumping)
            jump();
    }
}

const jump = () => {
    isJumping = true;
    console.log(userPoints);
    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
                    userPoints += 1;
                } else {
                    position -= 20;
                    image.style.bottom = position + 'px';
                }
            }, 20);

        } else {
            position += 20;
            image.style.bottom = position + 'px';
        }
    }, 20);
}

const createCactus = () => {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let random = Math.random() * 6000;

    cactus.classList.add('cactus'); // adicionando a classe para o cacto
    cactus.style.left = 1000 + 'px';
    background.appendChild(cactus);

    let leftInterval = setInterval(() => {

        if (cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else if (cactusPosition > 0 && cactusPosition < 60 && position < 60) {
            clearInterval(leftInterval);
            document.body.innerHTML = `<div class="gameover"><span>Fim<span><p>Pontuação: <strong>${userPoints}</strong></p></div>`
            console.log(userPoints)
        } else {
            cactusPosition -= 10; //aumentar tempo
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, random);
}

createCactus();
document.addEventListener('keyup', handleKeyup)