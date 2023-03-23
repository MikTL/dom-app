const d=document,
  w=window
export default function videoInteligente(){
  const options={
    threshold: 0.95
  }
  const cb=(entradas)=>{
    entradas.forEach(el=>{
      if(el.isIntersecting){
        el.target.play()
      }else{
        el.target.pause()
      }  
      
      w.addEventListener("visibilitychange",()=>{
        if(d.visibilityState=="visible"){
          if(el.isIntersecting){
            el.target.play()
          }else{
            el.target.pause()
          } 
        }else{
          el.target.pause()
        }
      })
    })
  
  }
  const $videos=d.querySelectorAll("video[data-smart-video]")
  const observador= new IntersectionObserver(cb,options)

 $videos.forEach(el=>observador.observe(el))
}