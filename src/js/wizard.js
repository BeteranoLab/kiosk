// src/js/wizard.js
// Lógica del wizard (Start → Service → Fahrzeug → Termin → Preis)

(function () {
    const steps = Array.from(document.querySelectorAll('[id^="step-"]'));
    const chips = Array.from(document.querySelectorAll('[data-step-chip]'));
    let current = 0;

    function updateSteps() {
        steps.forEach((step, index) => {
            step.style.display = index === current ? "flex" : "none";
        });

        chips.forEach((chip, index) => {
            chip.classList.remove("active", "done");
            if (index === current) chip.classList.add("active");
            if (index < current) chip.classList.add("done");
        });
    }

    function onClick(e) {
        if (e.target.closest("[data-next]")) {
            if (current < steps.length - 1) {
                current++;
                updateSteps();
            }
        }

        if (e.target.closest("[data-prev]")) {
            if (current > 0) {
                current--;
                updateSteps();
            }
        }

        const chip = e.target.closest("[data-step-chip]");
        if (chip) {
            const idx = Number(chip.dataset.stepChip);
            if (!Number.isNaN(idx)) {
                current = idx;
                updateSteps();
            }
        }
    }

    document.addEventListener("DOMContentLoaded", () => {
        updateSteps();
        document.body.addEventListener("click", onClick);
    });
})();
