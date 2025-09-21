// Initialize anime.js only in browser environment
const getAnime = () => {
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const animeLib = require('animejs');
    return animeLib.default || animeLib;
  }
  return null;
};

// Text animation utilities
export const animateText = (element: string | HTMLElement, options?: Record<string, unknown>) => {
  const anime = getAnime();
  if (!anime) return;
  const defaultOptions = {
    opacity: [0, 1],
    translateY: [30, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: anime.stagger ? anime.stagger(100) : 0,
    ...options
  };
  
  return anime({
    targets: element,
    ...defaultOptions
  });
};

// Typewriter effect
export const typewriterEffect = (element: string | HTMLElement) => {
  const anime = getAnime();
  if (!anime) return;
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const text = el.textContent || '';
  el.textContent = '';
  (el as HTMLElement).style.opacity = '1';
  
  return anime({
    targets: el,
    innerHTML: [0, text.length],
    easing: 'linear',
    round: 1,
    duration: text.length * 50,
    update: function(anim: { animations: { currentValue: number }[] }) {
      el.innerHTML = text.substring(0, Math.round(anim.animations[0].currentValue));
    }
  });
};

// Gradient text animation
export const gradientTextAnimation = (element: string | HTMLElement) => {
  const anime = getAnime();
  if (!anime) return;
  return anime({
    targets: element,
    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
    easing: 'easeInOutQuad',
    duration: 5000,
    loop: true
  });
};

// Particle effect for background
export const createParticles = (container: string | HTMLElement) => {
  const anime = getAnime();
  if (!anime) return;
  const containerEl = typeof container === 'string' ? document.querySelector(container) : container;
  if (!containerEl) return;
  
  const particleCount = 20;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: linear-gradient(135deg, #10b981, #14b8a6);
      border-radius: 50%;
      pointer-events: none;
      opacity: 0;
    `;
    containerEl.appendChild(particle);
  }
  
  return anime({
    targets: '.particle',
    translateX: () => Math.random() * 400 - 200,
    translateY: () => Math.random() * 400 - 200,
    scale: [0, Math.random() + 1],
    opacity: [0, 1, 0],
    easing: 'easeOutExpo',
    duration: Math.random() * 2000 + 2000,
    delay: anime.stagger ? anime.stagger(100) : 0,
    loop: true
  });
};

// Card hover animation with spotlight effect
export const cardHoverAnimation = (card: HTMLElement) => {
  const anime = getAnime();
  if (!anime) return () => {};
  let animation: unknown | null = null;

  const handleMouseEnter = () => {
    animation = anime({
      targets: card,
      scale: 1.05,
      boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
      easing: 'easeOutExpo',
      duration: 300
    });
  };
  
  const handleMouseLeave = () => {
    if (animation && typeof animation === 'object' && 'pause' in animation) {
      (animation as { pause: () => void }).pause();
    }
    anime({
      targets: card,
      scale: 1,
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
      easing: 'easeOutExpo',
      duration: 300
    });
  };
  
  const handleMouseMove = (e: MouseEvent) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const spotlight = card.querySelector('.spotlight');
    if (spotlight) {
      (spotlight as HTMLElement).style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(16, 185, 129, 0.2) 0%,
          transparent 50%
        )
      `;
    }
  };
  
  card.addEventListener('mouseenter', handleMouseEnter);
  card.addEventListener('mouseleave', handleMouseLeave);
  card.addEventListener('mousemove', handleMouseMove);
  
  // Return cleanup function
  return () => {
    card.removeEventListener('mouseenter', handleMouseEnter);
    card.removeEventListener('mouseleave', handleMouseLeave);
    card.removeEventListener('mousemove', handleMouseMove);
  };
};

// Stagger reveal animation for lists
export const staggerReveal = (targets: string | NodeList | HTMLElement[], options?: Record<string, unknown>) => {
  const anime = getAnime();
  if (!anime) return;
  const defaultOptions = {
    opacity: [0, 1],
    translateY: [50, 0],
    rotateX: [90, 0],
    easing: 'easeOutExpo',
    duration: 1000,
    delay: anime.stagger ? anime.stagger(100, { start: 200 }) : 200,
    ...options
  };
  
  return anime({
    targets,
    ...defaultOptions
  });
};

// Floating animation for elements
export const floatingAnimation = (element: string | HTMLElement) => {
  const anime = getAnime();
  if (!anime) return;
  return anime({
    targets: element,
    translateY: [-10, 10],
    easing: 'easeInOutSine',
    duration: 2000,
    loop: true,
    direction: 'alternate'
  });
};

// Morphing shape animation
export const morphAnimation = (element: string | HTMLElement) => {
  const anime = getAnime();
  if (!anime) return;
  return anime({
    targets: element,
    borderRadius: ['20%', '50%', '20%'],
    rotate: [0, 180, 360],
    easing: 'easeInOutQuad',
    duration: 3000,
    loop: true
  });
};

// Neon glow effect
export const neonGlow = (element: string | HTMLElement) => {
  const anime = getAnime();
  if (!anime) return;
  return anime({
    targets: element,
    boxShadow: [
      '0 0 10px rgba(16, 185, 129, 0.5)',
      '0 0 30px rgba(16, 185, 129, 0.8)',
      '0 0 10px rgba(16, 185, 129, 0.5)'
    ],
    easing: 'easeInOutQuad',
    duration: 2000,
    loop: true
  });
};

// Timeline animation for complex sequences
export const createTimeline = () => {
  const anime = getAnime();
  if (!anime) return null;
  return anime.timeline({
    easing: 'easeOutExpo',
    duration: 1000
  });
};