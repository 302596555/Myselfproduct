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
const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A6', '#A633FF'];
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
