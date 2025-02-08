import React from 'react';

const DuringBattle = () => {
  return (
    <div>
      <h2>During Battle</h2>
      {/* Enemy display */}
      <div id="enemy-display">ZOMBEAN - HP: XX</div>

      {/* Action buttons */}
      <div id="action-buttons">
        <button>FIGHT</button>
        <button>BLOCK</button>
      </div>

      {/* Player stats */}
      <div id="player-stats">Player HP: XX</div>
    </div>
  );
};

export default DuringBattle;
