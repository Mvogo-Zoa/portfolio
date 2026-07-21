
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

// ── HAMBURGER MENU ──
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
    });
});

// ── DONNEES FORMATIONS ──
const formations = {
    python: {
        titre: "Formation Python",
        badge: "Formation complète",
        img: "assets/img/python.jpeg",
        description: "La formation Python est terminée dans son intégralité. Des bases de la syntaxe jusqu'aux projets concrets avec Pygame, tu disposes d'un parcours complet, validé par plus de 50 apprenants qui l'ont suivi jusqu'au bout.",
        modalites: [
            "33 chapitres complets, du débutant au niveau intermédiaire",
            "Rediffusions disponibles pour l'ensemble des chapitres",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat, structure identique aux sessions",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Accès à vie au contenu une fois le guide acquis"
        ],
        total: 33,
        done: 33,
        lien: "https://cqqzswqd.mychariow.shop/prd_nf5yoi"
    },
    java: {
        titre: "Formation Java",
        badge: "Formation complète",
        img: "assets/img/java.jpeg",
        description: "La formation Java est terminée. Un parcours complet sur les fondamentaux qui font de toi un développeur sérieux et employable, avec un projet réel intégré pour valider tes acquis.",
        modalites: [
            "14 chapitres complets et denses",
            "Rediffusions disponibles pour l'ensemble des chapitres",
            "Vidéos courtes de 5 à 15 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Projet réel intégré dans la formation"
        ],
        total: 14,
        done: 14,
        lien: "https://cqqzswqd.mychariow.shop/prd_sih8j8"
    },
    javascript: {
        titre: "Formation JavaScript",
        badge: "Formation complète",
        img: "assets/img/JavaScript.jpeg",
        description: "La formation JavaScript est terminée. Un parcours complet pour créer des interfaces dynamiques et comprendre l'écosystème web moderne, du premier script jusqu'aux projets pratiques.",
        modalites: [
            "20 chapitres complets et progressifs",
            "Rediffusions disponibles pour l'ensemble des chapitres",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Exercices pratiques à chaque chapitre"
        ],
        total: 20,
        done: 20,
        lien: "https://cqqzswqd.mychariow.shop/prd_5e4rt3"
    },
    c: {
        titre: "Formation C",
        badge: "Formation complète",
        img: "assets/img/c.jpeg",
        description: "La formation C est terminée. Comprendre le C, c'est comprendre comment un ordinateur fonctionne vraiment — un parcours exigeant qui fait la différence entre un bon et un excellent développeur.",
        modalites: [
            "9 chapitres complets et rigoureux",
            "Rediffusions disponibles pour l'ensemble des chapitres",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Exercices de logique et de mémoire inclus"
        ],
        total: 9,
        done: 9,
        lien: "https://cqqzswqd.mychariow.shop/prd_x6a94w"
    },
    html5: {
        titre: "Formation HTML5",
        badge: "Formation complète",
        img: "assets/img/HTML5.jpeg",
        description: "La formation HTML5 est terminée. Le point de départ de tout développeur web sérieux, jusqu'à la publication d'un site complet et professionnel.",
        modalites: [
            "28 chapitres complets",
            "Rediffusions disponibles pour l'ensemble des chapitres",
            "Vidéos courtes de 5 à 10 minutes par chapitre",
            "Guide PDF complet disponible à l'achat",
            "Groupe WhatsApp privé réservé aux acheteurs du guide",
            "Projet site web complet en fin de formation"
        ],
        total: 28,
        done: 28,
        lien: "https://cqqzswqd.mychariow.shop/prd_5g2t1w"
    },
    cyber: {
        titre: "Formation Cybersécurité",
        badge: "Ouverture des inscriptions — Août 2026",
        img: "assets/img/cyber.png",
        description: "La cybersécurité est aujourd'hui l'un des domaines tech les plus demandés — et les moins enseignés correctement en Afrique francophone. Cette formation de 3 mois te transforme, étape par étape, d'un débutant total en un profil capable de comprendre, sécuriser et auditer un système réel. Chaque module est concret : tu appliques immédiatement ce que tu apprends, sur un vrai environnement Linux.",
        modules: [
            {
                titre: "Module 0 — Bases, notions et environnement",
                description: "Choix du système d'exploitation, pourquoi Ubuntu est la base idéale pour démarrer en sécurité, installation complète de ton environnement de travail. Tu pars sur des fondations propres, sans confusion technique dès le départ."
            },
            {
                titre: "Module 1 — Fondamentaux Linux & Terminal",
                description: "Maîtrise du terminal, navigation système, gestion des fichiers et permissions, commandes essentielles. La cybersécurité se pratique en ligne de commande — ce module te rend à l'aise avant d'aller plus loin."
            },
            {
                titre: "Module 2 — Réseaux & Protocoles",
                description: "Comprendre comment les données circulent réellement : adresses IP, ports, protocoles TCP/IP, DNS, HTTP. Les bases indispensables pour comprendre comment un système peut être attaqué — ou protégé."
            },
            {
                titre: "Module 3 — Python appliqué à la Sécurité",
                description: "Utilisation de la librairie socket pour créer tes propres serveurs et clients, simuler des échanges de données réels, configurer et sécuriser un serveur. Introduction aux librairies requests et aux processus système. Tu écris du code qui interagit vraiment avec un réseau."
            },
            {
                titre: "Module 4 — Outils de reconnaissance",
                description: "Découverte des outils professionnels de scan et de collecte d'informations sur un système ou un réseau. La première étape technique de toute démarche de sécurité, avant même de penser à corriger quoi que ce soit."
            },
            {
                titre: "Module 5 — Cryptographie & Mots de passe",
                description: "Comment les mots de passe sont réellement protégés (ou compromis) : hachage, chiffrement, bonnes pratiques de stockage. Tu comprends enfin ce qui se passe derrière un simple champ de connexion."
            },
            {
                titre: "Module 6 — Introduction au Hacking Éthique",
                description: "La posture, la méthodologie et les limites légales du hacking éthique. Comment penser comme un attaquant pour mieux défendre un système, dans un cadre strictement professionnel et responsable."
            },
            {
                titre: "Module 7 — Projet Final & Certification",
                description: "Mise en pratique de tout ce que tu as appris sur un projet réel encadré, suivi d'une attestation de complétion CodePowerPlus+. Tu termines avec une preuve concrète de ta progression."
            }
        ],
        modalites: [
        "Durée : 3 mois complets, répartis en 8 modules progressifs (Module 0 à 7)",
        "Prérequis unique : bases en Python (la formation Python de CodePowerPlus+ suffit largement)",
        "Après ton inscription : accès immédiat au guide PDF disponible module par module, livré au rythme de la formation",
        "Chaque semaine : nouveaux chapitres du guide + session pratique + vidéo de démonstration filmée pas à pas",
        "Environnement 100% réel : Ubuntu pour les fondamentaux, introduction progressive à Kali Linux à partir du Module 4",
        "Outils professionnels utilisés en conditions réelles selon le module",
        "Accès à un groupe WhatsApp privé réservé aux membres inscrits",
        "Suivi individuel : le formateur répond directement à tes blocages",
        "Projet final appliqué + attestation de complétion CodePowerPlus+",
        "Places limitées pour le lancement — contacte-nous directement pour connaître les modalités d'inscription"
    ],
        pourquoi: [
            "Pourquoi cette formation plutôt qu'une autre : pensée pour un vrai débutant africain, sans prérequis en anglais technique ni matériel coûteux — juste un PC et de la rigueur.",
            "Ce que tu peux réellement attendre : une compréhension concrète des bases réseau, Linux et sécurité, module par module, jusqu'à un projet final appliqué.",
            "Pourquoi faire confiance : la même méthode structurée qui a déjà mené plus de 50 apprenants à terminer les 5 formations en programmation jusqu'au bout."
        ],
        total: 8,
        done: 0,
        lien: "https://wa.me/237652260975"
    }
};

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

    // Modules détaillés (Cyber uniquement)
    const modulesWrap = document.getElementById('modal-modules-wrap');
    const modulesList = document.getElementById('modal-modules-list');
    modulesList.innerHTML = '';
    if (f.modules && f.modules.length) {
        f.modules.forEach(m => {
            const block = document.createElement('div');
            block.className = 'modal-module-item';
            const h5 = document.createElement('h5');
            h5.textContent = m.titre;
            const p = document.createElement('p');
            p.textContent = m.description;
            block.appendChild(h5);
            block.appendChild(p);
            modulesList.appendChild(block);
        });
        modulesWrap.style.display = '';
    } else {
        modulesWrap.style.display = 'none';
    }

    // Pourquoi cette formation (Cyber uniquement)
    const pourquoiWrap = document.getElementById('modal-pourquoi-wrap');
    const pourquoiList = document.getElementById('modal-pourquoi-list');
    pourquoiList.innerHTML = '';
    if (f.pourquoi && f.pourquoi.length) {
        f.pourquoi.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;
            pourquoiList.appendChild(li);
        });
        pourquoiWrap.style.display = '';
    } else {
        pourquoiWrap.style.display = 'none';
    }

    // Barre de progression (masquée pour Cyber, pas encore lancée)
    const progressWrap = document.getElementById('modal-progress-wrap');
    if (id === 'cyber') {
        progressWrap.style.display = 'none';
    } else {
        progressWrap.style.display = '';
        const percent = Math.round((f.done / f.total) * 100);
        document.getElementById('modal-progress-fill').style.width = percent + '%';
        document.getElementById('modal-progress-text').textContent = f.done + ' / ' + f.total + ' chapitres';
    }

    const cta = document.getElementById('modal-cta');
    cta.href = f.lien;
    cta.textContent = id === 'cyber' ? 'Réserver ma place' : 'Obtenir le guide';

    document.getElementById('modal-overlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('modal-overlay').classList.remove('active');
    document.body.style.overflow = '';
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
