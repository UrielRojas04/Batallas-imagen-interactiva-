import React, { useState } from 'react';

export default function InteractiveObject({ src, alt, parallaxFactor, className, onClick }) {
  const [isInteracting, setIsInteracting] = useState(false);

  const handleInteract = () => {
    if (isInteracting) return;
    setIsInteracting(true);
    
    // Disparar evento al padre si existe
    if (onClick) {
      onClick();
    }
    
    // Remover la clase después de 500ms (lo que dure la animación en CSS)
    setTimeout(() => {
      setIsInteracting(false);
    }, 500);
  };

  return (
    <div 
      className={`parallax-layer ${className || ''}`} 
      style={{ '--parallax-factor': parallaxFactor }}
      onClick={handleInteract}
    >
      <img 
        src={src} 
        alt={alt} 
        className={isInteracting ? 'interacting' : ''}
      />
    </div>
  );
}
