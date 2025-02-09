import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

const FullWidthCard = styled(Card)({
  width: '100%',
  maxWidth: '600px',
  margin: '8px auto',
  borderRadius: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.4)',
  },
});

const GradientBackground = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #000000 0%, #4A148C 100%)',
  padding: '24px',
});

const WarningCard = styled(FullWidthCard)({
  backgroundColor: 'rgba(211, 47, 47, 0.2)',
});

const SpeedCard = styled(FullWidthCard)({
  backgroundColor: 'rgba(74, 20, 140, 0.2)',
});

export default function DriverLockScreen() {
  return (
    <GradientBackground>
      <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        {/* Warning Message */}
        <WarningCard>
          <CardContent sx={{ p: 4 }}>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: '#ff1744' }}>
              DO NOT USE WHILE DRIVING
            </Typography>
            <Typography variant="body1" sx={{ mt: 2, fontWeight: 'bold', color: 'white' }}>
              The game is locked for safety. Focus on the road!
            </Typography>
          </CardContent>
        </WarningCard>

        {/* Speed Display */}
        <SpeedCard sx={{ mt: 2 }}>
          <CardContent sx={{ p: 2 }}>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#9C27B0' }}>
              CURRENT SPEED
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'white', mt: 1 }}>
              65 MPH
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1 }}>
              Drive safely and stay at the speed limit.
            </Typography>
          </CardContent>
        </SpeedCard>
      </Box>
    </GradientBackground>
  );
}
