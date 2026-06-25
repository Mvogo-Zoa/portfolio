
// ── NAVBAR SCROLL ──
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ── TRADUCTIONS ──
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
});


// ── BARRES DE PROGRESSION ──
document.querySelectorAll('.progress-fill').forEach(bar => {
    const total = parseInt(bar.getAttribute('data-total'));
    const done = parseInt(bar.getAttribute('data-done'));
    const percent = Math.round((done / total) * 100);
    bar.style.width = percent + '%';
});

// ── DONNEES FORMATIONS ──
const formations = {
    python: {
        titre: "Formation Python",
        badge: "En cours",
        img: "assets/img/python.jpeg",
        description: "Python est le langage idéal pour débuter en programmation. Logique claire, syntaxe simple, puissance réelle. Cette formation te donne une maitrise solide des bases jusqu'aux projets concrets — avec Pygame pour aller plus loin.",
        modalites: [
            "33 chapitres structurés, du débutant au niveau intermédiaire",
            "2 à 3 Sessions du lundi au samedi à 18h00 et 20h30",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Suivi et questions répondues directement par le formateur"
        ],
        total: 33,
        done: 12,
        lien: "https://cqqzswqd.mychariow.shop/prd_nf5yoi"
    },
    java: {
        titre: "Formation Java",
        badge: "En cours",
        img: "assets/img/java.jpeg",
        description: "Java est le langage des applications robustes, des systèmes d'entreprise et du développement desktop. Cette formation te forme sur les fondamentaux solides qui font de toi un développeur sérieux et employable.",
        modalites: [
            "14 chapitres denses et concrets",
            "2 à 3 Sessions du lundi au samedi à 18h00 et 20h30",
            "Vidéos courtes de 5 à 15 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Projet réel intégré dans la formation"
        ],
        total: 14,
        done: 0,
        lien: "https://cqqzswqd.mychariow.shop/prd_sih8j8"
    },
    javascript: {
        titre: "Formation JavaScript",
        badge: "En cours",
        img: "assets/img/JavaScript.jpeg",
        description: "JavaScript est le langage du web. Il tourne partout — navigateur, serveur, mobile. Cette formation te donne les bases solides pour créer des interfaces dynamiques et comprendre l'écosystème web moderne.",
        modalites: [
            "20 chapitres progressifs",
            "2 à 3 Sessions du lundi au samedi à 18h00 et 20h30",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Exercices pratiques à chaque chapitre"
        ],
        total: 20,
        done: 5,
        lien: "https://cqqzswqd.mychariow.shop/prd_5e4rt3"
    },
    c: {
        titre: "Formation C",
        badge: "En cours",
        img: "assets/img/c.jpeg",
        description: "Le langage C est la fondation de l'informatique moderne. Comprendre le C, c'est comprendre comment un ordinateur fonctionne vraiment. Une formation exigeante qui fait la différence entre un bon et un excellent développeur.",
        modalites: [
            "9 chapitres fondamentaux et rigoureux",
            "2 à 3 Sessions du lundi au samedi à 18h00 et 20h30",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Exercices de logique et de mémoire inclus"
        ],
        total: 9,
        done: 3,
        lien: "https://cqqzswqd.mychariow.shop/prd_x6a94w"
    },
    html5: {
        titre: "Formation HTML5",
        badge: "En cours",
        img: "assets/img/HTML5.jpeg",
        description: "HTML5 est la porte d'entrée du développement web. Tu apprends à structurer, styliser et publier des pages web professionnelles. Le point de départ de tout développeur web sérieux.",
        modalites: [
            "28 chapitres complets",
            "2 à 3 Sessions du lundi au samedi à 18h00 et 20h30",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Projet site web complet en fin de formation"
        ],
        total: 28,
        done: 6,
        lien: "https://cqqzswqd.mychariow.shop/prd_5g2t1w"
    },
    cyber: {
        titre: "Formation Cybersecurite",
        badge: "Aout 2025",
        img: "assets/img/cyber.jpeg",
        description: "La cybersécurité est l'un des domaines les plus recherchés au monde. Cette formation intensive couvre Linux, les réseaux, Python appliqué à la sécurité, l'ethical hacking et la cryptographie — avec une certification CodePowerPlus+ à la clé.",
        modalites: [
            "8 modules complets — du débutant à l'intermédiaire",
            "Prérequis : bases en Python",
            "Environnement réel : Ubuntu + Kali Linux via VirtualBox",
            "Outils professionnels : Tor, Nmap, Wireshark et plus",
            "Projet final avec certification CodePowerPlus+",
            "Early Bird : 18 000 FCFA pour les 20 premiers inscrits"
        ],
        total: 8,
        done: 0,
        lien: "https://wa.me/237652260975"
    }
};

