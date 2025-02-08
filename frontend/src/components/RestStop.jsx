import React from 'react';

const RestStop = () => {
  return (
    <div>
      <h2>Rest Stop</h2>

      {/* Tank stats */}
      <div id="tank-stats">TANK HP: XX | FUEL: XX</div>

      {/* Player upgrades */}
      <div id="player-upgrades">
        +100 HP | +3 ATK/SEC | +10 BB (Bean Bucks)
      </div>

      {/* Player stats */}
      <div id="player-stats">
        [PLAYER NAME] - ATK: XX - KILL COUNT: XX
        {/* Repeat for all players */}
      </div>
    </div>
  );
};

export default RestStop;
