const d=document
export default function slider(){
  let i=0
  let $prevBtn=d.querySelector(".prev-btn"),
      $nextBtn=d.querySelector(".next-btn"),
      $slide=d.querySelectorAll(".slider-slide")
  d.addEventListener("click", (e)=>{
    if(e.target===$prevBtn){
      e.preventDefault()
      $slide[i].classList.remove("active")
      i--
      if(i<0) i=$slide.length-1
      $slide[i].classList.add("active")
      
    }
    if(e.target===$nextBtn){
      e.preventDefault()
      $slide[i].classList.remove("active")
      i++
      if(i>=$slide.length) i=0
      $slide[i].classList.add("active")
      
    }
  })
}