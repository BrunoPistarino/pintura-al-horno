let isOpen = true;
const navOpen = document.querySelector(".navOpen");
const navClose = document.querySelector(".navClose");
const navButton = document.querySelector(".navButtonbtn");
const logo = document.querySelector("#logo");
const btnColores = document.querySelector("#btnColores");
const btnContacto = document.querySelector("#btnContacto");
const mainView = document.querySelector("#mainView");
const colorsView = document.querySelector("#colorsView");
const contactView = document.querySelector("#contactView")

navClose.style.display = "none";

navButton.addEventListener('click', () => {
    if (isOpen === false ) {
        navOpen.style.display = "block";
        navClose.style.display = "none";
        isOpen = true;
    } else {
        navOpen.style.display = "none";
        navClose.style.display = "block";
        isOpen = false;
    }
});

logo.addEventListener('click', () => changeScreen("main"));
btnColores.addEventListener('click', () => changeScreen("colores"));
btnContacto.addEventListener('click', () => changeScreen("contacto"));

function hideAll() {
    mainView.style.display = "none";
    colorsView.style.display = "none";
    contactView.style.display = "none";
}

function changeScreen(screen) {
    hideAll()
    btnColores.className = "";
    btnContacto.className = "";


    if(screen === "main") {
        mainView.style.display = "block"
    }

    if(screen === "colores") {
        btnColores.className = "current";
        colorsView.style.display = "flex";
    }

    if(screen === "contacto") {
        btnContacto.className = "current";
        contactView.style.display = "flex";
    }
}