let var1=document.querySelectorAll(".modal img");
console.log(var1);
var1.forEach(el=>{
    el.addEventListener("click",function(ev){
        ev.stopPropagation();
        this.parentNode.classList.add("active");
        this.parentNode.querySelector(".difuminado").style.display='none';
            
    })
});

document.querySelectorAll(".modal").forEach(el=>{
    el.addEventListener("click",function(ev){
        this.classList.remove("active");
        this.parentNode.querySelector(".difuminado").style.display='block';     
    })
});
