const d = document,
  n = navigator,
  ua = n.userAgent
export default function userDeviceInfo(id) {
  const $id = d.getElementById(id),
    isMobile = {
      android: () => ua.match(/android/i),
      ios: () => ua.match(/iphone|ipad|ipod/i),
      any: function () {
        return this.android() || this.ios()
      },
    },
    isDesktop = {
      windows: () => ua.match(/windows/i),
      linux: () => ua.match(/linux/i),
      mac: () => ua.match(/mac os/i),
      any: function () {
        return this.linux() || this.mac() || this.windows()
      },
    },
    isBrowser = {
      chrome: () => ua.match(/chrome/i),
      safari: () => ua.match(/safari/i),
      firefox: () => ua.match(/firefox/i),
      opera: () => ua.match(/opera|opera mini/i),
      edge: () => ua.match(/edge/i),
      any: function () {
        return (
          this.chrome() ||
          this.safari() ||
          this.firefox() ||
          this.opera ||
          this.edge()
        )
      },
    }

  /* console.log(isMobile.android())
  console.log(isBrowser.chrome())
  console.log(isDesktop.linux())
  console.log(isDesktop.any()) */
  $id.innerHTML = `
  <ul>
    <li>User agent: ${ua}</li>
    <li>Plataforma: ${isMobile.any() ? isMobile.any() : isDesktop.any()}</li>
    <li>Navegador: ${isBrowser.any()}</li>
  </ul>
  `
  /* con estas validaciones podemos darle acceso a contenido exclusivo de una plataforma o navegador */
  if (isBrowser.chrome()) {
    $id.innerHTML += `<p><mark>Este contenido solo se puede ver en chrome<mark></p>`
  }
  if (isBrowser.firefox()) {
    $id.innerHTML += `<p><mark>Este contenido solo se puede ver en firefox<mark></p>`
  }
  if (isDesktop.linux()) {
    $id.innerHTML += `<p><mark>Descarga la version de este software para linux<mark></p>`
  }
  if (isDesktop.windows()) {
    $id.innerHTML += `<p><mark>Descarga la version de este software para windows<mark></p>`
  }

  /* Redireccionar a una pagina si el dispositivo es mobile */

  /* if (isMobile.any()) {
    window.location.href = "https://youtube.com"
  } */
}
