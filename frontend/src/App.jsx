import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { GameProvider } from './context/GameContext';
import PhoneScreen from './components/PhoneScreen';
import DriverScreen from './components/DriverScreen';
import SleeperScreen from './components/SleeperScreen';
import IntroScreen from './components/IntroScreen';
import CharacterSelection from './components/CharacterSelection';
import AwaitingBattle from './components/AwaitingBattle';
import DuringBattle from './components/DuringBattle';
import RestStop from './components/RestStop';

function App() {
  return (
    <GameProvider>
      <PhoneScreen>
        <BrowserRouter>
          <Routes>
            <Route path="/driver" element={<DriverScreen />} />
            <Route path="/sleeper" element={<SleeperScreen />} />
            <Route path="/" element={<IntroScreen />} />
        <Route path="/character-selection" element={<CharacterSelection />} />
        <Route path="/awaiting-battle" element={<AwaitingBattle />} />
        <Route path="/during-battle" element={<DuringBattle />} />
        <Route path="/rest-stop" element={<RestStop />} />
          </Routes>
        </BrowserRouter>
      </PhoneScreen>
    </GameProvider>
  );
}

export default App;
