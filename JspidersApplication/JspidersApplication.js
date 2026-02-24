let button=document.getElementById("button");
let list=document.getElementById("ordered_list");
button.addEventListener("click",()=>{
    if(list.style.display=="none")
    {
        list.style.display="flex";
        list.style.transform="translate(0vw)";
        list.style.transition="transform 500ms linear";
    }
    else{
            list.style.display="none";
    }
});