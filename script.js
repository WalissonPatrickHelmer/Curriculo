// Sistema de Idioma
const langToggle = document.getElementById('lang-toggle');
let currentLang = 'pt';

const translations = {
    pt: {
        "nav-about": "Sobre", "nav-skills": "Habilidades", "nav-career": "Carreira", "nav-edu": "Formação", "nav-contact-menu": "Contato",
        "hero-badge": "ANÁLISE E DESENVOLVIMENTO DE SISTEMAS", "hero-title": "Walisson Patrick Helmer",
        "btn-cv": "Baixar Currículo", "obj-title": "OBJETIVO PROFISSIONAL",
        "edu-title": "FORMAÇÃO ACADÊMICA", "skills-title": "HABILIDADES TÉCNICAS",
        "exp-title": "EXPERIÊNCIA PROFISSIONAL", "foot-h2": "Interessado no meu perfil?",
        "last-update": "Última alteração:"
    },
    en: {
        "nav-about": "About", "nav-skills": "Skills", "nav-career": "Career", "nav-edu": "Education", "nav-contact-menu": "Contact",
        "hero-badge": "SYSTEMS ANALYSIS AND DEVELOPMENT", "hero-title": "Walisson Patrick Helmer",
        "btn-cv": "Download CV", "obj-title": "PROFESSIONAL OBJECTIVE",
        "edu-title": "ACADEMIC BACKGROUND", "skills-title": "TECHNICAL SKILLS",
        "exp-title": "PROFESSIONAL EXPERIENCE", "foot-h2": "Interested in my profile?",
        "last-update": "Last update:"
    }
};

langToggle.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    langToggle.innerText = currentLang === 'pt' ? 'EN' : 'PT';
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[currentLang][key]) element.innerText = translations[currentLang][key];
    });
});

// Sistema de Tema
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-theme');
    const isLight = body.classList.contains('light-theme');
    themeToggle.innerHTML = isLight ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});