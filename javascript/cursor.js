let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll('.nav-links li, .btmfoot li a, .topfoot li a, .logo, .btnPrimary, .arrowBTN, .bottomItems a, .social a, .content-box3 a, .contactbox-2 a, .dropdown a');

window.addEventListener('mousemove',cursor);

function cursor(e) {
    mouseCursor.style.top = e.pageY + 4 + 'px';
    mouseCursor.style.left = e.pageX + 4 + 'px';
}

navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('link-grow')
    });
});

navLinks.forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('link-grow')
    });
});