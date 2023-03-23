const d = document,
  n = navigator
export default function webcam(id) {
  const $video = d.getElementById(id)

  //Devuelve un objeto si hay camara y/o microfono
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        console.log(stream) //stream es un objeto
        $video.srcObject = stream //por lo que lo agregamos a la etiqueta video con el atributo srcObject
        $video.play()
      })
      .catch((err) => {
        $video.insertAdjacentHTML("beforebegin", `<p><mark>${err}<mark></p>`)
      })
  }
}
