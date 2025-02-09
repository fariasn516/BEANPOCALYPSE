import React, { createContext, useState, useContext, useEffect } from "react";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(null);

  const fetchGameState = async () => {
    try {
      const response = await fetch("http://localhost:8080/game/state");
      const data = await response.json();
      setGameState(data); 
    } catch (error) {
      console.error("Error fetching game state:", error);
    }
  };

  useEffect(() => {
    fetchGameState();
  }, []);

  const startGame = async (driver, backseaters) => {
    await fetch(`http://localhost:8080/game/startGame?driver=${driver}&backseaters=${backseaters.join(",")}`, { 
      method: "POST" 
    });
    fetchGameState(); 
  };

  const takeTurn = async (player, isAttack) => {
    await fetch(`http://localhost:8080/game/takeTurn?player=${player}&isAttack=${isAttack}`, { 
      method: "POST" 
    });
    fetchGameState();
  };

  const upgradeTankHealth = async () => {
    await fetch("http://localhost:8080/game/upgradeTankHealth", { method: "POST" });
    fetchGameState();
  };

  const upgradeAttackPower = async (playerName) => {
    await fetch(`http://localhost:8080/game/upgradeAttackPower?playerName=${playerName}`, { method: "POST" });
    fetchGameState();
  };

  return (
    <GameContext.Provider value={{ gameState, startGame, takeTurn, upgradeTankHealth, upgradeAttackPower }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGame must be used within a GameProvider");
  }
  return context;
};