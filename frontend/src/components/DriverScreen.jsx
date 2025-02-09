import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const FullWidthCard = styled(Card)({
  width: '335px',
  margin: '10px auto', 
  borderRadius: '16px', 
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
  textAlign: 'center',
  backgroundColor: '#ffcccb' 
});

export default function DriverLockScreen() {
  return (
    <Box sx={{ p: 1, backgroundColor: '#f9f9f9', minHeight: '100vh', textAlign: 'center' }}>
      
      {/* Warning Message */}
      <FullWidthCard sx={{ p: 4 }}>
        <CardContent>
          <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#d32f2f' }}>
            DO NOT USE WHILE DRIVING
          </Typography>
          <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold', color: '#000' }}>
            The game is locked for safety. Focus on the road!
          </Typography>
        </CardContent>
      </FullWidthCard>

      {/* Placeholder for Speed Display */}
      <FullWidthCard sx={{ p: 2, backgroundColor: '#ddd', mt: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#555' }}>
            CURRENT SPEED
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: '#000', mt: 1 }}>
            65 MPH
          </Typography>
          <Typography variant="body2" sx={{ color: '#777', mt: 1 }}>
            Drive safely and stay at the speed limit.
          </Typography>
        </CardContent>
      </FullWidthCard>

    </Box>
  );
}
