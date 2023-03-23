const d = document
const ls = localStorage
export default function darkMode(btn, dark) {
  const $btnDark = d.querySelector(btn),
    $selectores = d.querySelectorAll("[data-dark]") // el atributo data-dark sera añadido a todo elemento en htlm que necesite el dark mode
  //console.log($selectores)
  let darK = function () {
    $selectores.forEach((el) => {
      //añadimos la clase se invierte los colores en cada elemento que tiene data-dark como atributo
      el.classList.add("theme")
      $btnDark.textContent = "☀️"
    })
    ls.setItem("theme", "dark") // añadimos la configuracion dark al storage
  }
  let light = function () {
    $selectores.forEach((el) => {
      el.classList.remove("theme")
      $btnDark.textContent = "🌙"
    })
    ls.setItem("theme", "light") //añadimos la configuracion light al storage
  }
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($btnDark.textContent === "🌙") {
        darK()
      } else {
        light()
      }
    }
  })
  d.addEventListener("DOMContentLoaded", () => {
    //console.log(ls.getItem("theme"))
    //al cargar la pagina, este evento preguntará si existe el elemento theme con cierto valor en el storage, si existe, carga dicha configuración, es por eso que aplica el modo oscuro aun despues de recargar la página
    if (ls.getItem("theme") === null) ls.setItem("theme", "light")
    if (ls.getItem("theme") === "light") light()
    if (ls.getItem("theme") === "dark") darK()
  })
}
