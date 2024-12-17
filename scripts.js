// scripts.js

// 播放音频功能
const playButtons = document.querySelectorAll('.playAudioBtn');

playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const audioId = button.getAttribute('data-audio');
        const audio = document.getElementById(audioId);
        if (audio) {
            audio.play();
        }
    });
});