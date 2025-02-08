import React from 'react';

const CharacterSelection = () => {
  return (
    <div>
      <h2>Character Selection</h2>
      <p>Destination Address:</p>
      <input type="text" placeholder="Enter address" />
      {/* Placeholder for roles */}
      <div>
        <button>Driver</button>
        <button>Snacker</button>
        <button>Singer</button>
        <button>Screenager</button>
        <button>Sleeper</button>
      </div>
      <button>START</button>
    </div>
  );
};

export default CharacterSelection;
