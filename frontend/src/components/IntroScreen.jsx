import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IntroScreen() {
  const navigate = useNavigate();


  return (
      <div className="space-y-2 mt-4">
        <button
          onClick={() => navigate('/character-selection')}
          className="w-full bg-gray-300 p-3 rounded-full text-center text-sm hover:bg-gray-400"
        >
          HOST GAME
        </button>
        <button
          onClick={() => navigate('/character-selection')}
          className="w-full bg-gray-300 p-3 rounded-full text-center text-sm hover:bg-gray-400"
        >
          JOIN GAME
        </button>
      </div>
  );
}
