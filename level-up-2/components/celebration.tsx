// celebration.js
function createParticleElement(color: string) {
  const particle: HTMLElement = document.createElement('span');
  particle.style.position = 'absolute';
  particle.style.top = '0';
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.width = '10px';
  particle.style.height = '10px';
  particle.style.borderRadius = '50%';
  particle.style.background = color;
  particle.style.opacity = '0';
  particle.style.animation = `fall 3s linear forwards ${Math.random() * 3}s`;

  return particle;
  }

  export function startCelebration() {
    const colors: string[] = ['#008080', '#FFA07A', '#20B2AA', '#FF7F50', '#48D1CC', '#FF6347'];
    const celebrationContainer: HTMLElement = document.createElement("div");
    celebrationContainer.style.position = 'fixed';
    celebrationContainer.style.top = '0';
    celebrationContainer.style.left = '0';
    celebrationContainer.style.width = '100%';
    celebrationContainer.style.height = '100%';
    celebrationContainer.style.zIndex = '9999';
    celebrationContainer.style.pointerEvents = 'none';

    for (let i = 0; i < 100; i++) {
      const particles = createParticleElement(colors[Math.floor(Math.random() * colors.length)]);
      celebrationContainer.appendChild(particles);
    }

    document.body.appendChild(celebrationContainer);

    setTimeout(() => {
      document.body.removeChild(celebrationContainer);
    }, 6000);
  }
