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

document.addEventListener('DOMContentLoaded', function() {
    const addAudioBtn = document.getElementById('addAudioBtn');
    const audioFileInput = document.getElementById('audioFileInput');
    let audioCounter = 11; // 从11开始，因为已有10个音频按钮

    addAudioBtn.addEventListener('click', function() {
        const file = audioFileInput.files[0];
        if (!file) {
            alert('请选择一个音频文件');
            return;
        }

        const fileName = file.name;
        const fileUrl = URL.createObjectURL(file);
        const fileNameWithoutExtension = fileName.substring(0, fileName.lastIndexOf('.'));

        const main = document.querySelector('main');

        // 创建新的按钮
        const newButton = document.createElement('button');
        newButton.className = 'playAudioBtn';
        newButton.dataset.audio = `audio${audioCounter}`;
        newButton.textContent = fileNameWithoutExtension;

        // 创建新的音频元素
        const newAudio = document.createElement('audio');
        newAudio.id = `audio${audioCounter}`;
        newAudio.src = fileUrl;

        // 将新按钮和音频元素添加到main中
        main.appendChild(newButton);
        main.appendChild(newAudio);

        // 更新音频计数器
        audioCounter++;

        // 为新按钮添加事件监听器
        newButton.addEventListener('click', function() {
            newAudio.play();
        });
    });

    // 为现有的音频按钮添加事件监听器
    document.querySelectorAll('.playAudioBtn').forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.dataset.audio;
            const audioElement = document.getElementById(audioId);
            if (audioElement) {
                audioElement.play();
            }
        });
    });
});