import React from 'react';

const CharacterCard = ({ role, description, onSelect }) => {
  const getClassDescription = (role) => {
    switch (role.toLowerCase()) {
      case 'driver':
        return 'Master of the Beanmobile. Keeps the team moving and earns bonuses for smooth driving.';
      case 'snacker':
        return 'Team sustenance expert. Manages resources and provides power-ups through strategic snack distribution.';
      case 'singer':
        return 'Morale booster. Provides team buffs through perfectly timed road trip karaoke.';
      case 'screenager':
        return 'Tech specialist. Manages navigation and tracks incoming Zombean threats.';
      case 'sleeper':
        return 'Rest master. Regenerates team energy and provides passive healing while napping.';
      default:
        return 'Role description not available';
    }
  };

  const getClassStats = (role) => {
    switch (role.toLowerCase()) {
      case 'driver':
        return { attack: 2, defense: 3, special: 'Road Rage' };
      case 'snacker':
        return { attack: 1, defense: 2, special: 'Sugar Rush' };
      case 'singer':
        return { attack: 2, defense: 1, special: 'Battle Chorus' };
      case 'screenager':
        return { attack: 3, defense: 1, special: 'Screen Time' };
      case 'sleeper':
        return { attack: 1, defense: 4, special: 'Power Nap' };
      default:
        return { attack: 0, defense: 0, special: 'None' };
    }
  };

  const stats = getClassStats(role);

  return (
    <div 
      className="bg-gray-800 rounded-lg p-6 text-white hover:bg-gray-700 transition-colors cursor-pointer"
      onClick={() => onSelect(role)}
    >
      <h3 className="text-xl font-bold mb-2 capitalize">{role}</h3>
      <p className="text-sm text-gray-300 mb-4">{getClassDescription(role)}</p>
      
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-sm">Attack</span>
          <div className="flex space-x-1">
            {[...Array(stats.attack)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-red-500 rounded-full" />
            ))}
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm">Defense</span>
          <div className="flex space-x-1">
            {[...Array(stats.defense)].map((_, i) => (
              <div key={i} className="w-2 h-2 bg-blue-500 rounded-full" />
            ))}
          </div>
        </div>
        <div className="mt-4 text-sm">
          <span className="text-gray-400">Special:</span> {stats.special}
        </div>
      </div>
    </div>
  );
};

export default CharacterCard;