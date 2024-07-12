document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Interactive football
    var futbol = document.getElementById("futbol");

    futbol.addEventListener("click", function() {
        futbol.style.animation = "bounceFootball 1s ease-out";
        futbol.addEventListener("animationend", function() {
            futbol.style.animation = "moveFootball 5s linear infinite";
        }, { once: true });
    });
});
