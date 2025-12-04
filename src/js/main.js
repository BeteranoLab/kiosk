// LÓGICA DEL WIZARD
const steps = [...document.querySelectorAll('[id^="step-"]')];
const chips = [...document.querySelectorAll('[data-step-chip]')];
let current = 0;

function upd() {
    steps.forEach((s, i) => (s.style.display = i === current ? "flex" : "none"));
    chips.forEach((c, i) => {
        c.classList.remove("active", "done");
        if (i === current) c.classList.add("active");
        if (i < current) c.classList.add("done");
    });
}

// LÓGICA DE NAVEGACIÓN ENTRE PASOS
document.body.addEventListener("click", (e) => {
    if (e.target.closest("[data-next]")) {
        if (current < steps.length - 1) {
            current++;
            upd();
        }
    }
    if (e.target.closest("[data-prev]")) {
        if (current > 0) {
            current--;
            upd();
        }
    }
    const c = e.target.closest("[data-step-chip]");
    if (c) {
        current = Number(c.dataset.stepChip);
        upd();
    }
});

// ==== LÓGICA DE IDIOMA ====
let currentLang = localStorage.getItem("beteranoLang") || null;
const langOverlay = document.getElementById("lang-overlay");

if (currentLang) {
    // Ya se eligió idioma antes
    langOverlay.style.display = "none";
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const lang = btn.getAttribute("data-lang");
        currentLang = lang;
        localStorage.setItem("beteranoLang", lang);

        // Animación de fade out
        langOverlay.style.opacity = "0";
        setTimeout(() => {
            langOverlay.style.display = "none";
        }, 250);

        // Aquí en el futuro podremos llamar a applyLang(lang)
    });
});

// Estado inicial
upd();
