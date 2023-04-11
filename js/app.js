import { moveBall, shotcuts } from "./teclado.js"
import hamburgerMenu from "./menu_hamburguesa.js"
import reloj, { alarma } from "./reloj.js"
import { countDown } from "./count_down.js"
import scrollBoton from "./boton_scroll.js"
import darkMode from "./dark_mode.js"
//import responsiveMedia from "./objeto_responsivo.js"
import responsiveTester from "./responsive_tester.js"
import userDeviceInfo from "./deteccion_dispositivos.js"
import deteccionRed from "./deteccion_red.js"
import webcam from "./deteccion_webcam.js"
import geolocalizacion from "./geolocalizacion.js"
import filtrarBusqueda from "./filtro_busqueda.js"
import draw from "./sorteo.js"
import slider from "./responsive_slider.js"
import scrollSpy from "./scrollspy.js"
import videoInteligente from "./video_inteligente.js"
import formValidation from "./form_validation.js"
import speechReader from "./narrador.js"
const d = document

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".hamburger", ".panel", ".menu a")
  reloj(".hour","#start-alarm", "#stop-alarm")
  alarma("#start-alarm", "#stop-alarm", "#alarm", ".ocultar-alarma")
  countDown(".count-down", "2023,12,5 13:40:00", "Holaaa Tiempo")
  scrollBoton(".flecha")

  /* La siguiente función es para que cargue contenido embebido depende del tamaño de la pantalla */
  /* responsiveMedia(
    "youtube",
    "(min-width:780px)",
    `<a href="https://www.youtube.com/watch?v=aqz-KE-bpKQ">ver video</a>`,
    `<iframe width="400" height="250" src="https://www.youtube.com/embed/aqz-KE-bpKQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  )
  responsiveMedia(
    "gmaps",
    "(min-width:780px)",
    `<a href="https://goo.gl/maps/prZTA4aZSN7Z3Y6Y9">ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3900.8729966357223!2d-77.04764848255617!3d-12.120841199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c82ff3d5a8ad%3A0xb12fe631378f9079!2sParque%20Ernesto%20Arambur%C3%BA%20Menchaca!5e0!3m2!1ses!2spe!4v1669218585348!5m2!1ses!2spe" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  ) */

  responsiveTester("formulario")
  userDeviceInfo("device")
  webcam("webcam")
  geolocalizacion("geolocation")
  filtrarBusqueda(".card-filter", ".card")
  draw("#winner-btn", ".player")
  slider()
  scrollSpy()
  videoInteligente()
  formValidation()
})
darkMode(".dark-mode", ".theme")
d.addEventListener("keydown", (e) => {
  shotcuts(e)
  moveBall(e, ".lienzo", ".circulo")
})
deteccionRed()
speechReader()
