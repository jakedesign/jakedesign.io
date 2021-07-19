let mouseCursor = document.querySelector(".cursor");
<<<<<<< HEAD
let navLinks = document.querySelectorAll('.nav-links li, .logo, .btnPrimary, .arrowBTN, .bottomItems a, .social a, .content-box3 a, .contactbox-2 a');
=======
>>>>>>> parent of b233de4 (mouse cursor updates)

window.addEventListener('mousemove', cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

