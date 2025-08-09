tailwind.config = {
  theme: {
    extend: {
      colors: {
        "red-primary": "#DC2626",
        "red-secondary": "#EF4444",
        "red-accent": "#FCA5A5",
        "dark-bg": "#0F0F0F",
        "dark-card": "#1A1A1A",
      },
    },
  },
};

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileMenu = document.getElementById("mobileMenu");

mobileMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Scroll progress indicator
window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  document.getElementById("scrollIndicator").style.width = scrollPercent + "%";
});
