import React from 'react';

export default function DuringBattle() {
  return (
    <div className="flex flex-col h-full bg-black text-white">
      {/* Enemy Info */}
      <div className="flex-grow relative">
        <div className="absolute top-4 left-4">
          <h2 className="text-xl font-bold">ZOMBEAN</h2>
          <div className="w-32 h-2 bg-red-200 rounded mt-1">
            <div className="w-[75%] h-full bg-red-500 rounded" />
          </div>
        </div>

        {/* Enemy Visual */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]">
          {/* Replace with actual graphics */}
          <div className="w-[150px] h-[150px] rounded-full bg-gray-700" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 space-y-3">
        {['FIGHT', 'BLOCK', 'SPECIAL'].map(action => (
          <button key={action} className={`w-full p-3 rounded font-bold shadow-md ${
            action === 'FIGHT' ? 'bg-green-500 hover:bg-green-600' :
            action === 'BLOCK' ? 'bg-blue-500 hover:bg-blue-600' :
            'bg-red-500 hover:bg-red-600'
          }`}>
            {action}
          </button>
        ))}
      </div>
    </div>
  );
}
