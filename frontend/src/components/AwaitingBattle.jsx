import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AwaitingBattle() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-full p-6">
      <div className="bg-gray-100 p-4 rounded mb-6">
        <p className="font-medium">Destination address</p>
        <div className="flex justify-between mt-2">
          <div>
            <p className="text-sm">Time:</p>
            <p>5:00</p>
          </div>
          <div>
            <p className="text-sm">Distance:</p>
            <p>1000</p>
          </div>
        </div>
      </div>

      <div className="flex-grow">
        <h2 className="text-xl mb-4">BEANMOBILE</h2>
        <div className="space-y-4">
          {['DRIVER', 'SCREENAGER', 'SLEEPER'].map(role => (
            <div key={role} className="bg-gray-100 p-4 rounded">
              <p>[PLAYER NAME]</p>
              <p>{role}</p>
              <p>ATK DMG: 1</p>
              <p>KILL COUNT: 20</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
