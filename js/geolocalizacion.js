const d = document,
  n = navigator
export default function geolocalizacion(id) {
  const $id = d.getElementById(id)

  const succes = (position) => {
    let coord = position.coords
    console.log(position)
    $id.innerHTML = `
    <p>Tu posición actual es:</p>
    <ul>
      <li>Latitud:<b>${coord.latitude}</b></li>
      <li>Longitud:<b>${coord.longitude}</b></li>
      <li>Precisión:<b>${coord.accuracy}</b></li>
    </ul>
    <a href="https://google.com/maps/@${coord.latitude},${coord.longitude},5z" target="_blank" rel="noopener noreferrer">ver en Google Maps</a>`
  }
  const error = (err) => {
    //console.log(err)
  }
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }
  n.geolocation.getCurrentPosition(succes, error, options)
}
