const audio = document.getElementById("audio");
const areas = document.getElementsByTagName("area");

audio.volume = 0.17;

setTimeout(function () {
  setInterval(function () {
    if (audio.volume > 0) {
      audio.volume -= 0.01;
  }}, 2000);
}, 2000);

