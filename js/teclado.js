const d = document
let x = 0,
  y = 0

export function moveBall(e, lienzo, ball) {
  const $lienzo = d.querySelector(lienzo),
    $ball = d.querySelector(ball),
    limitsBall = $ball.getBoundingClientRect(),
    limitLienzo = $lienzo.getBoundingClientRect()

  /* console.log(limitsBall)
  console.log(limitLienzo)
  console.log(e.keyCode) */

  switch (e.keyCode) {
    //left
    case 37:
      if (limitsBall.left > limitLienzo.left) {
        x--
        e.preventDefault()
      }
      break
    //up
    case 38:
      if (limitsBall.top > limitLienzo.top) {
        y--
        e.preventDefault()
      }
      break
    //rigth
    case 39:
      if (limitsBall.right < limitLienzo.right) {
        e.preventDefault()
        x++
      }
      break
    //down
    case 40:
      if (limitsBall.bottom < limitLienzo.bottom) {
        e.preventDefault()
        y++
      }
      break
    default:
      break
  }
  $ball.style.transform = `translate(${x * 5}px,${y * 5}px)`
}
export function shotcuts(e) {
  /* console.clear()
  console.log(`Tipo: ${e.type}`)
  console.log(`LLave: ${e.key}`)
  console.log(`Codigo llave: ${e.keyCode}`)
  console.log(`CTRL: ${e.ctrlKey}`)
  console.log(`SHIFT ${e.shiftKey}`)
  console.log(`ALT: ${e.altKey}`) */

  if (e.altKey && e.key === "a") {
    alert("Atajo A")
  }
  if (e.altKey && e.key === "c") {
    confirm("Atajo C")
  }
  if (e.altKey && e.key === "p") {
    prompt("Atajo C")
  }
}
