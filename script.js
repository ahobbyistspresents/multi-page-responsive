document.addEventListener("DOMContentLoaded", function() {
    // Load Header and Footer
    fetch("header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-container").innerHTML = data);
    
    fetch("footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-container").innerHTML = data);

    // Mobile Menu Toggle
    setTimeout(() => {
        document.querySelector(".hamburger").addEventListener("click", function() {
            document.querySelector(".nav-links").classList.toggle("show");
        });
    }, 500);
});
