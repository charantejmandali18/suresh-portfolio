// Modern animation utilities using CSS animations and vanilla JS
// More stable alternative to anime.js for Next.js

export const animateElement = (
  element: Element | null,
  animationClass: string,
  delay: number = 0
) => {
  if (!element) return;
  
  setTimeout(() => {
    element.classList.add(animationClass);
  }, delay);
};

export const animateElements = (
  selector: string,
  animationClass: string,
  staggerDelay: number = 100
) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    animateElement(element, animationClass, index * staggerDelay);
  });
};

export const createParticles = (container: HTMLElement | null) => {
  if (!container) return;
  
  const particleCount = 15;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'floating-particle';
    particle.style.cssText = `
      position: absolute;
      width: 4px;
      height: 4px;
      background: linear-gradient(135deg, #10b981, #14b8a6);
      border-radius: 50%;
      pointer-events: none;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float-particle ${3 + Math.random() * 4}s ease-in-out ${Math.random() * 2}s infinite;
    `;
    container.appendChild(particle);
  }
};

export const animateCounter = (
  element: HTMLElement | null,
  target: number,
  duration: number = 2000,
  suffix: string = ''
) => {
  if (!element) return;
  
  const start = 0;
  const increment = target / (duration / 16); // 60fps
  let current = start;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current) + suffix;
  }, 16);
};

export const addHoverEffect = (element: HTMLElement | null) => {
  if (!element) return;
  
  element.addEventListener('mouseenter', () => {
    element.style.transform = 'scale(1.05)';
    element.style.boxShadow = '0 20px 40px rgba(16, 185, 129, 0.3)';
  });
  
  element.addEventListener('mouseleave', () => {
    element.style.transform = 'scale(1)';
    element.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.1)';
  });
  
  element.addEventListener('mousemove', (e) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const spotlight = element.querySelector('.spotlight') as HTMLElement;
    if (spotlight) {
      spotlight.style.background = `
        radial-gradient(
          circle at ${x}px ${y}px,
          rgba(16, 185, 129, 0.2) 0%,
          transparent 50%
        )
      `;
    }
  });
};

export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
      }
    });
  }, observerOptions);
  
  // Observe all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach((element) => {
    observer.observe(element);
  });
  
  return observer;
};

export const typewriterEffect = (
  element: HTMLElement | null,
  text: string,
  speed: number = 50
) => {
  if (!element) return;
  
  element.textContent = '';
  let index = 0;
  
  const timer = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(timer);
    }
  }, speed);
};