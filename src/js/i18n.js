// src/js/i18n.js

// Asegurarnos de tener un objeto global donde guardar las traducciones
window.I18N_TRANSLATIONS = window.I18N_TRANSLATIONS || {};

// Diccionario de ejemplo; aquí irían tus textos reales
const LOCAL_I18N_TRANSLATIONS = {
    de: {
        lang_code: "DE",
        lang_title: "Sprache wählen",
        lang_sub: "Bitte wähle deine Sprache · Please choose your language.",
        lang_saved: "Deine Auswahl wird für zukünftige Besuche gespeichert.",
        header_pill: "Prototyp · Werkstatt-Wizard",
        header_title: "Neuer Werkstattauftrag",
        header_flow: "Start → Service → Fahrzeug → Termin → Preis",
        step1_label: "Start",
        step2_label: "Service",
        step3_label: "Fahrzeug",
        step4_label: "Termin",
        step5_label: "Preis",

        s0_title: "Start · Vorgang auswählen",
        s0_sub: "Wähle, welchen Prozess du für den Kunden starten möchtest.",
        s0_tile1_title: "Neuer Reparaturauftrag",
        s0_tile1_hint: "Standardannahme mit Planung & Kostenschätzung.",
        s0_tile2_title: "Schneller Termin",
        s0_tile2_hint: "Nur einen Termin reservieren.",
        s0_tile3_title: "Remote-Kostenvoranschlag",
        s0_tile3_hint: "Fotos hochladen, Angebot erhalten.",
        s0_hint: "Schritt 1 von 5",
        s0_next: "Weiter →",

        s1_title: "Service · Was wird benötigt?",
        s1_sub: "Wähle passende Servicepakete aus.",
        s1_chip_duration: "Dauer: 2,5 h",
        s1_chip_mechanic: "Empf.: Mechaniker A (HV)",
        s1_chip_priority: "Priorität: normal",
        s1_prev: "← Zurück",
        s1_next: "Weiter: Fahrzeug →",

        s2_title: "Fahrzeug · Basisdaten",
        s2_sub: "Fahrzeuginfo eingeben oder bestätigen.",
        s2_prev: "← Zurück",
        s2_next: "Weiter: Termin →",

        s3_title: "Termin · Verfügbarkeit",
        s3_sub: "Automatische Vorschläge basierend auf Dauer & Mechanikern.",
        s3_label_suggestions: "Vorgeschlagene Zeiten",
        s3_prev: "← Zurück",
        s3_next: "Weiter: Preis →",

        s4_title: "Preis · Zusammenfassung",
        s4_sub: "Überprüfe Arbeitszeit, Teile und Gesamtkosten.",
        s4_prev: "← Zurück",
        s4_submit: "Auftrag erstellen ✓"
    },

    en: {
        lang_code: "EN",
        lang_title: "Choose language",
        lang_sub: "Please choose your language.",
        lang_saved: "Your choice will be saved for future visits.",
        header_pill: "Prototype · Workshop wizard",
        header_title: "New workshop order",
        header_flow: "Start → Service → Vehicle → Appointment → Price",
        step1_label: "Start",
        step2_label: "Service",
        step3_label: "Vehicle",
        step4_label: "Appointment",
        step5_label: "Price",

        s0_title: "Start · Choose process",
        s0_sub: "Select which process you want to start for the customer.",
        s0_tile1_title: "New repair order",
        s0_tile1_hint: "Standard intake with planning & cost estimate.",
        s0_tile2_title: "Quick appointment",
        s0_tile2_hint: "Reserve a time slot only.",
        s0_tile3_title: "Remote estimate",
        s0_tile3_hint: "Upload photos and receive an offer.",
        s0_hint: "Step 1 of 5",
        s0_next: "Next →",

        s1_title: "Service · What is needed?",
        s1_sub: "Select the appropriate service packages.",
        s1_chip_duration: "Duration: 2.5 h",
        s1_chip_mechanic: "Rec.: Mechanic A (HV)",
        s1_chip_priority: "Priority: normal",
        s1_prev: "← Back",
        s1_next: "Next: Vehicle →",

        s2_title: "Vehicle · Basic data",
        s2_sub: "Enter or confirm vehicle information.",
        s2_prev: "← Back",
        s2_next: "Next: Appointment →",

        s3_title: "Appointment · Availability",
        s3_sub: "Automatic suggestions based on duration and mechanics.",
        s3_label_suggestions: "Suggested times",
        s3_prev: "← Back",
        s3_next: "Next: Price →",

        s4_title: "Price · Summary",
        s4_sub: "Check working time, parts and total cost.",
        s4_prev: "← Back",
        s4_submit: "Create order ✓"
    },

    es: {
        lang_code: "ES",
        lang_title: "Elegir idioma",
        lang_sub: "Por favor, elige tu idioma.",
        lang_saved: "Tu elección se guardará para futuras visitas.",
        header_pill: "Prototipo · Asistente de taller",
        header_title: "Nuevo encargo de taller",
        header_flow: "Inicio → Servicio → Vehículo → Cita → Precio",
        step1_label: "Inicio",
        step2_label: "Servicio",
        step3_label: "Vehículo",
        step4_label: "Cita",
        step5_label: "Precio",

        s0_title: "Inicio · Elegir proceso",
        s0_sub: "Elige qué proceso quieres iniciar para el cliente.",
        s0_tile1_title: "Nuevo encargo de reparación",
        s0_tile1_hint: "Entrada estándar con planificación y presupuesto.",
        s0_tile2_title: "Cita rápida",
        s0_tile2_hint: "Reservar solo una franja horaria.",
        s0_tile3_title: "Presupuesto remoto",
        s0_tile3_hint: "Subir fotos y recibir una oferta.",
        s0_hint: "Paso 1 de 5",
        s0_next: "Siguiente →",

        s1_title: "Servicio · ¿Qué necesita el vehículo?",
        s1_sub: "Selecciona paquetes de servicio adecuados.",
        s1_chip_duration: "Duración: 2,5 h",
        s1_chip_mechanic: "Recom.: Mecánico A (HV)",
        s1_chip_priority: "Prioridad: normal",
        s1_prev: "← Atrás",
        s1_next: "Siguiente: Vehículo →",

        s2_title: "Vehículo · Datos básicos",
        s2_sub: "Introduce o confirma la información del vehículo.",
        s2_prev: "← Atrás",
        s2_next: "Siguiente: Cita →",

        s3_title: "Cita · Disponibilidad",
        s3_sub: "Sugerencias automáticas según duración y mecánicos.",
        s3_label_suggestions: "Horas sugeridas",
        s3_prev: "← Atrás",
        s3_next: "Siguiente: Precio →",

        s4_title: "Precio · Resumen",
        s4_sub: "Revisa tiempo de trabajo, piezas y coste total.",
        s4_prev: "← Atrás",
        s4_submit: "Crear orden ✓"
    },

    fr: {
        lang_code: "FR",
        lang_title: "Choisir la langue",
        lang_sub: "Merci de choisir votre langue.",
        lang_saved: "Votre choix sera mémorisé pour vos prochaines visites.",
        header_pill: "Prototype · Assistant atelier",
        header_title: "Nouvelle commande atelier",
        header_flow: "Départ → Service → Véhicule → Rendez-vous → Prix",
        step1_label: "Départ",
        step2_label: "Service",
        step3_label: "Véhicule",
        step4_label: "Rendez-vous",
        step5_label: "Prix",

        s0_title: "Départ · Choisir le processus",
        s0_sub: "Choisissez le processus que vous souhaitez démarrer pour le client.",
        s0_tile1_title: "Nouvelle commande de réparation",
        s0_tile1_hint: "Réception standard avec planification et devis.",
        s0_tile2_title: "Rendez-vous rapide",
        s0_tile2_hint: "Réserver uniquement un créneau horaire.",
        s0_tile3_title: "Devis à distance",
        s0_tile3_hint: "Téléchargez des photos et recevez une offre.",
        s0_hint: "Étape 1 sur 5",
        s0_next: "Suivant →",

        s1_title: "Service · Besoin du véhicule",
        s1_sub: "Sélectionnez les forfaits de service adaptés.",
        s1_chip_duration: "Durée : 2,5 h",
        s1_chip_mechanic: "Recommandé : Mécanicien A (HV)",
        s1_chip_priority: "Priorité : normale",
        s1_prev: "← Retour",
        s1_next: "Suivant : Véhicule →",

        s2_title: "Véhicule · Données de base",
        s2_sub: "Saisissez ou confirmez les informations du véhicule.",
        s2_prev: "← Retour",
        s2_next: "Suivant : Rendez-vous →",

        s3_title: "Rendez-vous · Disponibilité",
        s3_sub: "Propositions automatiques selon durée et ressources.",
        s3_label_suggestions: "Créneaux proposés",
        s3_prev: "← Retour",
        s3_next: "Suivant : Prix →",

        s4_title: "Prix · Récapitulatif",
        s4_sub: "Vérifiez temps de travail, pièces et coût total.",
        s4_prev: "← Retour",
        s4_submit: "Créer la commande ✓"
    },

    it: {
        lang_code: "IT",
        lang_title: "Scegli la lingua",
        lang_sub: "Per favore, scegli la tua lingua.",
        lang_saved: "La tua scelta verrà salvata per le visite future.",
        header_pill: "Prototipo · Assistente officina",
        header_title: "Nuovo ordine officina",
        header_flow: "Inizio → Servizio → Veicolo → Appuntamento → Prezzo",
        step1_label: "Inizio",
        step2_label: "Servizio",
        step3_label: "Veicolo",
        step4_label: "Appuntamento",
        step5_label: "Prezzo",

        s0_title: "Inizio · Scegli processo",
        s0_sub: "Scegli quale processo vuoi avviare per il cliente.",
        s0_tile1_title: "Nuovo ordine di riparazione",
        s0_tile1_hint: "Accettazione standard con pianificazione e preventivo.",
        s0_tile2_title: "Appuntamento rapido",
        s0_tile2_hint: "Prenota solo una fascia oraria.",
        s0_tile3_title: "Preventivo remoto",
        s0_tile3_hint: "Carica le foto e ricevi un'offerta.",
        s0_hint: "Passo 1 di 5",
        s0_next: "Avanti →",

        s1_title: "Servizio · Di cosa ha bisogno il veicolo?",
        s1_sub: "Seleziona i pacchetti di servizio appropriati.",
        s1_chip_duration: "Durata: 2,5 h",
        s1_chip_mechanic: "Cons.: Meccanico A (HV)",
        s1_chip_priority: "Priorità: normale",
        s1_prev: "← Indietro",
        s1_next: "Avanti: Veicolo →",

        s2_title: "Veicolo · Dati di base",
        s2_sub: "Inserisci o conferma le informazioni del veicolo.",
        s2_prev: "← Indietro",
        s2_next: "Avanti: Appuntamento →",

        s3_title: "Appuntamento · Disponibilità",
        s3_sub: "Proposte automatiche in base a durata e risorse.",
        s3_label_suggestions: "Orari proposti",
        s3_prev: "← Indietro",
        s3_next: "Avanti: Prezzo →",

        s4_title: "Prezzo · Riepilogo",
        s4_sub: "Controlla tempi di lavoro, ricambi e costo totale.",
        s4_prev: "← Indietro",
        s4_submit: "Crea ordine ✓"
    }
};

// Fusionar nuestras traducciones locales en el objeto global
Object.assign(window.I18N_TRANSLATIONS, LOCAL_I18N_TRANSLATIONS);

function applyLang(lang) {
    const dict = window.I18N_TRANSLATIONS[lang] || window.I18N_TRANSLATIONS["de"];

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
        lang = window.I18N_TRANSLATIONS[nav] ? nav : "de";
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
            overlay.style.opacity = "1";
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    initLanguage();
});