// ── MODAL ──
function openModal(id) {
    const f = formations[id];
    if (!f) return;

    document.getElementById('modal-titre').textContent = f.titre;
    document.getElementById('modal-badge').textContent = f.badge;
    document.getElementById('modal-img').src = f.img;
    document.getElementById('modal-description').textContent = f.description;

    const list = document.getElementById('modal-modalites-list');
    list.innerHTML = '';
    f.modalites.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        list.appendChild(li);
    });

    const percent = Math.round((f.done / f.total) * 100);
    document.getElementById('modal-progress-fill').style.width = percent + '%';
    document.getElementById('modal-progress-text').textContent = f.done + ' / ' + f.total + ' chapitres';

    const cta = document.getElementById('modal-cta');
    cta.href = f.lien;
    cta.textContent = id === 'cyber' ? 'Je veux etre notifie' : 'Obtenir le guide';

    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
});


// ── DONNEES GUIDES ──
const guides = {
    python: {
        titre: "Guide Python Debutant",
        accroche: "Le langage qui ouvre toutes les portes.",
        niveau: "Debutant complet",
        prerequis: "Aucun prerequis",
        img: "assets/img/GuidePythonDebutant.jpeg",
        description: "Python n'est pas juste un langage — c'est la porte d'entree vers les metiers les plus recherches du monde : developpement, data science, intelligence artificielle. Google, Netflix, Instagram sont construits dessus. Ce guide structure ton apprentissage de zero, sans jargon inutile, avec des exercices concrets a chaque etape. Tu reposes le guide en sachant coder.",
        points: [
            "Les bases solides de la logique de programmation",
            "Variables, conditions, boucles, fonctions",
            "Manipulation de fichiers et de donnees",
            "Tes premiers programmes concrets et fonctionnels",
            "Fondations pour aller vers le Machine Learning"
        ],
        prix: "4.17$",
        economie: "",
        lien: "https://cqqzswqd.mychariow.shop/prd_nf5yoi"
    },
    javascript: {
        titre: "Guide JavaScript Debutant",
        accroche: "Le seul langage qui tourne dans chaque navigateur du monde.",
        niveau: "Debutant",
        prerequis: "Aucun prerequis",
        img: "assets/img/GuideJavaScriptDebutant.jpeg",
        description: "Sans JavaScript, internet n'existe pas. Ce guide te donne les fondations solides pour creer des interfaces dynamiques, comprendre le web moderne et poser les bases d'une carriere en developpement frontend ou fullstack. Chaque chapitre est une etape concrete vers l'autonomie.",
        points: [
            "Syntaxe et logique JavaScript de zero",
            "Manipulation du DOM — rendre tes pages vivantes",
            "Evenements, formulaires, interactions utilisateur",
            "Introduction aux fonctions et structures modernes",
            "Bases pour aller vers React ou Node.js"
        ],
        prix: "4.17$",
        economie: "",
        lien: "https://cqqzswqd.mychariow.shop/prd_5e4rt3"
    },
    html5: {
        titre: "Guide HTML5 Debutant",
        accroche: "La fondation de tout ce que tu vois sur internet.",
        niveau: "Debutant complet",
        prerequis: "Aucun prerequis",
        img: "assets/img/GuideHTML5Debutant.jpeg",
        description: "Avant d'ecrire une ligne de JavaScript ou de Python, tout developpeur web passe par HTML5. Ce guide ne t'apprend pas juste a faire des pages — il t'apprend a penser comme un developpeur web. Structurer, organiser, publier. A la fin, tu as ton premier site web complet et fonctionnel.",
        points: [
            "Structure et semantique HTML5 professionnelle",
            "Formulaires, tableaux, medias integres",
            "Bonnes pratiques du developpement web",
            "Creation d'un site web complet de zero",
            "Bases solides pour apprendre CSS et JavaScript"
        ],
        prix: "4.17$",
        economie: "",
        lien: "https://cqqzswqd.mychariow.shop/prd_5g2t1w"
    },
    c: {
        titre: "Guide C Debutant",
        accroche: "Le pere de tous les langages. La formation des vrais developpeurs.",
        niveau: "Debutant",
        prerequis: "Curiosite et rigueur",
        img: "assets/img/GuideC_Debutant.jpeg",
        description: "Le langage C a donne naissance a Python, Java et JavaScript. Le maitriser, c'est comprendre ce que les autres developpeurs ne comprennent pas — la memoire, la logique pure, les fondations de l'informatique. Ce guide est exigeant. Il est fait pour ceux qui veulent vraiment comprendre, pas juste copier.",
        points: [
            "Logique de programmation pure et structuree",
            "Gestion de la memoire et des pointeurs",
            "Structures, tableaux, fonctions avancees",
            "Comprendre comment un ordinateur fonctionne vraiment",
            "Base solide pour apprendre n'importe quel langage ensuite"
        ],
        prix: "5.00$",
        economie: "",
        lien: "https://cqqzswqd.mychariow.shop/prd_x6a94w"
    },
    java: {
        titre: "Guide Java Debutant",
        accroche: "4 milliards d'appareils font tourner Java. Le tien aussi.",
        niveau: "Debutant",
        prerequis: "Aucun prerequis",
        img: "assets/img/GuideJavaDebutant.jpeg",
        description: "Java est le langage des systemes robustes, des banques, des applications Android et des grandes entreprises. Ce guide te forme sur une base technique solide, orientee objet, professionnelle — celle qui te rend employable et credible sur le marche du travail. Pas de superficiel. Du concret, du solide, du durable.",
        points: [
            "Bases Java et programmation orientee objet",
            "Classes, objets, heritage, encapsulation",
            "Gestion des exceptions et des fichiers",
            "Structures de donnees fondamentales",
            "Fondations pour JavaFX, Spring Boot ou Android"
        ],
        prix: "5.83$",
        economie: "",
        lien: "https://cqqzswqd.mychariow.shop/prd_sih8j8"
    },
    pygame: {
        titre: "Guide Pygame Debutant / Intermediaire",
        accroche: "Apprends Python en creant tes propres jeux video.",
        niveau: "Debutant / Intermediaire",
        prerequis: "Bases Python requises",
        img: "assets/img/GuidePygameDebutant_Intermediare.jpeg",
        description: "Creer un jeu video est la meilleure facon de consolider ses bases en programmation. Pygame te plonge dans la pratique pure — boucles, evenements, collision, animation. Tu ne lis plus du code. Tu le vis. Ce guide est le complement ideal pour tout apprenant Python qui veut aller plus loin par le jeu.",
        points: [
            "Installation et configuration de Pygame",
            "Gestion des evenements clavier et souris",
            "Animations, sprites et collisions",
            "Construire un jeu complet de zero",
            "Consolider et approfondir ses bases Python"
        ],
        prix: "5.83$",
        economie: "",
        lien: "https://cqqzswqd.mychariow.shop/prd_pz4sdty7"
    },
    "pack-duo": {
        titre: "Pack Duo — Python + JavaScript",
        accroche: "Le duo parfait pour demarrer fort et large.",
        niveau: "Debutant",
        prerequis: "Aucun prerequis",
        img: "assets/img/PackPython_Javascript_Debutant.jpeg",
        description: "Python cote logique. JavaScript cote web. Ces deux langages ensemble couvrent 80% des besoins du developpement moderne. Ce pack te donne les deux pour le prix d'un et demi — c'est le choix intelligent pour demarrer vite et large. Deux guides. Deux competences. Une seule decision.",
        points: [
            "Guide Python complet inclus",
            "Guide JavaScript complet inclus",
            "Acces aux deux groupes WhatsApp prives",
            "Progression logique : Python puis JavaScript",
            "Economie immediate sur l'achat separé"
        ],
        prix: "7.50$",
        economie: "Economie de 0.84$ — Valeur reelle : 8.34$",
        lien: "https://cqqzswqd.mychariow.shop/prd_gixr4s"
    },
    "pack-trio": {
        titre: "Pack Trio — JS + C + Python",
        accroche: "Trois langages. Une polyvalence rare. Un prix imbattable.",
        niveau: "Debutant",
        prerequis: "Aucun prerequis",
        img: "assets/img/PackPython_Java_C_Debutant.jpeg",
        description: "Trois langages fondamentaux. Une seule decision. Python pour la logique, C pour les fondations, JavaScript pour le web. Ce pack construit une polyvalence technique rare chez un debutant — et c'est exactement ce que les recruteurs et les projets serieux recherchent.",
        points: [
            "Guide Python + Guide C + Guide JavaScript inclus",
            "Acces aux trois groupes WhatsApp prives",
            "Progression structuree recommandee : C, Python, JS",
            "Trois competences complementaires et puissantes",
            "Economie de 3$ sur l'achat separe"
        ],
        prix: "10.17$",
        economie: "Economie de 3.00$ — Valeur reelle : 13.17$",
        lien: "https://cqqzswqd.mychariow.shop/prd_5ubc7y6q"
    },
    "pack-complet": {
        titre: "Pack Complet — Tous les guides",
        accroche: "La bibliotheque complete du developpeur. Un seul achat.",
        niveau: "Debutant",
        prerequis: "Aucun prerequis",
        img: "assets/img/PackJava_C_Javascript_Html5_PythonDebutant.jpeg",
        description: "Six guides. Une bibliotheque complete. L'investissement le plus rentable que tu puisses faire pour ta carriere technique aujourd'hui. Tout le contenu CodePowerPlus+ en un achat — Python, JavaScript, HTML5, C, Java, Pygame. Plus aucune excuse pour ne pas commencer.",
        points: [
            "Les 6 guides CodePowerPlus+ inclus",
            "Acces a tous les groupes WhatsApp prives",
            "Contenu mis a jour inclus automatiquement",
            "Economie massive de plus de 13$ sur l'achat separe",
            "L'offre la plus intelligente du catalogue"
        ],
        prix: "16.67$",
        economie: "Economie de 13.66$ — Valeur reelle : 30.33$",
        lien: "https://cqqzswqd.mychariow.shop/prd_3yb1v8"
    }
};

