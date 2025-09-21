// Simple CSS-based animations for subtle enhancements

// Simple fade in animation using CSS classes
export const fadeIn = (selector: string, delay: number = 0) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.animationDelay = `${delay + index * 50}ms`;
    htmlElement.classList.add('fade-in-up');
  });
};

// Stagger animation for lists using CSS classes
export const staggerFadeIn = (selector: string, staggerDelay: number = 100) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.animationDelay = `${index * staggerDelay}ms`;
    htmlElement.classList.add('fade-in-up');
  });
};

// Number counter animation
export const animateNumber = (element: HTMLElement, target: number, duration: number = 2000) => {
  if (!element) return;

  let current = 0;
  const increment = target / (duration / 16); // 60fps
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.innerHTML = Math.round(current).toString();
  }, 16);
};

// Smooth scale on hover using CSS transitions
export const addHoverScale = (selector: string, scale: number = 1.05) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.transition = 'transform 0.3s ease';

    element.addEventListener('mouseenter', () => {
      htmlElement.style.transform = `scale(${scale})`;
    });

    element.addEventListener('mouseleave', () => {
      htmlElement.style.transform = 'scale(1)';
    });
  });
};

// Simple slide in from left using CSS classes
export const slideInLeft = (selector: string, delay: number = 0) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.animationDelay = `${delay + index * 100}ms`;
    htmlElement.style.transform = 'translateX(-50px)';
    htmlElement.style.opacity = '0';

    setTimeout(() => {
      htmlElement.style.transition = 'all 0.8s ease-out';
      htmlElement.style.transform = 'translateX(0)';
      htmlElement.style.opacity = '1';
    }, delay + index * 100);
  });
};

// Simple slide in from right using CSS classes
export const slideInRight = (selector: string, delay: number = 0) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((element, index) => {
    const htmlElement = element as HTMLElement;
    htmlElement.style.animationDelay = `${delay + index * 100}ms`;
    htmlElement.style.transform = 'translateX(50px)';
    htmlElement.style.opacity = '0';

    setTimeout(() => {
      htmlElement.style.transition = 'all 0.8s ease-out';
      htmlElement.style.transform = 'translateX(0)';
      htmlElement.style.opacity = '1';
    }, delay + index * 100);
  });
};

// Gentle pulse animation using CSS classes
export const pulse = (selector: string) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach(element => {
    const htmlElement = element as HTMLElement;
    htmlElement.classList.add('animate-pulse');
  });
};