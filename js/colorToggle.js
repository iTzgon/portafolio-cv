const lightModeBtn = document.querySelector(".light-mode-btn")
const darkModeBtn = document.querySelector(".dark-mode-btn")
/* const userTheme = localStorage.getItem("theme") */

lightModeBtn.addEventListener("click", setDarkMode)
darkModeBtn.addEventListener("click", setlightMode)

/* if (userTheme === "dark" || !userTheme) {
    setUserTheme("dark")
} */

function setDarkMode() {
    setUserTheme("dark")
}
function setlightMode() {
    setUserTheme("light")
}

function setUserTheme(newTheme) {
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme) /* guarda clave/valor */
}
