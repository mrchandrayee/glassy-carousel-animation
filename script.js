const cards = [...document.querySelectorAll(".glass-card")];
const dots = [...document.querySelectorAll(".dot")];
const previous = document.getElementById("previous");
const next = document.getElementById("next");
const caption = document.getElementById("carouselCaption");

const titles = [
  "Mountain Lake", "Misty Mountains", "Forest River",
  "Sunset Skater", "Ocean Cliffs", "Desert Dusk", "Snowy Peaks"
];

let activeIndex = 3;

function renderCarousel() {
  const count = cards.length;
  cards.forEach((card, index) => {
    let offset = index - activeIndex;
    if (offset > count / 2) offset -= count;
    if (offset < -count / 2) offset += count;

    const distance = Math.abs(offset);
    const x = offset * 82;
    const rotateY = offset * -17;
    const scale = Math.max(.68, 1 - distance * .105);
    const z = 140 - distance * 78;
    const opacity = distance > 3 ? 0 : Math.max(.22, 1 - distance * .19);
    const blur = distance > 2 ? 2.2 : distance * .45;

    card.style.transform =
      `translateX(calc(-50% + ${x}px)) translateZ(${z}px) rotateY(${rotateY}deg) scale(${scale})`;
    card.style.opacity = String(opacity);
    card.style.filter = `blur(${blur}px)`;
    card.style.zIndex = String(20 - distance);
    card.style.pointerEvents = distance > 2 ? "none" : "auto";
    card.classList.toggle("active", offset === 0);
    card.setAttribute("aria-current", offset === 0 ? "true" : "false");
    card.tabIndex = offset === 0 ? 0 : -1;
  });

  dots.forEach((dot, index) => {
    const active = index === activeIndex;
    dot.classList.toggle("active", active);
    dot.setAttribute("aria-pressed", String(active));
  });
  caption.textContent = titles[activeIndex];
}

function goTo(index) {
  activeIndex = (index + cards.length) % cards.length;
  renderCarousel();
}

previous.addEventListener("click", () => goTo(activeIndex - 1));
next.addEventListener("click", () => goTo(activeIndex + 1));

cards.forEach((card, index) => {
  card.addEventListener("click", () => goTo(index));
});
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => goTo(index));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") goTo(activeIndex - 1);
  if (event.key === "ArrowRight") goTo(activeIndex + 1);
});

let touchStartX = 0;
const stage = document.querySelector(".carousel-stage");
stage.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
}, { passive: true });
stage.addEventListener("touchend", (event) => {
  const delta = event.changedTouches[0].clientX - touchStartX;
  if (Math.abs(delta) > 35) goTo(activeIndex + (delta < 0 ? 1 : -1));
}, { passive: true });

renderCarousel();
