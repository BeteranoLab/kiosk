// assets/js/i18n.js

// Diccionario reducido de ejemplo; aquí irían tus textos reales
const I18N_TRANSLATIONS = {
    de: { lang_code: "DE", lang_title: "Sprache wählen", lang_sub: "Bitte wähle deine Sprache · Please choose your language.", lang_saved: "Deine Auswahl wird für zukünftige Besuche gespeichert.", header_pill: "Prototyp · Werkstatt-Wizard", header_title: "Neuer Werkstattauftrag", header_flow: "Start → Service → Fahrzeug → Termin → Preis", step1_label: "Start", step2_label: "Service", step3_label: "Fahrzeug", step4_label: "Termin", step5_label: "Preis", s0_title: "Start · Vorgang auswählen", s0_sub: "Wähle, welchen Prozess du für den Kunden starten möchtest.", s0_tile1_title: "Neuer Reparaturauftrag", s0_tile1_hint: "Standardannahme mit Planung & Kostenschätzung.", s0_tile2_title: "Schneller Termin", s0_tile2_hint: "Nur einen Termin reservieren.", s0_tile3_title: "Remote-Kostenvoranschlag", s0_tile3_hint: "Fotos hochladen, Angebot erhalten.", s0_hint: "Schritt 1 von 5", s0_next: "Weiter →", s1_title: "Service · Was wird benötigt?", s1_sub: "Wähle passende Servicepakete aus.", s1_chip_duration: "Dauer: 2,5 h", s1_chip_mechanic: "Empf.: Mechaniker A (HV)", s1_chip_priority: "Priorität: normal", s1_prev: "← Zurück", s1_next: "Weiter: Fahrzeug →", s2_title: "Fahrzeug · Basisdaten", s2_sub: "Fahrzeuginfo eingeben oder bestätigen.", s2_prev: "← Zurück", s2_next: "Weiter: Termin →", s3_title: "Termin · Verfügbarkeit", s3_sub: "Automatische Vorschläge basierend auf Dauer & Mechanikern.", s3_label_suggestions: "Vorgeschlagene Zeiten", s3_prev: "← Zurück", s3_next: "Weiter: Preis →", s4_title: "Preis · Zusammenfassung", s4_sub: "Überprüfe Arbeitszeit, Teile und Gesamtkosten.", s4_prev: "← Zurück", s4_submit: "Auftrag erstellen ✓" },
    en: { lang_code: "EN", lang_title: "Choose language", lang_sub: "Please choose your language.", lang_saved: "Your choice will be saved for future visits.", header_pill: "Prototype · Workshop wizard", header_title: "New workshop order", header_flow: "Start → Service → Vehicle → Appointment → Price", step1_label: "Start", step2_label: "Service", step3_label: "Vehicle", step4_label: "Appointment", step5_label: "Price", s0_title: "Start · Choose process", s0_sub: "Select which process you want to start for the customer.", s0_tile1_title: "New repair order", s0_tile1_hint: "Standard intake with planning & cost estimate.", s0_tile2_title: "Quick appointment", s0_tile2_hint: "Reserve a time slot only.", s0_tile3_title: "Remote estimate", s0_tile3_hint: "Upload photos and receive an offer.", s0_hint: "Step 1 of 5", s0_next: "Next →", s1_title: "Service · What is needed?", s1_sub: "Select the appropriate service packages.", s1_chip_duration: "Duration: 2.5 h", s1_chip_mechanic: "Rec.: Mechanic A (HV)", s1_chip_priority: "Priority: normal", s1_prev: "← Back", s1_next: "Next: Vehicle →", s2_title: "Vehicle · Basic data", s2_sub: "Enter or confirm vehicle information.", s2_prev: "← Back", s2_next: "Next: Appointment →", s3_title: "Appointment · Availability", s3_sub: "Automatic suggestions based on duration and mechanics.", s3_label_suggestions: "Suggested times", s3_prev: "← Back", s3_next: "Next: Price →", s4_title: "Price · Summary", s4_sub: "Check working time, parts and total cost.", s4_prev: "← Back", s4_submit: "Create order ✓" },
    es: { lang_code: "ES", lang_title: "Elegir idioma", lang_sub: "Por favor, elige tu idioma.", lang_saved: "Tu elección se guardará para futuras visitas.", header_pill: "Prototipo · Asistente de taller", header_title: "Nuevo encargo de taller", header_flow: "Inicio → Servicio → Vehículo → Cita → Precio", step1_label: "Inicio", step2_label: "Servicio", step3_label: "Vehículo", step4_label: "Cita", step5_label: "Precio", s0_title: "Inicio · Elegir proceso", s0_sub: "Elige qué proceso quieres iniciar para el cliente.", s0_tile1_title: "Nuevo encargo de reparación", s0_tile1_hint: "Entrada estándar con planificación y presupuesto.", s0_tile2_title: "Cita rápida", s0_tile2_hint: "Reservar solo una franja horaria.", s0_tile3_title: "Presupuesto remoto", s0_tile3_hint: "Subir fotos y recibir una oferta.", s0_hint: "Paso 1 de 5", s0_next: "Siguiente →", s1_title: "Servicio · ¿Qué necesita el vehículo?", s1_sub: "Selecciona paquetes de servicio adecuados.", s1_chip_duration: "Duración: 2,5 h", s1_chip_mechanic: "Recom.: Mecánico A (HV)", s1_chip_priority: "Prioridad: normal", s1_prev: "← Atrás", s1_next: "Siguiente: Vehículo →", s2_title: "Vehículo · Datos básicos", s2_sub: "Introduce o confirma la información del vehículo.", s2_prev: "← Atrás", s2_next: "Siguiente: Cita →", s3_title: "Cita · Disponibilidad", s3_sub: "Sugerencias automáticas según duración y mecánicos.", s3_label_suggestions: "Horas sugeridas", s3_prev: "← Atrás", s3_next: "Siguiente: Precio →", s4_title: "Precio · Resumen", s4_sub: "Revisa tiempo de trabajo, piezas y coste total.", s4_prev: "← Atrás", s4_submit: "Crear orden ✓" }
    // Puedes añadir fr / it igual que antes...
};

