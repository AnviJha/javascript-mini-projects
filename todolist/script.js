let btn= document.querySelector("button");
let inp=document.querySelector("input");
let lis=document.querySelector("ol");

btn.addEventListener("click",function(){

      let task = inp.value.trim(); // remove extra spaces

    // ❌ if empty → stop
    if (task === "") {
        alert("Please enter a task!");
        return;
    }
    
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delbtn=document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    lis.appendChild(item);
    inp.value="";
})


lis.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let listitem=event.target.parentElement;
        listitem.remove();
        console.log("delete");
    }
});