import { useEffect, useRef } from 'react';

export function useParallaxEngine(onIndexChange) {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentScroll = container.scrollLeft;
    let lastIndex = 0;

    const updateScroll = () => {
      // Inyectar variable CSS en el elemento raíz para que todos los hijos puedan leerla
      document.documentElement.style.setProperty('--scroll-x', `${currentScroll}px`);
      
      if (onIndexChange) {
        const index = Math.round(currentScroll / window.innerWidth);
        if (index !== lastIndex) {
          lastIndex = index;
          onIndexChange(index);
        }
      }
      
      rafRef.current = null;
    };

    const handleScroll = () => {
      currentScroll = container.scrollLeft;
      if (!rafRef.current) {
        rafRef.current = requestAnimationFrame(updateScroll);
      }
    };

    // Inicializar el valor al montar
    updateScroll();

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return containerRef;
}
