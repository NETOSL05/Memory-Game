document.addEventListener('DOMContentLoaded', () => {
    const finalPlayer = document.querySelector('.final-player');
    const finalTime = document.querySelector('.final-time');
    const returnButton = document.getElementById('return-button');

    finalPlayer.innerHTML = localStorage.getItem('player');
    finalTime.innerHTML = localStorage.getItem('finalTime');

    returnButton.addEventListener('click', () => {
        window.location.href = 'index.html'; // Substitua 'index.html' pelo caminho correto para a tela de login
    });
});
