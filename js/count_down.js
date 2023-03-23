let diasRestante, horasRestante, minRestante
const d = document
export function countDown(h4, fechaFuturo, message) {
  let $textCount = d.querySelector(h4)
  let futuro = new Date(fechaFuturo).getTime(),
    diasMs = 60 * 60 * 24,
    segMs = 1000
  let intervalo = setInterval(() => {
    let regresiva = new Date().getTime()
    let segRestante = (futuro - regresiva) / segMs

    diasRestante = segRestante / diasMs
    horasRestante = (diasRestante - Math.floor(diasRestante)) * 24
    minRestante = (horasRestante - Math.floor(horasRestante)) * 60
    $textCount.innerHTML = `
    ${Math.floor(diasRestante)} dias ${Math.floor(
      horasRestante
    )} horas ${Math.floor(minRestante)} minutos ${Math.floor(
      (minRestante - Math.floor(minRestante)) * 60
    )} segundos`

    if (segRestante <= 0) {
      //paramos el set Interval
      clearInterval(intervalo)
      $textCount.innerHTML = message
    }
  }, 1000)
}
