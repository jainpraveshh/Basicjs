let display = document.querySelector(".display");
let Start = document.querySelector(".Start")
let Stop = document.querySelector(".Stop")
let Reset = document.querySelector(".Reset")

let TimerId = null;

let MiliSec=0;
let Sec=0;
let Min=0;

Start.addEventListener("click",function(){
    if(TimerId !== null){
        clearInterval(TimerId);
    }
    TimerId = setInterval(start,10);
})
Stop.addEventListener("click",function(){
    clearInterval(TimerId);
    TimerId=null;
})
Reset.addEventListener("click",function(){
    clearInterval(TimerId);
    TimerId=null;
    display.innerHTML="00 : 00 : 00";
    MiliSec = Sec = Min = 0 ;

})
function start(){
    MiliSec++;
    if(MiliSec>=100){
        Sec++;
        MiliSec=0;
        if(Sec>=60){
            Min++;
            Sec=0;
        }
    }

    let m = Min < 10 ? "0" + Min : Min ;
    let ms = MiliSec < 10 ? "0" + MiliSec : MiliSec ;
    let s = Sec < 10 ? "0" + Sec : Sec ;
     display.innerHTML = `${m} : ${s} : ${ms}`;
}