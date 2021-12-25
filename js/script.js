var menu_lateral = document.querySelector(".menu-lateral");
console.log(menu_lateral.innerHTML)
menu_lateral.addEventListener("click", function(){
    //toogle adiciona e remove elemeto (classes, id...)
 document.querySelector(".slider-bar").classList.toggle("show-menu");
})