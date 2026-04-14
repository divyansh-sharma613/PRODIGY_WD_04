// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Navbar scroll effect
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.style.background = window.scrollY > 50 ? "#000" : "#222";
});

// Project click glow
function selectProject(element) {
    let projects = document.querySelectorAll(".project");

    if (element.classList.contains("active")) {
        element.classList.remove("active");
        return;
    }

    projects.forEach(p => p.classList.remove("active"));
    element.classList.add("active");
}