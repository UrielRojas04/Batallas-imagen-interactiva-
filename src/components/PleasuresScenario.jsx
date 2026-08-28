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
        src={`${import.meta.env.BASE_URL}img/bola disco.png`} 
        alt="Bola Disco" 
        onClick={() => setIsModalOpen(true)}
      />

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
          Filipenses 4:12
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '15px' }}>
          "Sé vivir con casi nada o con todo lo necesario. He aprendido el secreto de vivir en cualquier situación, sea con el estómago lleno o vacío, con mucho o con poco."
        </p>
      </Modal>
    </section>
  );
}
