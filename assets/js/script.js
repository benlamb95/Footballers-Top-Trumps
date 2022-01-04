/* -- Audio variables -- */

var backgroundAudio = new Audio('/assets/audio/crowd.wav');
var playPauseIcon = document.getElementById('play-pause');
backgroundAudio.volume = 0.3;
backgroundAudio.loop = true;




/* -- Play/Pause Music Script -- */
// Video from https://www.youtube.com/watch?v=wffK2OIt8u0 

function playPause() {
    if (count == 0) {
        count = 1;
        backgroundAudio.play();
        playPauseIcon.className = "fas fa-volume-up";
    } else {
        count = 0;
        backgroundAudio.pause();
        playPauseIcon.className = "fas fa-volume-mute";
    }
};



/* -- Modal Script -- */

var modal = document.getElementById("playModal")

var button = document.getElementById("how-to-play")

var span = document.getElementsByClassName("close")[0]

button.onclick = function () {
    modal.style.display = "block"
}

span.onclick = function () {
    modal.style.display = "none"
}

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}