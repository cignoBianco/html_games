
const simpleSound = new Audio();
simpleSound.src = "music.mp3";
// sound.play();

const audio = document.createElement("audio");
let mp3Support;

if (audio.canPlayType) {
    mp3Support = "" !== audio.canPlayType("audio/mpeg");
} else {
    mp3Support = false;
}

let soundFileExtn = mp3Support ? ".mp3" : undefined;

if (soundFileExtn) {
    var sound = new Audio();
    // Load sound file with the detected extension

    sound.addEventListener("canplaythrough", function() {
        sound.play();
    });

    sound.src = "music" + soundFileExtn;
}
