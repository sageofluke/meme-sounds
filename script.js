const memeSounds = [
    'sounds/cola high pitch.mp3',
    'sounds/cola.mp3',
    'sounds/hehehe.mp3',
    'sounds/potato chipis.mp3',
    'sounds/potato chips high pitch.mp3',
    'sounds/pudingg.mp3',
    'sounds/taehyung.mp3',
    'sounds/kuru1.mp3',
    'sounds/kuru2.mp3',
    'sounds/kuruto.mp3',
    // Add more meme sound file paths here
];

const soundElement = document.getElementById('sound');
const playButton = document.getElementById('playButton');

function getRandomSound() {
    const randomIndex = Math.floor(Math.random() * memeSounds.length);
    return memeSounds[randomIndex];
}

playButton.addEventListener('click', () => {
    const randomSound = getRandomSound();
    soundElement.src = randomSound;
    soundElement.play();
});
