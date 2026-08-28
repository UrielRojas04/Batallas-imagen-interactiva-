import { useParallaxEngine } from './hooks/useParallaxEngine';
import MainCharacter from './components/MainCharacter';
import NormalScenario from './components/NormalScenario';
import SpiritualScenario from './components/SpiritualScenario';
import MirrorScenario from './components/MirrorScenario';
import PleasuresScenario from './components/PleasuresScenario';
import './App.css';

function App() {
  const scrollRef = useParallaxEngine();

  return (
    <div className="scroll-container" ref={scrollRef}>
      <MainCharacter />
      <NormalScenario />
      <SpiritualScenario />
      <MirrorScenario />
      <PleasuresScenario />
    </div>
  );
}

export default App;
