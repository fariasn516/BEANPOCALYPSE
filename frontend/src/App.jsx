import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import PhoneScreen from './components/PhoneScreen';
import DriverScreen from './components/DriverScreen';
import IntroScreen from './components/IntroScreen';
import CharacterSelection from './components/CharacterSelection';
import AwaitingBattle from './components/AwaitingBattle';
import DuringBattle from './components/DuringBattle';
import RestStop from './components/RestStop';
import FinalBattle from './components/FinalBattle';


function App() {
  return (
      <GameProvider>
        <PhoneScreen>
          <Routes>
            <Route path="/driver" element={<DriverScreen />} />
            <Route path="/" element={<IntroScreen />} />
            <Route path="/character-selection" element={<CharacterSelection />} />
            <Route path="/awaiting-battle" element={<AwaitingBattle />} />
            <Route path="/during-battle" element={<DuringBattle />} />
            <Route path="/rest-stop" element={<RestStop />} />
            <Route path="/driver-screen" element={<DriverScreen />} />
            <Route path="/final-battle" element={<FinalBattle />} />
          </Routes>
        </PhoneScreen>
      </GameProvider>
  );
}

export default App;