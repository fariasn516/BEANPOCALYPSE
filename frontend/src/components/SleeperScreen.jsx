import React from 'react';

const SleeperScreen = () => {
  return (
    <div>
      <h2>Battle Interface</h2>
      <div id="enemy-display">Zombie Bean!</div>
      <div id="attack-buttons">
        <button>Attack 1</button>
        <button>Attack 2</button>
      </div>
      <div id="battle-points">0 battle points</div>
    </div>
  );
};

export default SleeperScreen;
