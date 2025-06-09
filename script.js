let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
/*-----HIGHLET EFFECT------*/
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let currentSection = "";

    document.querySelectorAll("section").forEach((section) => {
        const sectionTop = section.offsetTop - 50; // Adjust for header height
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });
 navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href").substring(1) === currentSection) {
            link.classList.add("active-link");
        }
    });
});
// typewriter effect
 var typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Web Designer', 'UI/UX Designer'],
      loop: true,
      typeSpeed: 120,
      backSpeed: 100,
      backDelay: 1000
    });