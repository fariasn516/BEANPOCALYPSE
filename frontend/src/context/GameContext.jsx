import React, { createContext, useState } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    // driver metrics
    driverPoints: 0,          // Accumulated points
    speedMultiplier: 1,       // Current multiplier (1x-3x)
    currentSpeed: 0,          // In MPH/KPH
    speedLimit: 65,           // Default highway speed
    
    // Battle system
    inBattle: false,          // Battle status flag
    zombieHealth: 100,        // Current enemy health
    playerHealth: 100,        // Tank's health
    
    // Location tracking
    distanceTraveled: 0,      // Miles/KM driven
    destinationReached: false,
  });

  return (
    <GameContext.Provider value={{ gameState, setGameState }}>
      {children}
    </GameContext.Provider>
  );
};
