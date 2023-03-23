const d=document

export default function scrollSpy(){
  const options = {
    //root
    //si  a rootMargin damos margenes negativos funcionara casi como el threshold
    // rootMargin: '10px 20px 30px 40px',
    threshold: [0.7, 0.7]
  }
  const $sections= d.querySelectorAll(".section")
  const $indexSections=d.querySelectorAll(".menu a")
  const observador=new IntersectionObserver((entradas)=>{
  
    if(entradas[0].isIntersecting){
  
      $indexSections.forEach((el)=>{
        if(el.getAttribute("href").substring(1)===entradas[0].target.getAttribute("id")){
          el.classList.add("scroll-focus")
        }
        if(el.getAttribute("href").substring(1)!==entradas[0].target.getAttribute("id")){
          el.classList.remove("scroll-focus")
        }
      })
    }
  }, options)
  $sections.forEach((el)=>{
    observador.observe(el)
  })
}


