const translations = {
  fr: {
    signin: "Se connecter",
    meme: "Accès illimité à des films, séries et autres contenus",
    "main-heading-h6": "À partir de 2,99$US. Résiliation à tout moment.",
    "main-heading-h62": "Prêt à regarder ? Saisissez votre e‑mail pour créer ou réactiver votre abonnement.",
    email: "Saisissez votre e‑mail",
    getstarted: "Commencer",
    tran: "À la une",
    tran2: "Raisons multiples de nous rejoindre",
    tran3: "Questions fréquentes",
    "grid-data-3a": "Netflix, c'est quoi ?",
    "grid-data-3b": "Quel est le prix de Netflix ?",
    "grid-data-3c": "Où puis-je regarder ?",
    "grid-data-3d": "Comment puis-je annuler ?",
    "grid-data-3e": "Que puis-je regarder sur Netflix ?",
    "grid-data-3f": "Netflix est-il adapté aux enfants ?",
    tran4: "Prêt à regarder ? Saisissez votre e‑mail pour créer ou réactiver votre abonnement.",
    email2Label: "Adresse sa e-mail",
    faq: "FAQ",
    investor: "Relations investisseurs",
    privacy: "Confidentialité",
    speedtest: "Test de vitesse",
    help: "Centre d'aide",
    jobs: "Emplois",
    cookie: "Préférences de cookies",
    legal: "Mentions légales",
    account: "Compte",
    ways: "Moyens de regarder",
    corporate: "Informations corporatives",
    onlynetflix: "Uniquement sur Netflix",
    contact: "Contactez-nous",
    terms: "Conditions d'utilisation",
    media: "Centre des médias",
    footerpara: "Netflix Rwanda",
    footerpara2: "Cette page est protégée par Google reCAPTCHA pour vérifier que vous n'êtes pas un robot.",
    learnmore: "En savoir plus"
  },
  en: {
    signin: "Sign In",
    meme: "Unlimited access to movies, TV shows, and more",
    "main-heading-h6": "Starting at $2.99. Cancel anytime.",
    "main-heading-h62": "Ready to watch? Enter your email to create or restart your membership.",
    email: "Enter your email",
    getstarted: "Get Started",
    tran: "Trending Now",
    tran2: "More reasons to join",
    tran3: "Frequently Asked Questions",
    "grid-data-3a": "What is Netflix?",
    "grid-data-3b": "How much does Netflix cost?",
    "grid-data-3c": "Where do I watch?",
    "grid-data-3d": "How do I cancel?",
    "grid-data-3e": "What can I watch on Netflix?",
    "grid-data-3f": "Is Netflix good for kids?",
    tran4: "Ready to watch? Enter your email to create or restart your membership.",
    email2Label: "Email Address",
    faq: "FAQ",
    investor: "Investor relations",
    privacy: "Privacy",
    speedtest: "Speed test",
    help: "Help center",
    jobs: "Jobs",
    cookie: "Cookie preference",
    legal: "Legal notices",
    account: "Account",
    ways: "Ways to watch",
    corporate: "Corporate information",
    onlynetflix: "Only on Netflix",
    contact: "Contact us",
    terms: "Terms of use",
    media: "Media center",
    footerpara: "Netflix Rwanda",
    footerpara2: "This page is protected by Google reCAPTCHA to ensure you're not a bot.",
    learnmore: "Learn more"
  }
};

// Select elements
const userClick = document.getElementById("dropdown-container");
const clickedByUser = document.getElementById("lanfooter");

function applyTranslation(lang) {
  const t = translations[lang];

  // Header & main content
  document.getElementById("signin").textContent = t.signin;
  document.getElementById("meme").textContent = t.meme;
  document.getElementById("main-heading-h6").textContent = t["main-heading-h6"];
  document.getElementById("main-heading-h62").textContent = t["main-heading-h62"];
  document.getElementById("email").placeholder = t.email;
  document.getElementById("getstarted").textContent = t.getstarted;

  document.getElementById("tran").textContent = t.tran;
  document.getElementById("tran2").textContent = t.tran2;
  document.getElementById("tran3").textContent = t.tran3;

  // FAQ Questions — using data-trans attribute (matches your fixed HTML)
  document.querySelector('[data-trans="grid-data-3a"]').textContent = t["grid-data-3a"];
  document.querySelector('[data-trans="grid-data-3b"]').textContent = t["grid-data-3b"];
  document.querySelector('[data-trans="grid-data-3c"]').textContent = t["grid-data-3c"];
  document.querySelector('[data-trans="grid-data-3d"]').textContent = t["grid-data-3d"];
  document.querySelector('[data-trans="grid-data-3e"]').textContent = t["grid-data-3e"];
  document.querySelector('[data-trans="grid-data-3f"]').textContent = t["grid-data-3f"];

  document.getElementById("tran4").textContent = t.tran4;
  document.querySelector('label[for="email2"]').textContent = t.email2Label;

  // Footer links
  document.getElementById("faq").textContent = t.faq;
  document.getElementById("investor").textContent = t.investor;
  document.getElementById("privacy").textContent = t.privacy;
  document.getElementById("speedtest").textContent = t.speedtest;
  document.getElementById("help").textContent = t.help;
  document.getElementById("jobs").textContent = t.jobs;
  document.getElementById("cookie").textContent = t.cookie;
  document.getElementById("legal").textContent = t.legal;
  document.getElementById("account").textContent = t.account;
  document.getElementById("ways").textContent = t.ways;
  document.getElementById("corporate").textContent = t.corporate;
  document.getElementById("onlynetflix").textContent = t.onlynetflix;
  document.getElementById("contact").textContent = t.contact;
  document.getElementById("terms").textContent = t.terms;
  document.getElementById("media").textContent = t.media;
  document.getElementById("footerpara").textContent = t.footerpara;
  document.getElementById("footerpara2").textContent = t.footerpara2;
  document.getElementById("learnmore").textContent = t.learnmore;
}

// Language switchers
userClick.addEventListener("change", () => applyTranslation(userClick.value));
clickedByUser.addEventListener("change", () => applyTranslation(clickedByUser.value));

// FAQ Accordion — perfect and safe
const buttons = document.querySelectorAll(".faq-question");
let activeBtn = null;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    // Close previous
    if (activeBtn && activeBtn !== button) {
      activeBtn.classList.remove("active");
      activeBtn.nextElementSibling.classList.remove("active");
    }

    // Toggle current
    button.classList.toggle("active");
    button.nextElementSibling.classList.toggle("active");

    // Update active reference
    activeBtn = button.classList.contains("active") ? button : null;
  });
});

// Start with English (or detect from dropdown)
applyTranslation("en");


//-------------------------------------------

function changeTheme(){
  document.body.classList.toogle("white")
}