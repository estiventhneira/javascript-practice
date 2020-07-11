import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Ads from "./plugins/ads/index";

const video = document.querySelector("video");
const player = new MediaPlayer({
  element: video,
  plugins: [new AutoPlay(), new AutoPause(), new Ads()],
});

const Playbtn: HTMLElement = document.getElementById("Play-Pause");
Playbtn.onclick = function () {
  if (player.media.paused) {
    return player.play();
  } else {
    return player.pause();
  }
};

const Mutedbtn: HTMLElement = document.getElementById("muted");

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
