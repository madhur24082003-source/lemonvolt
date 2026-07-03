// LemonVolt Website JavaScript

// Battery charging animation
const battery = document.getElementById("batteryLevel");

let charge = 0;

setInterval(() => {
    charge += 5;

    if (charge > 100) {
        charge = 0;
    }

    battery.style.height = charge + "%";
}, 150);

// Dark Mode
const btn = document.getElementById("themeBtn");

btn.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        btn.innerHTML = "☀️";
    } else {
        btn.innerHTML = "🌙";
    }
});

// Reveal animation
const cards = document.querySelectorAll(".card");

function revealCards() {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
}

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(60px)";
    card.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealCards);
window.addEventListener("load", revealCards);
