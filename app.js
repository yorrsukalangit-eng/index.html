onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
const btn = document.getElementById("loveBtn");
const screen = document.getElementById("startScreen");
const audio = document.getElementById("bgm");

btn.addEventListener("click", () => {
  // Hilangkan layar tombol
  screen.style.display = "none";

  // Jalankan animasi bunga
  document.body.classList.remove("not-loaded");

  // Mainkan musik
  audio.play();
});