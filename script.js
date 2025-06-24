const addbtn=document.getElementById("addbtn");
const input=document.getElementById("in");
const tlist=document.getElementById("list");
addbtn.onclick=function () {
    let task=input.value.trim();
    if(task == ""){
        alert("Enter a task first!");
    }
    else{
        let list=document.createElement("li");
        let checkbox=document.createElement("input");
        checkbox.type="checkbox";
        let taskspan=document.createElement("span");
        taskspan.textContent=task;
        let attr1 = document.createAttribute("class");
        attr1.value = "task";                       
        taskspan.setAttributeNode(attr1);
        checkbox.onchange=function(){
            if(checkbox.checked){
                taskspan.style.textDecoration="line-through";
                taskspan.style.color="grey";
            }
            else{
                taskspan.style.textDecoration="none";
                taskspan.style.color="black";
            }
        };
        const delbtn=document.createElement("button");
        delbtn.innerHTML="&times";
        let attr2=document.createAttribute("class");
        attr2.value="dlt";
        delbtn.setAttributeNode(attr2);
        delbtn.onclick=function() {
            tlist.removeChild(list);
        };
        list.appendChild(checkbox);
        list.appendChild(taskspan);
        list.appendChild(delbtn);
        tlist.appendChild(list);
        input.value="";


    }
}