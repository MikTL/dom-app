const d = document

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    const $players = d.querySelectorAll(selector)
    console.log($players)
    let numRandom = Math.floor(Math.random() * $players.length)

    return $players[numRandom].textContent
  }
  d.addEventListener("click", e => {
    if (e.target.matches(btn)) {
      let resultado = getWinner(selector)
      alert(resultado)
      console.log(resultado);
    }
  })
}

/* Para sortear en otras paginas:
   solor colocamos esta funcion en la consola de la pagina y llamamos a la funcion con los selectores
   que contienen el nombre del comentario */

/* const getWinnerComment = (selector) => {
  const $players = document.querySelectorAll(selector)
  console.log($players)
  let numRandom = Math.floor(Math.random() * $players.length)

  return $players[numRandom].textContent
}
getWinnerComment(".x1y1aw1k span a span span") */
