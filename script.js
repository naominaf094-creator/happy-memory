// Simple Audio Toggle functionality
const musicBtn = document.getElementById('musicToggle');
const audio = document.getElementById('bg-music');

musicBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play().then(() => {
            musicBtn.innerText = "⏸ Pause Music";
        }).catch(err => {
            alert("To stream background music, make sure to add a valid song link or rename your audio file to 'music.mp3' in this project folder!");
        });
    } else {
        audio.pause();
        musicBtn.innerText = "♫ Play Music";
    }
});
