import React from 'react';
import { Moon, AlertTriangle } from 'lucide-react';

const SleeperScreen = () => {
  const healingPower = 20;
  const nextHealIn = 30;

  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-indigo-400 to-purple-600 text-white">
      <div className="bg-gray-800/80 p-4 rounded-lg mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            <p className="font-medium">Battle Ready</p>
          </div>
          <span className="text-sm text-gray-300">Auto-wake on danger</span>
        </div>
      </div>

      <div className="flex-grow flex flex-col items-center justify-center">
        <Moon className="w-24 h-24 text-blue-200 animate-pulse mb-4" />
        <div className="text-center space-y-2">
          <p className="text-4xl font-bold">ZZZ...</p>
          <p className="text-xl text-blue-200">Deep Sleep Mode</p>
        </div>
        
        <div className="mt-8 bg-gray-800/80 p-4 rounded-lg w-full max-w-sm">
          <div className="flex justify-between items-center mb-2">
            <span>Healing Power</span>
            <span className="text-green-400">+{healingPower} HP/min</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Next Heal</span>
            <span className="text-blue-200">{nextHealIn}s</span>
          </div>
        </div>
      </div>

      <div className="mt-auto text-center bg-gray-800/80 p-4 rounded-lg">
        <p className="text-sm text-gray-300">
          Tap anywhere to wake up manually
        </p>
      </div>
    </div>
  );
};

export default SleeperScreen;