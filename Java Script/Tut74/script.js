let button=document.querySelector("#btn")

button.addEventListener("dblclick",()=>{
    document.querySelector(".container").innerHTML="You were clicked!!!";
})

button.addEventListener("contextmenu",()=>{
    alert("Right is not allowed");
})

button.addEventListener("keydown",(e)=>{
    console.log(e,e.key,e.keyCode);
})