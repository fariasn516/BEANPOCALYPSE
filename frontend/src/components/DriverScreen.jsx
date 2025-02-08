import React from 'react';

const DriverScreen = () => {
  return (
    <div>
      <h2>Driver Dashboard</h2>
      <div id="speed-display">-- mph</div>
      <div id="points-counter">0 points</div>
      <div id="multiplier-display">1x</div>
      <button id="rest-stop-button">Request Rest Stop</button>
    </div>
  );
};

export default DriverScreen;
