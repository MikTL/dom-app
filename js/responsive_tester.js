const d = document

export default function responsiveTester(id) {
  const $formulario = d.getElementById(id)
  let tester
  d.addEventListener("submit", (e) => {
    e.preventDefault()
    if (e.target === $formulario) {
      tester = window.open(
        $formulario.direccion.value,
        "tester",
        `innerWidth=${$formulario.ancho.value}, innerHeight=${$formulario.alto.value}`
      )
    }
  })
  d.addEventListener("click", (e) => {
    if (e.target === $formulario.cerrar) tester.close()
  })
}
