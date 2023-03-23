const d = document
export default function scrollBoton(btn) {
  let flecha = d.querySelector(btn)
  d.addEventListener("scroll", () => {
    //tambien podemos obtener la distancia del scroll con: window.pageYOffset  tambien con : document.documentElement.scrollTop
    if (window.scrollY > 774) {
      flecha.classList.add("flecha-opacity")
    }
    if (window.scrollY < 774) {
      flecha.classList.remove("flecha-opacity")
    }
  })
}
