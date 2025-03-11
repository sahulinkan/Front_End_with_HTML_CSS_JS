const panels=document.querySelectorAll(".panel")

function removeActiveclass(){
    panels.forEach((panel)=>{
        panel.classList.remove("active")
    })
}

panels.forEach((panel)=>{
    panel.addEventListener('click',()=>{
        removeActiveclass();
        panel.classList.toggle("active");

    })
})