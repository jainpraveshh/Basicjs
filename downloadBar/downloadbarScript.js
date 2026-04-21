let count=0;

let progresssss = document.querySelector(".progress-bar");
let percent = document.querySelector("#percent");

setInterval(function(){
    if(count<=99){
        count++;
    progresssss.style.width = `${count}%`;
    percent.textContent = `${count}%`;
}},30)