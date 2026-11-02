let timeleft=0;
let originaltime=0;
let timerid=null;
function ShowTime(){
    let time=document.getElementById("display");
    let min=Math.floor(timeleft/60);
    let secs=Math.floor(timeleft%60);
    time.textContent=String(min).padStart(2,"0")+":"+String(secs).padStart(2,"0");
}
function StartTime(){
    if(timerid !== null){
        return;
    }
    if(timeleft<=0){
        let inp=Number(document.getElementById("sec").value);
        if(inp<=0 || !Number.isFinite(inp) || !Number.isInteger(inp)){
            document.getElementById("message").textContent="Please enter a valid number in seconds!";
        }
        timeleft=inp;
        originaltime=inp;
        ShowTime();
    }
    timerid=setInterval(function(){
        timeleft--;
        ShowTime();
        if(timeleft==0){
            clearInterval(timerid);
            timerid=null;
            document.getElementById("message").textContent="TIME IS UP BRO!";
        }
    },1000);
}
function PauseTime(){
    if(timerid!==null){
        clearInterval(timerid);
        timerid=null;
    }
}
function ResetTime(){
    if(timerid!==null){
        clearInterval(timerid);
        timerid=null;
    }
    timeleft=originaltime;
    ShowTime();
}
