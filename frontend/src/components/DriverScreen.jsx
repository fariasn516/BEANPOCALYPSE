import React from 'react';

export default function DriverScreen() {
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
            <p className="text-sm">Speed:</p>
            <p>60</p>
          </div>
        </div>
      </div>

      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold mb-2">Keep Driving!</p>
          <p className="text-sm text-gray-600">Your team is counting on you</p>
        </div>
      </div>
    </div>
  );
}
