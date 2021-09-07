
const navbar = document.getElementById("navbar")
const menu_open = document.querySelector("#menu__hamburger"),
 close_icon = document.getElementById("menu__close");
//  navbar = document.getElementById(navbarId);

const showMenu = (navbarId) => {
    console.log("test")

    if (menu_open){
        menu_open.addEventListener("click", ()=>{
            console.log("test2")
            navbar.classList.toggle("show");

        });
        close_icon.addEventListener("click", () =>{
            navbar.classList.toggle("show")
        })
    }
    else{
        console.log(menu_open);
    }
}
showMenu("navbar");


