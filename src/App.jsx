import { useState } from 'react';
import { useParallaxEngine } from './hooks/useParallaxEngine';
import MainCharacter from './components/MainCharacter';
import NormalScenario from './components/NormalScenario';
import SpiritualScenario from './components/SpiritualScenario';
import MirrorScenario from './components/MirrorScenario';
import PleasuresScenario from './components/PleasuresScenario';
import './App.css';

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useParallaxEngine(setActiveIndex);

  return (
    <>
      <div className="pagination-dots">
        {[0, 1, 2, 3].map(i => (
          <div key={i} className={`dot ${activeIndex === i ? 'active' : ''}`} />
        ))}
      </div>
      <div className="scroll-container" ref={scrollRef}>
        <MainCharacter />
        <NormalScenario />
        <SpiritualScenario />
        <MirrorScenario />
        <PleasuresScenario />
      </div>
    </>
  );
}

export default App;
