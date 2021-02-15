let menus=document.querySelectorAll(".menu div");
let contents=document.querySelectorAll(".content div");

for (const menu of menus) {
    menu.addEventListener("click",function(){
        let active=document.querySelector(".active")
        this.classList.add("active");
        active.classList.remove("active");
        let index=this.getAttribute("data-index");
        contents.forEach(content => {
            if(content.getAttribute("data-index")==index){
                content.classList.remove("d-none")
            }else{
                content.classList.add("d-none")
            }
        })
    })
}