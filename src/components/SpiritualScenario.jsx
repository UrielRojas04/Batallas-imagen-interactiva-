import React, { useRef, useEffect, useState } from 'react';
import InteractiveObject from './InteractiveObject';
import Modal from './Modal';

export default function SpiritualScenario() {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const titleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false); /* Para que vuelva a aparecer si va y vuelve */
        }
      },
      { threshold: 0.3 } /* Dispara cuando un 30% es visible */
    );

    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="scenario spiritual-scenario" style={{ '--scenario-offset': '100vw' }}>
      <img 
        src={`${import.meta.env.BASE_URL}img/escenario espiritual.png`} 
        alt="Escenario Espiritual" 
        className="background-img"
      />
      
      {/* Título en el cielo con efecto de fade-in controlado por scroll */}
      <div className="parallax-layer title-layer" style={{ '--parallax-factor': '0.05' }}>
        <h1 
          ref={titleRef}
          className={`biblical-title ${isVisible ? 'fade-in-slow' : 'opacity-0'}`}
        >
          BATALLA ESPIRITUAL
        </h1>
      </div>

      {/* Armadura abajo a la izquierda */}
      <InteractiveObject 
        className="armadura" 
        parallaxFactor="0.1" 
        src={`${import.meta.env.BASE_URL}img/armadura.png`} 
        alt="Armadura" 
        onClick={() => setIsModalOpen(true)}
      />

      {/* Ángel 4 arriba a la izquierda */}
      <InteractiveObject 
        className="angel-4" 
        parallaxFactor="0.15" 
        src={`${import.meta.env.BASE_URL}img/angel 4.png`} 
        alt="Angel 4" 
      />

      {/* Ángel 3 a la izquierda */}
      <InteractiveObject 
        className="angel-3" 
        parallaxFactor="0.12" 
        src={`${import.meta.env.BASE_URL}img/angel 3.png`} 
        alt="Angel 3" 
      />

      {/* Demonio 4 arriba a la derecha */}
      <InteractiveObject 
        className="demonio-4" 
        parallaxFactor="0.15" 
        src={`${import.meta.env.BASE_URL}img/demonio 4.png`} 
        alt="Demonio 4" 
      />

      {/* Demonio 3 a la derecha */}
      <InteractiveObject 
        className="demonio-3" 
        parallaxFactor="0.12" 
        src={`${import.meta.env.BASE_URL}img/demonio 3.png`} 
        alt="Demonio 3" 
      />

      {/* Modal del Escenario Espiritual */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} theme="spiritual">
        <h2 className="biblical-title" style={{ fontSize: '1.8rem', textShadow: '0 0 10px rgba(0, 191, 255, 0.5)', opacity: 1 }}>
          Efesios 6:12-13
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '15px', textAlign: 'justify' }}>
          "Pues no luchamos contra enemigos de carne y hueso, sino contra gobernadores malignos y autoridades del mundo invisible, contra fuerzas poderosas de este mundo tenebroso y contra espíritus malignos de los lugares celestiales. Por lo tanto, pónganse todas las piezas de la armadura de Dios para poder resistir al enemigo en el tiempo del mal. Así, después de la batalla, todavía seguirán de pie, firmes."
        </p>
      </Modal>

      {/* Indicador de scroll */}
      <div className="scroll-indicator">
        Desliza para explorar <span className="arrow">➔</span>
      </div>
    </section>
  );
}
