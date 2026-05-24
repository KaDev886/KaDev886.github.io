const langToggleBtn = document.getElementById("lang-toggle");
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

const translations = {
    es: {
        "header-status": "Disponible para proyectos y herramientas",
        "hero-title": "Hola, soy un desarrollador enfocado en ",
        "hero-highlight": "lógica y optimización",
        "hero-desc":
            "Me especializo en construir herramientas modulares, optimizar algoritmos y diseñar sistemas de tipado estricto. Me enfoco en crear soluciones eficientes donde el rendimiento y la estabilidad del código sean lo primero.",
        "specs-section-title": "// Especialidades técnicas",
        "spec1-title": "Arquitectura y Herramientas",
        "spec1-desc":
            "Creación de sistemas modulares, utilidades de tipado estático y librerías de validación de datos pensadas para la estabilidad del entorno.",
        "spec2-title": "Optimización de Código",
        "spec2-desc":
            "Refactorización y limpieza de algoritmos, reducción de pasadas redundantes y manejo estricto de estados para maximizar la velocidad de ejecución.",
        "projects-section-title": "// Código y Proyectos",
        "project1-title": "Librería de Validación de Datos / Schemas",
        "project1-tag": "Código Abierto",
        "project1-desc":
            "Diseño e implementación de una solución ligera en Luau para la validación y coerción de tipos de datos. Prioriza la reparación de datos corrompidos en lugar de fallar silenciosamente.",
        "project1-tech": "Estructura de Datos",
        "footer-text": "Hecho con código limpio, sin rodeos.",
        "footer-contact": "Contacto",
    },
    en: {
        "header-status": "Available for projects & tools",
        "hero-title": "Hi, I am a developer focused on ",
        "hero-highlight": "logic & optimization",
        "hero-desc":
            "I specialize in building modular tools, optimizing algorithms, and designing strict typing systems. My focus is on creating efficient solutions where code performance and stability come first.",
        "specs-section-title": "// Technical Specialties",
        "spec1-title": "Architecture & Tools",
        "spec1-desc":
            "Developing modular systems, static typing utilities, and data validation libraries designed for environment stability.",
        "spec2-title": "Code Optimization",
        "spec2-desc":
            "Refactoring and optimizing algorithms, reducing redundant iterations, and strict state management to maximize execution speed.",
        "projects-section-title": "// Code & Projects",
        "project1-title": "Data Validation / Schema Library",
        "project1-tag": "Open Source",
        "project1-desc":
            "Design and implementation of a lightweight Luau solution for data type validation and coercion. Focuses on repairing corrupted data instead of failing silently.",
        "project1-tech": "Data Structures",
        "footer-text": "Built with clean code, no fluff.",
        "footer-contact": "Contact",
    },
};

let currentLang = localStorage.getItem("lang") || "en";

function setLanguage(lang) {
    langToggleBtn.textContent = lang === "en" ? "ES" : "EN";

    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach((element) => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });

    localStorage.setItem("lang", lang);
}

langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "en" ? "es" : "en";
    setLanguage(currentLang);
});

themeToggleBtn.addEventListener("click", () => {
    if (htmlElement.classList.contains("dark")) {
        htmlElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
    } else {
        htmlElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
    }
});

if (localStorage.getItem("theme") === "light") {
    htmlElement.classList.remove("dark");
}

setLanguage(currentLang);