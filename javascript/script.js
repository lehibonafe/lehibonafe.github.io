function toggleArrow(){
    const toggleButton = document.getElementById('toggle-arrow');
    const navLinks = document.getElementById('navlinks');
    toggleButton.classList.toggle('rotate-arrow');
    navLinks.classList.toggle('toggle-navlink');
}
window.addEventListener('scroll', function() {
    var nav = document.querySelector('.nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
})