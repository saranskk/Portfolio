const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Sticky Navbar
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 50);
});

// Scroll Reveal
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll("section").forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});
// Typing effect
const texts = [
   "UI/UX Designer | Frontend Developer",
  "Java Full Stack Developer",
  "I build clean & scalable web apps",
  "Fresher with strong fundamentals"
];

let i = 0, j = 0;
const speed = 80;
const typingEl = document.querySelector(".typing");

function type() {
  if (j < texts[i].length) {
    typingEl.textContent += texts[i][j++];
    setTimeout(type, speed);
  } else {
    setTimeout(erase, 1500);
  }
}

function erase() {
  if (j > 0) {
    typingEl.textContent = texts[i].substring(0, --j);
    setTimeout(erase, speed / 2);
  } else {
    i = (i + 1) % texts.length;
    setTimeout(type, 500);
  }
}

type();

