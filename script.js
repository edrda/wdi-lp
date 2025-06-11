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
