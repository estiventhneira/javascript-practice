import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector("video");
const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause()],
});

const Playbtn = document.getElementById("Play-Pause");
Playbtn.onclick = function () {
  if (player.media.paused) {
    return player.play();
  } else {
    return player.pause();
  }
};

const Mutedbtn = document.getElementById("muted");

Mutedbtn.onclick = function () {
  if (player.media.muted) {
    player.unmute();
  } else {
    player.mute();
  }
};

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/sw.js").catch((error) => {
    console.log(error.message);
  });
}
