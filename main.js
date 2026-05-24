const langToggleBtn = document.getElementById("lang-toggle");
const esElements = document.querySelectorAll(".lang-es");
const enElements = document.querySelectorAll(".lang-en");
const themeToggleBtn = document.getElementById("theme-toggle");
const htmlElement = document.documentElement;

let currentLang = "es";

langToggleBtn.addEventListener("click", () => {
    currentLang = currentLang === "es" ? "en" : "es";
    langToggleBtn.textContent = currentLang === "es" ? "EN" : "ES";

    if (currentLang === "es") {
        esElements.forEach((el) => el.classList.remove("hidden"));
        enElements.forEach((el) => el.classList.add("hidden"));
    } else {
        esElements.forEach((el) => el.classList.add("hidden"));
        enElements.forEach((el) => el.classList.remove("hidden"));
    }
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