document.addEventListener("DOMContentLoaded", function() {
    console.log("Bienvenue sur le site de Uriel !");

    const header = document.querySelector("header");
    header.addEventListener("click", function() {
        header.style.backgroundColor = "darkgreen";
        alert("Tu as cliqué sur l'en-tête !");
    });

    const bouton = document.getElementById("btnMessage");
    bouton.addEventListener("click", function() {
        window.location.href = "https://wa.me/2250555489483?text=Bonjour%20Uriel%2C%20je%20viens%20de%20visiter%20ton%20site%20et%20voici%20mon%20appréciation:";
    });

    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        section.addEventListener("mouseenter", function() {
            section.style.backgroundColor = "lightyellow";
        });
        section.addEventListener("mouseleave", function() {
            section.style.backgroundColor = "white";
        });
    });
});
