import React from 'react';

export default function MainCharacter() {
  return (
    <div className="main-character-container">
      {/* Usamos BASE_URL por si Vite cambia la ruta base en GitHub Pages */}
      <img 
        src={`${import.meta.env.BASE_URL}img/principal.png`} 
        alt="Personaje Principal" 
        className="main-character-img"
      />
    </div>
  );
}
