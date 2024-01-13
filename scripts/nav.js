const navToggle = () => {
    const menu = document.querySelector('.button-toogler');
    const nav = document.querySelector('.navbar-links-dropdown');
    console.log("Button has been clicked");

    menu.addEventListener('click', () => {
        nav.classList.toggle('navbar-links-dropdown-active');
    });

}

navToggle();