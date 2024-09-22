window.onload = function() {
    let messages = document.querySelectorAll('.message');
    messages.forEach((msg, index) => {
        setTimeout(() => {
            msg.style.opacity = 1;
            msg.style.transform = 'translateY(0)';
        }, index * 1000);
    });
    createConfetti();
};

document.getElementById('startButton').onclick = function() {
    const audio = document.getElementById('birthdaySong');
    audio.play();
    showImages();
};

document.getElementById('changeColor').onclick = function() {
    const colors = ['#ffebcd', '#ffe4e1', '#e6e6fa', '#add8e6', '#ffdab9'];
    document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
};

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        confetti.style.backgroundColor = getRandomColor();
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDelay = Math.random() * 2 + 's'; // random delay
        document.body.appendChild(confetti);

        // Remove confetti after falling
        confetti.addEventListener('animationend', () => {
            confetti.remove();
        });
    }
}

function getRandomColor() {
    const colors = ['#ffcc00', '#ff6699', '#66ccff', '#ccff66', '#ffccff'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function showImages() {
    const leftImage = document.querySelector('.left');
    const rightImage = document.querySelector('.right');
    leftImage.style.display = 'block';
    rightImage.style.display = 'block';
}
const colors = ['#ffcc00', '#ff6699', '#66ccff', '#ccff66', '#ffccff'];
let index = 0;
let intervalId;

document.getElementById('startButton').addEventListener('click', () => {
    if (intervalId) clearInterval(intervalId); // Очистка интервала, если уже запущено
    intervalId = setInterval(() => {
        document.body.style.backgroundColor = colors[index];
        index = (index + 1) % colors.length;
    }, 1000); // Интервал смены цвета 1 секунда
});



  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-M4QC53TYQY');

  document.getElementById('startButton').addEventListener('click', function () {
    let confettiContainer = document.getElementById('confetti-container');

    // Создаем конфетти
    for (let i = 0; i < 250; i++) {
        let confetti;
        let shape = getRandomShape();

        // Если звезда, создаем SVG элемент
        if (shape === 'star') {
            confetti = createStar();
        } else {
            // Иначе создаем обычный div элемент для круга или квадрата
            confetti = document.createElement('div');
            confetti.classList.add('confetti');
            confetti.classList.add(shape); // Добавляем класс формы
            confetti.style.backgroundColor = getRandomColor();
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
        }

        // Задаем случайное положение и длительность анимации
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.animationDuration = Math.random() * 30 + 3 + 's';

        confettiContainer.appendChild(confetti);

        // Удаляем конфетти через 10 секунд
        setTimeout(function () {
            confetti.remove();
        }, 330000);
    }
});

// Функция для создания SVG звезды
function createStar() {
    let starSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    starSVG.setAttribute("viewBox", "0 0 24 24");
    starSVG.setAttribute("fill", getRandomColor());
    starSVG.setAttribute("class", "confetti star");
    starSVG.style.width = Math.random() * 15 + 10 + 'px';
    starSVG.style.height = starSVG.style.width;

    let starPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
    starPath.setAttribute("d", "M12 .587l3.668 7.429L24 9.753l-6 5.851L19.335 24 12 20.204 4.665 24 6 15.604 0 9.753l8.332-1.737z");
    starSVG.appendChild(starPath);

    return starSVG;
}
// Функция для рандомного выбора формы
function getRandomShape() {
    let shapes = ['circle', 'square', 'star'];
    return shapes[Math.floor(Math.random() * shapes.length)];
}

// Функция для рандомного цвета
function getRandomColor() {
    let colors = ['#FF5733', '#33FF57', '#5733FF', '#FFD700', '#FF69B4'];
    return colors[Math.floor(Math.random() * colors.length)];
}