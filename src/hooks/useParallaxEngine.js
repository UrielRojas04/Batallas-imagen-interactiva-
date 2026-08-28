import { useEffect, useRef } from 'react';

export function useParallaxEngine() {
  const containerRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let currentScroll = container.scrollLeft;

    const updateScroll = () => {
      // Inyectar variable CSS en el elemento raíz para que todos los hijos puedan leerla
      document.documentElement.style.setProperty('--scroll-x', `${currentScroll}px`);
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
