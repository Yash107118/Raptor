var MenuItems = document.getElementById("myTopnav");

function myFunction() {   
    if (MenuItems.classList.length === 1) {
        MenuItems.classList.add("nav-list--xs");

    } else {
        MenuItems.classList.remove("nav-list--xs");
        MenuItems.style.display = "none";
    }
}

window.addEventListener('scroll', function () {
    let nav = document.getElementById("nav")
    let windowscroll = window.scrollY > 100;
    if (windowscroll) {
        nav.classList.add('navbar-scroll');

    } else {
        nav.classList.remove("navbar-scroll");
    }
})