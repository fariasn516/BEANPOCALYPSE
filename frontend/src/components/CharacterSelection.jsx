import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CharacterCard from './CharacterCard';

export default function CharacterSelection() {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
  };

  const roles = ['driver', 'snacker', 'singer', 'screenager', 'sleeper'];

  return (
    <div className="flex flex-col h-full p-6 bg-gradient-to-b from-yellow-300 to-orange-400 text-white">
      <div className="bg-gray-800 p-4 rounded mb-6 shadow-lg">
        <p className="text-sm mb-2">JOIN CODE: HFP2025</p>
        <div className="bg-gray-700 p-4 rounded">
          <p className="font-medium">Destination address</p>
          <p className="text-sm">(DISTANCE AWAY)</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 mb-6 overflow-y-auto">
        {roles.map(role => (
          <CharacterCard
            key={role}
            role={role}
            onSelect={handleRoleSelect}
          />
        ))}
      </div>

      <button
        onClick={() => navigate('/awaiting-battle')}
        disabled={!selectedRole}
        className={`p-4 rounded text-center mt-auto text-white font-bold shadow-md ${
          selectedRole 
            ? 'bg-red-500 hover:bg-red-600' 
            : 'bg-gray-500 cursor-not-allowed'
        }`}
      >
        START GAME
      </button>
    </div>
  );
}