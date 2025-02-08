import React from 'react';
import { AlertCircle, Battery, Heart, User } from 'lucide-react';

const RestStop = () => {
  const players = [
    { role: 'DRIVER', currentHP: 600, maxHP: 1000, boost: 200 },
    { role: 'SCREENAGER', currentHP: 450, maxHP: 800, boost: 150 },
    { role: 'SLEEPER', currentHP: 700, maxHP: 1000, boost: 200 }
  ];

  const beanmobile = {
    currentHP: 800,
    maxHP: 1000,
    boost: 100
  };

  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-teal-300 to-blue-400 text-white">
      <div className="flex items-center gap-2 mb-4">
        <AlertCircle className="w-6 h-6" />
        <h2 className="text-2xl font-bold">REST STOP</h2>
      </div>

      <div className="bg-gray-800/80 rounded-lg p-4 mb-6">
        <p className="text-sm text-gray-300">Distance remaining: 150 miles</p>
        <div className="h-2 bg-gray-700 rounded-full mt-2">
          <div className="h-full w-3/4 bg-green-400 rounded-full" />
        </div>
      </div>

      {/* Beanmobile Status */}
      <div className="bg-gray-800/80 rounded-lg p-4 mb-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Battery className="w-5 h-5" />
            <h3 className="font-bold">BEANMOBILE</h3>
          </div>
          <span className="text-green-400">+{beanmobile.boost} HP</span>
        </div>
        <div className="h-4 bg-gray-700 rounded-full">
          <div 
            className="h-full bg-blue-400 rounded-full transition-all duration-500"
            style={{ width: `${(beanmobile.currentHP / beanmobile.maxHP) * 100}%` }}
          />
        </div>
        <p className="text-right text-sm mt-1 text-gray-300">
          {beanmobile.currentHP}/{beanmobile.maxHP}
        </p>
      </div>

      {/* Player Status Cards */}
      <div className="space-y-4">
        {players.map((player) => (
          <div key={player.role} className="bg-gray-800/80 rounded-lg p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span className="font-bold">{player.role}</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-4 h-4 text-green-400" />
                <span className="text-green-400">+{player.boost} HP</span>
              </div>
            </div>
            <div className="h-3 bg-gray-700 rounded-full">
              <div 
                className="h-full bg-green-400 rounded-full transition-all duration-500"
                style={{ width: `${(player.currentHP / player.maxHP) * 100}%` }}
              />
            </div>
            <p className="text-right text-sm mt-1 text-gray-300">
              {player.currentHP}/{player.maxHP}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestStop;