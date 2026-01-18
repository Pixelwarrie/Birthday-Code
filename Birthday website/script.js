/* Reveal photos */
function reveal(card) {
  const img = card.querySelector("img");
  const text = card.querySelector("p");
  const cam = card.querySelector(".camera");

  if (img) img.style.display = "block";
  if (text) text.style.display = "none";
  if (cam) cam.style.display = "none";
}

/* Floating emojis */
const emojis = ["💖", "💗", "✨", "⭐", "🎈"];

function createFloatingEmoji() {
  const container = document.querySelector(".floating-container");
  if (!container) return;

  const emoji = document.createElement("div");
  emoji.className = "floating-emoji";
  emoji.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  emoji.style.left = Math.random() * 100 + "vw";
  emoji.style.fontSize = 18 + Math.random() * 24 + "px";
  emoji.style.animationDuration = 14 + Math.random() * 10 + "s";

  container.appendChild(emoji);

  setTimeout(() => {
    emoji.remove();
  }, 25000);
}

setInterval(createFloatingEmoji, 1200);
