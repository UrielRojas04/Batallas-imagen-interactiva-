import React, { useRef, useEffect, useState } from 'react';
import InteractiveObject from './InteractiveObject';
import Modal from './Modal';

export default function PleasuresScenario() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.3 }
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="scenario pleasures-scenario" style={{ '--scenario-offset': '300vw' }}>
      <img 
        src={`${import.meta.env.BASE_URL}img/escenario placeres.jpg`} 
        alt="Escenario Placeres" 
        className="background-img"
      />
      
      {/* Objeto: Bola Disco */}
      <InteractiveObject 
        className="bola-disco" 
        parallaxFactor="0.08" 
        src={`${import.meta.env.BASE_URL}img/bola-disco.png`} 
        alt="Bola Disco" 
        onClick={() => setIsModalOpen(true)}
      />

      {/* Indicador de Toca Aquí */}
      <div className="parallax-layer click-hint hint-bola-disco" style={{ '--parallax-factor': '0.08' }}>
        <span className="hint-text">TOCA AQUÍ</span>
        <span className="hint-arrow">▲</span>
      </div>

      {/* Título en el cielo */}
      <div className="parallax-layer title-layer" style={{ '--parallax-factor': '0' }}>
        <h1 
          ref={titleRef}
          className={`biblical-title ${isVisible ? 'fade-in-slow' : 'opacity-0'}`}
        >
          EL MUNDO
        </h1>
      </div>

      {/* Modal del Escenario */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} theme="pleasures">
        <h2 className="biblical-title" style={{ fontSize: '1.8rem', textShadow: '0 0 10px rgba(255,20,147,0.5)', opacity: 1 }}>
          1 Juan 2:15-16
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '15px' }}>
          "No amen a este mundo ni las cosas que les ofrece, porque cuando aman al mundo no tienen el amor del Padre en ustedes. Pues el mundo solo ofrece un intenso deseo por el placer físico, un deseo insaciable por todo lo que vemos, y el orgullo de nuestros logros y posesiones. Nada de eso proviene del Padre, sino que viene del mundo."
        </p>
      </Modal>
    </section>
  );
}
