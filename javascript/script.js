function toggleArrow(){
    const toggleButton = document.getElementById('toggle-arrow');
    const navLinks = document.getElementById('navlinks');
    toggleButton.classList.toggle('rotate-arrow');
    navLinks.classList.toggle('toggle-navlink');
}