const d = document

export default function formValidation() {
  const $form = d.querySelector(".val-form"),
    $inputs = d.querySelectorAll(".val-form [required]")

  console.log($inputs)
  $inputs.forEach((input) => {
    let $span = d.createElement("span")
    $span.id = input.name
    $span.textContent = input.title
    $span.classList.add("contact-form-error", "none")
    input.insertAdjacentElement("afterend", $span)
  })
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".val-form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern

      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern)
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active")
      }
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active")
      }
    }
  })
  d.addEventListener("submit", () => {
    alert("enviando Form")
    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contant-form-response")
    $loader.classList.remove("none")
    setTimeout(() => {
      $loader.classList.add("none")
      $response.classList.remove("none")

      setTimeout(() => $response.classList.add("none"), 3000)
    }, 3000)
  })
}
