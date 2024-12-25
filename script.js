// Carrossel de fotos com essa princesa

const track = document.querySelector('.carousel-track');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

let startX = 0;
let endX = 0;

function updateCarousel(index) {

    if (index >= dots.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = dots.length - 1;
    } else {
        currentIndex = index;
    }

    const width = track.offsetWidth;
    const itemWidth = track.firstElementChild.offsetWidth + 20;
    track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
}

track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchmove', (e) => {
    endX = e.touches[0].clientX;
});

track.addEventListener('touchend', () => {
    if (startX > endX + 50) {
        currentIndex++;
    } else if (startX < endX - 50) {
        currentIndex--;
    }

    updateCarousel(currentIndex);
    startX = 0;
    endX = 0;
});

dots.forEach(dot => {
    dot.addEventListener('click', (e) => {
        const index = parseInt(e.target.getAttribute('data-index'));
        currentIndex = index;
        updateCarousel(index);
    });
});

updateCarousel(currentIndex);

// Contador de tempo desde que namoro com essa menina linda e maravilhosa

function calcularDiferenca() {
    const dataInicial = new Date('2024-05-23T22:11:00');
    const agora = new Date();

    if (agora < dataInicial) {
        document.getElementById('contador').innerText = "Ainda não chegou a data!";
        return;
    }

    let anos = agora.getFullYear() - dataInicial.getFullYear();
    let meses = agora.getMonth() - dataInicial.getMonth();
    let dias = agora.getDate() - dataInicial.getDate();
    let horas = agora.getHours() - dataInicial.getHours();
    let minutos = agora.getMinutes() - dataInicial.getMinutes();
    let segundos = agora.getSeconds() - dataInicial.getSeconds();

    if (segundos < 0) {
        segundos += 60;
        minutos--;
    }
    if (minutos < 0) {
        minutos += 60;
        horas--;
    }
    if (horas < 0) {
        horas += 24;
        dias--;
    }
    if (dias < 0) {
        const ultimoDiaMesAnterior = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
        dias += ultimoDiaMesAnterior;
        meses--;
    }
    if (meses < 0) {
        meses += 12;
        anos--;
    }

    document.getElementById('contador').innerHTML =
        `Namorando há ${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos, ${segundos} segundos. <br> 🥰💍`;
}

setInterval(calcularDiferenca, 1000)