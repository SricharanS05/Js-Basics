function addtask(){
    let task=document.getElementById("task").value;
    let tp=document.getElementById("task");
    if(task===""){
        alert("Please enter a task");
        return;
    }
    let ol=document.getElementById("list");
    let li=document.createElement("li");
    li.textContent=task;
    let com=document.createElement("button");
    com.innerHTML="Completed the task";
    com.onclick=function(){
        if(li.style.textDecoration!=="line-through"){
            li.style.textDecoration="line-through";
            com.textContent = "Undo";
        }
        else {
            li.style.textDecoration="none";
            com.textContent = "Complete the task";
        }
    }
    let but=document.createElement("button");
    but.textContent="Delete the task";
    but.onclick=function(){
        li.remove();
    }
    li.appendChild(com);
    li.appendChild(but);
    ol.appendChild(li);
    tp.value="";
}