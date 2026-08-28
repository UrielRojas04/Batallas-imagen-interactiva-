import React, { useRef, useEffect, useState } from 'react';
import InteractiveObject from './InteractiveObject';
import Modal from './Modal';

export default function MirrorScenario() {
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
    <section className="scenario mirror-scenario" style={{ '--scenario-offset': '200vw' }}>
      <img 
        src={`${import.meta.env.BASE_URL}img/escenario espejo.jpg`} 
        alt="Escenario Espejo" 
        className="background-img"
      />
      
      {/* Objeto: Pelota (Balón) en la esquina inferior izquierda */}
      <InteractiveObject 
        className="pelota" 
        parallaxFactor="0.1" 
        src={`${import.meta.env.BASE_URL}img/pelota.png`} 
        alt="Balón" 
        onClick={() => setIsModalOpen(true)}
      />

      {/* Título en el cielo */}
      <div className="parallax-layer title-layer" style={{ '--parallax-factor': '0.05' }}>
        <h1 
          ref={titleRef}
          className={`biblical-title ${isVisible ? 'fade-in-slow' : 'opacity-0'}`}
        >
          CONTRA NOSOTROS<br/>MISMOS
        </h1>
      </div>

      {/* Modal del Escenario Espejo */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} theme="mirror">
        <h2 className="biblical-title" style={{ fontSize: '1.8rem', textShadow: '0 0 10px rgba(255, 255, 255, 0.5)', opacity: 1 }}>
          Gálatas 5:16-17
        </h2>
        <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '1.1rem', lineHeight: '1.6', marginTop: '15px', textAlign: 'justify' }}>
          "Por eso les digo: dejen que el Espíritu Santo los guíe en la vida. Entonces no se dejarán llevar por los impulsos de la naturaleza pecaminosa. La naturaleza pecaminosa desea hacer el mal, que es precisamente lo contrario de lo que quiere el Espíritu. Y el Espíritu nos da deseos que se oponen a lo que desea la naturaleza pecaminosa. Estas dos fuerzas luchan constantemente entre sí, entonces ustedes no son libres para llevar a cabo sus buenas intenciones."
        </p>
      </Modal>
    </section>
  );
}
