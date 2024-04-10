const button = document.querySelector('button');
const social = document.querySelector('.social');
const contact_info = document.querySelector('.contact_info');
const contact = document.querySelector('.contact');
const mediaQuery = window.matchMedia('(min-width: 600px)');


button.addEventListener('click', function() {
    if (mediaQuery.matches) {
        social.style.display = "flex";
    }
    else {
        social.style.display = "flex";
        contact_info.style.display = "none";
        contact.style.backgroundColor = "var(--clr-dark)";
    }
})

contact.addEventListener('mouseleave', () => {
    // social.style.display = 'none';
    if (mediaQuery.matches) {
        social.style.display = "none";
    }
    else {
        social.style.display = "none";
        contact_info.style.display = "flex";
        contact.style.backgroundColor = "white";
    }
})
