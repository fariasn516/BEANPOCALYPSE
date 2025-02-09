import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

const FullWidthCard = styled(Card)({
  width: '320px',
  margin: '10px auto', 
  borderRadius: '16px', 
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
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

const StyledButton = styled(Button)({
  width: '100%',
  padding: '16px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '12px',
  marginTop: '16px',
  color: 'white',
  '&:hover': {
    transform: 'scale(1.02)',
  },
});

export default function DuringBattle() {
  const [battleState, setBattleState] = useState({
    enemy: { name: "ZOMBEAN", health: 80, maxHealth: 100 },
    player: { health: 80, maxHealth: 100 },
  });

  return (
    <GradientBackground>
      <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        {/* Enemy Display */}
        <FullWidthCard sx={{ backgroundColor: 'rgba(74, 20, 140, 0.2)', p: 2 }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 'bold', color: 'white' }}>{battleState.enemy.name}</Typography>
            <Box sx={{ position: 'relative', width: '100%', mt: 1 }}>
              <LinearProgress
                variant="determinate"
                value={(battleState.enemy.health / battleState.enemy.maxHealth) * 100}
                sx={{ height: 10, borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              />
              <Typography 
                sx={{ position: 'absolute', top: 0, right: 10, fontSize: '12px', color: 'white' }}
              >
                {battleState.enemy.health}/{battleState.enemy.maxHealth}
              </Typography>
            </Box>
          </CardContent>
        </FullWidthCard>

        {/* Placeholder for Camera View */}
        <Box sx={{ width: '100%', height: '250px', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '16px', my: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography sx={{ color: 'rgba(255, 255, 255, 0.7)' }}>📷 Camera Overlay (Player View)</Typography>
        </Box>

        {/* Action Buttons */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
          <StyledButton sx={{ background: 'linear-gradient(45deg, #9C27B0 30%, #673AB7 90%)' }}>FIGHT</StyledButton>
          <StyledButton sx={{ background: 'linear-gradient(45deg, #673AB7 30%, #4A148C 90%)' }}>BLOCK</StyledButton>
        </Box>

        {/* Player Health Bar */}
        <FullWidthCard sx={{ backgroundColor: 'rgba(74, 20, 140, 0.2)', p: 1, mt: 1 }}>
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'white' }}>Player Health</Typography>
            <Box sx={{ position: 'relative', width: '100%', mt: 1 }}>
              <LinearProgress
                variant="determinate"
                value={(battleState.player.health / battleState.player.maxHealth) * 100}
                sx={{ height: 10, borderRadius: 5, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              />
              <Typography 
                sx={{ position: 'absolute', top: 0, right: 10, fontSize: '12px', color: 'white' }}
              >
                {battleState.player.health}/{battleState.player.maxHealth}
              </Typography>
            </Box>
          </CardContent>
        </FullWidthCard>
      </Box>
    </GradientBackground>
  );
}
