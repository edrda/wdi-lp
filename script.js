document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById("servicesCarousel");
    const items = carousel.children;
    let speed = 2; // Velocidade do carrossel (ajustável)
    
    function startCarousel() {
        setInterval(() => {
            // Move o primeiro item para o final da lista
            let firstItem = items[0];
            carousel.appendChild(firstItem.cloneNode(true)); // Clona o primeiro item
            carousel.removeChild(firstItem); // Remove o original
        }, 2000); // Tempo para mover os itens (ajustável)
    }

    startCarousel();
});
