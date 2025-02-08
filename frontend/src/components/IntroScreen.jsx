import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function IntroScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen p-4 sm:p-6">
      <div className="text-center flex-grow flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-2">BEANPOCALYPSE</h1>
        <p className="mb-2 text-sm">Get ready for the wildest road trip of your life!</p>
        <p className="mb-4 text-xs sm:text-sm">
          The world has fallen to apocalyptic chaos. You're cruising in your trusty tank, the
          Beanmobile, but beware—your phones will randomly buzz with alerts: Zombeans ahead! These
          creepy zombie beans will try to delay your journey at random. But the final boss awaits
          at the end of the road: Baked Beans! Protect your tank, survive the ambushes, and make
          it to the end if you want to take down the ultimate Zombean!
        </p>
        <div className="mb-2 bg-gray-200 p-2 rounded">
          <p className="text-xs">Tank [1000 HP]</p>
        </div>
        <div className="mb-6 bg-gray-200 p-2 rounded">
          <p className="text-xs">some cute visual of all the beans</p>
        </div>
      </div>
      <div className="space-y-2">
        <button
          onClick={() => navigate('/character-selection')}
          className="w-full bg-gray-200 p-3 rounded-full text-center text-sm"
        >
          HOST GAME
        </button>
        <button
          onClick={() => navigate('/character-selection')}
          className="w-full bg-gray-200 p-3 rounded-full text-center text-sm"
        >
          JOIN GAME
        </button>
      </div>
    </div>
  );
}
