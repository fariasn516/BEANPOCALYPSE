import React from 'react';

const PhoneScreen = ({ children }) => (
  <div style={{
    width: '360px',
    height: '640px',
    overflow: 'hidden',
    position: 'relative',
    border: '2px solid #333',
    borderRadius: '20px',
    margin: '20px auto'
  }}>
    {children}
  </div>
);

export default PhoneScreen;
