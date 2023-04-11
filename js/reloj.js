const d=document
export default function reloj(domHour,btnStarAlarm,btnStopAlarm){
    let correr
    d.addEventListener("click",(e)=>{
        if(e.target.matches("#start-watch")){
            d.querySelector("#start-watch").disabled=true
            d.querySelector(btnStarAlarm).disabled=true
            d.querySelector(btnStopAlarm).disabled=true
            correr=setInterval(()=>{
                let hora=new Date().toLocaleTimeString()
                d.querySelector(domHour).innerHTML=hora
            },1000)
        }
        if(e.target.matches("#stop-watch")){
            d.querySelector(btnStopAlarm).disabled=false
            d.querySelector(btnStarAlarm).disabled=false
            d.querySelector(domHour).innerHTML=""
            clearInterval(correr)
            d.querySelector("#start-watch").disabled=false
        }
    })
}
export function alarma(btnStarAlarm,btnStopAlarm,sound,animation){
    let aggClass=d.querySelector(animation)
    d.addEventListener("click",(e)=>{
        if(e.target.matches(btnStarAlarm)){
            aggClass.classList.remove("ocultar-alarma")
            d.querySelector(btnStarAlarm).disabled=true
            d.querySelector("#start-watch").disabled=true
            d.querySelector("#stop-watch").disabled=true
            d.querySelector(sound).play()
            d.querySelector(sound).loop=true
        }
        if(e.target.matches(btnStopAlarm)){
            d.querySelector(btnStarAlarm).disabled=false
            d.querySelector("#start-watch").disabled=false
            d.querySelector("#stop-watch").disabled=false
            d.querySelector(sound).pause()
            d.querySelector(sound).currentTime=0
            aggClass.classList.add("ocultar-alarma")
        }
    })

}