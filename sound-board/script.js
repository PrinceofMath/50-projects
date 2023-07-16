const buttons = document.querySelector(".buttons");
const audios = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

audios.forEach((sound) => {
  let btn = document.createElement("button");
  btn.innerHTML = sound;
  btn.classList.add("btn");
  btn.addEventListener("click", () => {
    stopSongs();
    document.getElementById(sound).play();
  });

  buttons.appendChild(btn);
});

function stopSongs() {
  audios.forEach((sound) => {
    let s = document.getElementById(sound);
    s.pause();
    s.currentTime = 0;
  });
}