function applyLang(lang) {
    const dict = I18N_TRANSLATIONS[lang] || I18N_TRANSLATIONS["de"];

    // Textos con data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
        const key = el.getAttribute("data-i18n");
        if (key && dict[key]) {
            el.textContent = dict[key];
        }
    });

    // Actualizar código de idioma en el botón del header
    const currentSpan = document.getElementById("lang-current");
    if (currentSpan) {
        currentSpan.textContent = dict.lang_code || lang.toUpperCase();
    }
}

function initLanguage() {
    const overlay = document.getElementById("lang-overlay");
    const toggleBtn = document.getElementById("lang-toggle");

    let lang = localStorage.getItem("beteranoLang");

    if (!lang) {
        // Detectamos idioma del navegador, pero NO guardamos todavía
        const nav = (navigator.language || "de").slice(0, 2).toLowerCase();
        lang = I18N_TRANSLATIONS[nav] ? nav : "de";
    } else {
        // Ya había idioma guardado → ocultamos overlay
        if (overlay) overlay.style.display = "none";
    }

    applyLang(lang);

    // Cambiar idioma al hacer clic en los botones del overlay
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
            const chosen = btn.getAttribute("data-lang") || "de";
            localStorage.setItem("beteranoLang", chosen);
            applyLang(chosen);

            if (overlay) {
                overlay.style.opacity = "0";
                setTimeout(() => {
                    overlay.style.display = "none";
                }, 250);
            }
        });
    });

    // Reabrir overlay desde el botón del header
    if (toggleBtn && overlay) {
        toggleBtn.addEventListener("click", () => {
            overlay.style.display = "flex";
            // Forzar reflow para que la transición funcione si quieres
            // void overlay.offsetWidth;
            overlay.style.opacity = "1";
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
});