// ── MODAL GUIDE ──
function openGuideModal(id) {
    const g = guides[id];
    if (!g) return;

    document.getElementById('gm-titre').textContent = g.titre;
    document.getElementById('gm-accroche').textContent = g.accroche;
    document.getElementById('gm-niveau').textContent = g.niveau;
    document.getElementById('gm-prerequis').textContent = g.prerequis;
    document.getElementById('gm-img').src = g.img;
    document.getElementById('gm-description').textContent = g.description;
    document.getElementById('gm-prix').textContent = g.prix;
    document.getElementById('gm-economie').textContent = g.economie;

    const liste = document.getElementById('gm-liste');
    liste.innerHTML = '';
    g.points.forEach(point => {
        const li = document.createElement('li');
        li.textContent = point;
        liste.appendChild(li);
    });

    document.getElementById('gm-cta').href = g.lien;
    document.getElementById('guide-modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeGuideModal() {
    document.getElementById('guide-modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        closeGuideModal();
        closeModal();
    }
});

// ── TEMOIGNAGES ──
// Pour ajouter un temoignage : une seule ligne dans ce tableau
const temoignages = [
    {
        nom: "bisim",
        pays: "RDC",
        texte: "assets/img/temoignage1.png",
        type: "capture" // "capture" = image | "texte" = texte simple
    },
     {
        nom: "philippe",
        pays: "Cameroun",
        texte: "assets/img/temoignage2.png",
        type: "capture" // "capture" = image | "texte" = texte simple
    },
    {
        nom: "Agossou",
        pays: "Burkina Faso",
        texte: "assets/img/temoignage3.png",
        type: "capture" // "capture" = image | "texte" = texte simple
    }
    // Ajoute ici ↓
    // { nom: "Marie L.", pays: "France", texte: "assets/img/temoignages/marie.jpg", type: "capture" },
];

function renderTemoignages() {
    const grid = document.getElementById('temoignages-grid');
    if (!grid) return;

    if (temoignages.length === 0) {
        grid.innerHTML = '<p class="temoignages-empty">Les premiers temoignages arrivent bientot.</p>';
        return;
    }

    grid.innerHTML = temoignages.map(t => `
        <div class="temoignage-card">
            <div class="temoignage-header">
                <div class="temoignage-avatar">${t.nom.charAt(0)}</div>
                <div>
                    <p class="temoignage-nom">${t.nom}</p>
                    <p class="temoignage-pays">${t.pays}</p>
                </div>
            </div>
            ${t.type === 'capture'
                ? `<img src="${t.texte}" alt="Temoignage ${t.nom}" class="temoignage-capture">`
                : `<p class="temoignage-texte">"${t.texte}"</p>`
            }
        </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    renderTemoignages();
});


// ── ANIMATION SCROLL ──
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll(
    '.formation-card, .guide-card, .experience-card, ' +
    '.stat-card, .contact-card, .apropos-point, ' +
    '.mentorat-etape, .temoignage-card'
).forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});
