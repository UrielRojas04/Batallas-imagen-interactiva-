import React from 'react';

export default function NormalScenario() {
  return (
    <section className="scenario normal-scenario" style={{ '--scenario-offset': '0vw' }}>
      <img 
        src={`${import.meta.env.BASE_URL}img/escenario normal.jpg`} 
        alt="Escenario Normal" 
        className="background-img"
      />
      
      {/* Título en el cielo */}
      <div className="parallax-layer title-layer" style={{ '--parallax-factor': '0.05' }}>
        <h1 className="biblical-title">LAS BATALLAS</h1>
        <h2 className="biblical-subtitle">Estudio Jueves iglesia PDE</h2>
      </div>

      {/* Nubes individuales con distinto parallax sutil para que viajen CON el escenario */}
      <div className="parallax-layer cloud-1" style={{ '--parallax-factor': '0.02' }}>
        <img src={`${import.meta.env.BASE_URL}img/nube 1.png`} alt="Nube 1" />
      </div>
      <div className="parallax-layer cloud-2" style={{ '--parallax-factor': '0.06' }}>
        <img src={`${import.meta.env.BASE_URL}img/nube 2.png`} alt="Nube 2" />
      </div>
      <div className="parallax-layer cloud-3" style={{ '--parallax-factor': '0.04' }}>
        <img src={`${import.meta.env.BASE_URL}img/nubes 3.png`} alt="Nube 3" />
      </div>
    </section>
  );
}
