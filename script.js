document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("servicesTrack");
  const items = Array.from(track.children);
  let speed = 0.5; // pixels por frame
  let position = 0;

  // Clona os itens para criar um loop contínuo
  items.forEach(item => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
  });

  function animate() {
    position -= speed;
    if (Math.abs(position) >= track.scrollWidth / 2) {
      position = 0;
    }
    track.style.transform = `translateX(${position}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

// form result

const form = document.getElementById("contactForm");
const result = document.getElementById("form-result");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  
  const response = await fetch("https://formspree.io/f/mwpbnbob", {
    method: "POST",
    headers: { "Accept": "application/json" },
    body: formData
  });
  
  if (response.ok) {
    result.textContent = "✅ Obrigado! Sua mensagem foi enviada com sucesso.";
    result.style.display = "block";
    form.reset();
  } else {
    result.textContent = "❌ Ocorreu um erro. Por favor, tente novamente.";
    result.style.display = "block";
  }
});