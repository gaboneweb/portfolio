const navToggle = () => {
    const menu = document.querySelector('.button-toogler');
    const nav = document.querySelector('.navbar-links');
    

    menu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

}

navToggle();