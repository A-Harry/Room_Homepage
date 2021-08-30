
const navbar = document.getElementById("navbar")
const menu_icon = document.getElementById("menu_icon"),
 close_icon = document.getElementById("menu_close");
//  navbar = document.getElementById(navbarId);

const showMenu = (navbarId) => {
    console.log("test")

    if (menu_icon && close_icon){
        menu_icon.addEventListener("click", ()=>{
            console.log("test2")
            navbar.classList.toggle("show");

        });
        close_icon.addEventListener("click", ()=>{
            navbar.classList.toggle("show");

        });
    }
    else{
        console.log(menu_icon);
    }
}
showMenu("navbar");


