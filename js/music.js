const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

if(musicBtn){
  musicBtn.addEventListener("click",()=>{
    if(music.paused){ music.play(); musicBtn.innerText="🔊"; }
    else { music.pause(); musicBtn.innerText="🎵"; }
  });
}
