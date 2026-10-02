function playSound(piano){
    const audio = document.getElementById(piano);
    if(audio){
        audio.currentTime = 0;
        audio.play();
    }
}
document.addEventListener("keydown", (e) => {
    playSound(e.key.toUpperCase());
});
document.querySelectorAll(".white, .black")
.forEach(key => {
    key.addEventListener("click", () => {
        playSound(key.innerText);
    });
});
