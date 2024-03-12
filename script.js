const toggleMenu = document.getElementById('toggle-menu');
const mobileMenu = document.getElementById('mobile-menu');

toggleMenu.addEventListener('click', function() {
    mobileMenu.classList.toggle('hidden');
});

// Tutup menu saat klik di luar area menu
document.addEventListener('click', function(event) {
    const isClickInsideMenu = mobileMenu.contains(event.target) || toggleMenu.contains(event.target);
    if (!isClickInsideMenu && !mobileMenu.classList.contains('hidden')) {
        mobileMenu.classList.add('hidden');
    }
});

// audio
const audioPlayer = document.getElementById('audio-player');
const playPauseBtn = document.getElementById('play-pause-btn');
const playIcon = document.getElementById('play-icon');
const pauseIcon = document.getElementById('pause-icon');
const volumeSlider = document.getElementById('volume-slider');
const volumeLabel = document.getElementById('volume-label');

playPauseBtn.addEventListener('click', () => {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
    } else {
        audioPlayer.pause();
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
    }
});

volumeSlider.addEventListener('input', () => {
    audioPlayer.volume = volumeSlider.value;
    volumeLabel.textContent = `${Math.round(volumeSlider.value * 100)}%`;
});

