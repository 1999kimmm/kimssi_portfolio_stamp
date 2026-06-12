const hero = document.querySelector(".hero");

let lastStampTime = 0;
const stampDelay = 180;
const stampLife = 2600;

function createStamp(x, y) {
  const stamp = document.createElement("div");
  stamp.className = "stamp";
  stamp.innerText = "K!MSSi DESIGN";

  const rotation = Math.random() * 24 - 12;

  stamp.style.left = `${x}px`;
  stamp.style.top = `${y}px`;
  stamp.style.transform = `
    translate(-50%, -50%)
    rotate(${rotation}deg)
  `;

  hero.appendChild(stamp);

  setTimeout(() => {
    stamp.classList.add("fade");
  }, 1200);

  setTimeout(() => {
    stamp.remove();
  }, stampLife);
}

window.addEventListener("pointermove", (e) => {
  const now = Date.now();

  if (now - lastStampTime < stampDelay) return;

  lastStampTime = now;
  createStamp(e.clientX, e.clientY);
});