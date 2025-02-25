document.addEventListener("DOMContentLoaded", function() {
    // Load Header and Footer
    fetch("includes/header.html")
        .then(response => response.text())
        .then(data => document.getElementById("header-placeholder").innerHTML = data);
    
    fetch("includes/footer.html")
        .then(response => response.text())
        .then(data => document.getElementById("footer-placeholder").innerHTML = data);

    // Mobile Menu Toggle
    setTimeout(() => {
        document.querySelector(".hamburger").addEventListener("click", function() {
            document.querySelector(".nav-links").classList.toggle("show");
        });
    }, 500);
});
