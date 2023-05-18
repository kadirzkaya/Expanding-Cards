const img=document.querySelectorAll("img");
const frm=document.querySelectorAll(".frame");

img.forEach(item => {
    item.addEventListener("click",function(){
        frm.forEach(i=>{
            i.classList.remove("show");
        });
        item.parentElement.classList.add("show")
    })    
});
