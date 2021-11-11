const btnColores = document.querySelector("#btnColores");
const btnContacto = document.querySelector("#btnContacto");
const btnNosotros = document.querySelector("#btnNosotros");
const mainView = document.querySelector("#mainView");
const colorsView = document.querySelector("#colorsView");
const contactView = document.querySelector("#contactView")
const nosotrosView = document.querySelector("#nosotrosView");

const Principal = document.querySelectorAll(".toPrincipal");
const Colores = document.querySelectorAll(".toColores");
const Contacto = document.querySelectorAll(".toContacto");
const Nosotros = document.querySelectorAll(".toNosotros");

Principal.forEach(i => { i.addEventListener('click', () => changeScreen("main"))});
Colores.forEach(i => { i.addEventListener('click', () => changeScreen("colores"))});
Contacto.forEach(i => { i.addEventListener('click', () => changeScreen("contacto"))});
Nosotros.forEach(i => { i.addEventListener('click', () => changeScreen("nosotros"))});

function hideAll() {
    mainView.style.display = "none";
    colorsView.style.display = "none";
    contactView.style.display = "none";
    nosotrosView.style.display = "none";
    btnColores.className = "";
    btnContacto.className = "";
    btnNosotros.className = "";
}

function changeScreen(screen) {
    hideAll()

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

    if(screen === "nosotros") {
        btnNosotros.className = "current";
        nosotrosView.style.display = "block";
    }
}