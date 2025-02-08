import React, { createContext, useState, useContext } from 'react';

export const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    // Game session info
    gameCode: null,
    isHost: false,
    gameStarted: false,
    currentScreen: 'intro', // intro, selection, awaiting, battle, rest

    // Player info
    players: [], // Array of all players in game
    currentRole: null, // driver, snacker, singer, screenager, sleeper
    playerStats: {
      health: 100,
      maxHealth: 100,
      attackDamage: 1,
      killCount: 0,
    },

    // Driver metrics
    driverPoints: 0,
    speedMultiplier: 1,
    currentSpeed: 0,
    speedLimit: 65,
    
    // Vehicle (Beanmobile) stats
    beanmobile: {
      health: 1000,
      maxHealth: 1000,
      fuel: 100,
      distanceTraveled: 0,
    },
    
    // Battle system
    inBattle: false,
    currentBattle: {
      enemyType: null,
      enemyHealth: 100,
      enemyMaxHealth: 100,
      enemyName: '',
      turnCount: 0,
    },
    
    // Location & Progress
    destination: {
      address: '',
      totalDistance: 0,
      remainingDistance: 0,
      estimatedTime: 0,
    },
    
    // Rest Stop
    restStop: {
      isActive: false,
      healingAmount: 0,
      timeRemaining: 0,
    }
  });

  // Game initialization
  const initializeGame = (isHost = false) => {
    const gameCode = isHost ? generateGameCode() : null;
    setGameState(prev => ({
      ...prev,
      gameCode,
      isHost,
      gameStarted: false,
      currentScreen: 'selection'
    }));
  };

  // Role selection
  const selectRole = (role) => {
    setGameState(prev => ({
      ...prev,
      currentRole: role,
      playerStats: getInitialStatsForRole(role)
    }));
  };

  // Battle actions
  const startBattle = (enemyType) => {
    setGameState(prev => ({
      ...prev,
      inBattle: true,
      currentScreen: 'battle',
      currentBattle: getEnemyStats(enemyType)
    }));
  };

  const performBattleAction = (action) => {
    setGameState(prev => {
      const newState = { ...prev };
      // Handle different battle actions (fight, block, special)
      switch(action) {
        case 'fight':
          newState.currentBattle.enemyHealth -= newState.playerStats.attackDamage;
          break;
        case 'block':
          // Implement blocking logic
          break;
        case 'special':
          // Implement special move logic
          break;
      }
      return newState;
    });
  };

  // Rest stop functions
  const enterRestStop = () => {
    setGameState(prev => ({
      ...prev,
      currentScreen: 'rest',
      restStop: {
        isActive: true,
        healingAmount: 100,
        timeRemaining: 30
      }
    }));
  };

  // Helper functions
  const generateGameCode = () => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const getInitialStatsForRole = (role) => {
    const baseStats = {
      health: 100,
      maxHealth: 100,
      attackDamage: 1,
      killCount: 0
    };

    switch(role) {
      case 'driver':
        return { ...baseStats, health: 150, maxHealth: 150 };
      case 'screenager':
        return { ...baseStats, attackDamage: 2 };
      case 'sleeper':
        return { ...baseStats, health: 200, maxHealth: 200 };
      default:
        return baseStats;
    }
  };

  const getEnemyStats = (enemyType) => {
    return {
      enemyType,
      enemyHealth: 100,
      enemyMaxHealth: 100,
      enemyName: `Zombean ${enemyType}`,
      turnCount: 0
    };
  };

  // Expose methods and state
  const value = {
    gameState,
    setGameState,
    initializeGame,
    selectRole,
    startBattle,
    performBattleAction,
    enterRestStop
  };

  return (
    <GameContext.Provider value={value}>
      {children}
    </GameContext.Provider>
  );
};

// Custom hook for easier context usage
export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};