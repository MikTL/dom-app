export default function hamburgerMenu(panelBtn, panel, menuLink) {
    const d = document
    d.addEventListener("click", (e) => {
        if (e.target.matches(`${panelBtn} *`) || e.target.matches(panelBtn)) {
            d.querySelector(panelBtn).classList.toggle("is-active")
            d.querySelector(panel).classList.toggle("transf")
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(panelBtn).classList.remove("is-active")
            d.querySelector(panel).classList.remove("transf")
        }
    })
}