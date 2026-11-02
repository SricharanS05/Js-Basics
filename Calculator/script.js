function calc(){
    let a=Number(document.getElementById("n1").value);
    let b=Number(document.getElementById("n2").value);
    let res;
    let op=document.getElementById("operator").value;
    if(op==="+"){
        res=a+b;
    }
    else if(op=="-"){
        res=a-b;
    }
    else if(op=="*"){
        res=a*b;
    }
    else{
        if(b==0){
            res="Error:Division by Zero";
        }
        else{
            res=a/b;
        }
    }
    document.getElementById("res").textContent=res;
}
function clearvalue(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
}