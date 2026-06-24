

const translations = {
    fr: {
        nav_apropos: "A propos",
        nav_formations: "Formations",
        nav_experiences: "Experiences",
        nav_contact: "Contact",

        hero_titre: "Formateur en programmation",
        hero_description: "Je forme la prochaine generation de developpeurs africains",
        hero_cta: "Voir les formations",


        guides_titre: "Guides",
        guides_individuels: "Guides individuels",
        guides_packs: "Packs avantageux",
        guides_acheter: "Acheter",

        apropos_titre: "A propos",
        apropos_texte: "Fondateur de CodePowerPlus+, je propose des formations en programmation accessibles a l'Afrique francophone.",

        formations_titre: "Formations",
        formations_encours: "En cours",
        formations_avenir: "A venir",

        experiences_titre: "Experiences",

        contact_titre: "Contact",
        contact_texte: "Rejoins la communaute CodePowerPlus+"
    },
    en: {
        nav_apropos: "About",
        nav_formations: "Courses",
        nav_experiences: "Experience",
        nav_contact: "Contact",

        hero_titre: "Programming Trainer",
        hero_description: "Training the next generation of African developers",
        hero_cta: "View courses",

        apropos_titre: "About",
        apropos_texte: "Founder of CodePowerPlus+, I provide accessible programming training for French-speaking Africa.",

        formations_titre: "Courses",
        formations_encours: "Ongoing",
        formations_avenir: "Coming soon",

        experiences_titre: "Experience",

        guides_titre: "Guides",
        guides_individuels: "Individual guides",
        guides_packs: "Bundle deals",
        guides_acheter: "Buy now",

        contact_titre: "Contact",
        contact_texte: "Join the CodePowerPlus+ community"

    },
    es: {
        nav_apropos: "Acerca de",
        nav_formations: "Cursos",
        nav_experiences: "Experiencia",
        nav_contact: "Contacto",

        hero_titre: "Formador en programacion",
        hero_description: "Formando a la proxima generacion de desarrolladores africanos",
        hero_cta: "Ver cursos",

        apropos_titre: "Acerca de",
        apropos_texte: "Fundador de CodePowerPlus+, ofrezco formacion en programacion accesible para Africa francofona.",

        formations_titre: "Cursos",
        formations_encours: "En curso",
        formations_avenir: "Proximo",

        experiences_titre: "Experiencia",

        guides_titre: "Guias",
        guides_individuels: "Guias individuales",
        guides_packs: "Paquetes",
        guides_acheter: "Comprar",
        
        contact_titre: "Contacto",
        contact_texte: "Unete a la comunidad CodePowerPlus+"
    }
};

const userLang = navigator.language.slice(0, 2);
const lang = translations[userLang] ? userLang : "fr";

function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}
