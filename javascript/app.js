const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click',() => {
    //Toggle Nav
    nav.classList.toggle('nav-active');
    //Animate Links
        navLinks.forEach((link, index) => {
        if(link.style.animation){
            link.style.animation = ''
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.8}s`;
        }
        });
    //Burger Animation
    burger.classList.toggle('toggle');
    });
}

navSlide();

$(".btnPrimary").mouseenter(function() {
    $(".hero-statement").text("creator βπ½  designer π¨ plant dad π± snowboarder π music connoisseur π΅ pnw wandererπ² wood worker π oatmilk lattes βοΈ beliver in aliens π½ and continually working to sharpen my craft.");

})

.mouseleave(function() {
    $(".hero-statement").text("A budding UX/UI designer with a passion for creating meaningful, intuitive, and purposeful design experiences!");
})

