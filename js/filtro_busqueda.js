const d = document
export default function filtrarBusqueda(buscador, buscado) {
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(buscador)) {
      console.log(e.target.value)
      d.querySelectorAll(buscado).forEach((element) => {
        //con el include verificamos si dentro de los elementos que tienen la clase que está en el parametro "buscado", estan las letras que escribimos, en el caso de que las letras coincidan(true) con uno de los elementos, removemos la clase filter, y si no existe (false) agregamos la clase filter que lo que hace es ocultar los elementos.
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? element.classList.remove("filter")
          : element.classList.add("filter")
      })
    }
  })
}
