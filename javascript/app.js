const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    
    const swup = new Swup()

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
    $(".hero-statement").text("creator ✍🏽  designer 🎨 plant dad 🌱 snowboarder 🏂 music connoisseur 🎵 pnw wanderer🌲 wood worker 📐 oatmilk lattes ☕️ beliver in aliens 👽 and continually working to sharpen my craft");
})
.mouseleave(function() {
    $(".hero-statement").text("A budding UX/UI designer with a passion for using his brain cells 🧠 to create design experiences that are meaningful, intuitive, and purposeful!");
})

