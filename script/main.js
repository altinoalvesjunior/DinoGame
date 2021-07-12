const image = document.querySelector('.icon');
const background = document.querySelector('.background');

let isJumping = false;

const handleKeyup = (event) => {
    if (event.keyCode === 32 || event.keyCode === 38) {
        if (!isJumping) {
            jump();
        }
    }
}

const jump = () => {
    let position = 0;
    isJumping = true;

    let upInterval = setInterval(() => {
        if (position >= 150) {
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if (position <= 0) {
                    clearInterval(downInterval);
                    isJumping = false;
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

    let leftInterval = setInterval (() => {

        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            background.removeChild(cactus);
        } else {
            cactusPosition -= 10; //aumentar tempo
            cactus.style.left = cactusPosition + 'px';
        }
    }, 20);

    setTimeout(createCactus, random);
}

createCactus();
document.addEventListener('keyup', handleKeyup)