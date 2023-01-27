const icon_menu = document.querySelector('.button_menu');

if (icon_menu){
    const menu_body = document.querySelector('.menu_body');
    icon_menu.addEventListener("click", function(e) {
        document.classList.body.toggle('_lock');
        icon_menu.classList.toggle('active');
        menu_body.classList.toggle('active');

    })

}
