import React, { useState } from 'react';
import { Card, CardContent, Typography, Box, Button, LinearProgress } from '@mui/material';
import { styled } from '@mui/system';

const FullWidthCard = styled(Card)({
  width: '320px',
  margin: '10px auto', 
  borderRadius: '16px', 
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', 
});

export default function DuringBattle() {
  const [battleState, setBattleState] = useState({
    enemy: { name: "ZOMBEAN", health: 80, maxHealth: 100 },
    player: { health: 80, maxHealth: 100 },
  });

  return (
    <Box sx={{ p: 2, backgroundColor: '#f9f9f9', minHeight: '100vh', textAlign: 'center' }}>
      
      {/* Enemy Display */}
      <FullWidthCard sx={{ backgroundColor: '#ddd', p: 2 }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold' }}>{battleState.enemy.name}</Typography>
          <Box sx={{ position: 'relative', width: '100%', mt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={(battleState.enemy.health / battleState.enemy.maxHealth) * 100}
              sx={{ height: 10, borderRadius: 5, backgroundColor: '#000' }}
            />
            <Typography 
              sx={{ position: 'absolute', top: 0, right: 10, fontSize: '12px', color: '#fff' }}
            >
              {battleState.enemy.health}/{battleState.enemy.maxHealth}
            </Typography>
          </Box>
        </CardContent>
      </FullWidthCard>

      {/* Placeholder for Camera View */}
      <Box sx={{ width: '100%', height: '250px', backgroundColor: '#eee', borderRadius: '16px', my: 2 }}>
        <Typography sx={{ paddingTop: '110px', color: '#777' }}>📷 Camera Overlay (Player View)</Typography>
      </Box>

      {/* Action Buttons */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
        <Button variant="contained" color="secondary" sx={{ backgroundColor: '#a020f0' }}>FIGHT</Button>
        <Button variant="contained" color="primary">BLOCK</Button>
      </Box>

      {/* Player Health Bar */}
      <FullWidthCard sx={{ backgroundColor: '#ddd', p: 1, mt: 1 }}>
        <CardContent>
          <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Player Health</Typography>
          <Box sx={{ position: 'relative', width: '100%', mt: 1 }}>
            <LinearProgress
              variant="determinate"
              value={(battleState.player.health / battleState.player.maxHealth) * 100}
              sx={{ height: 10, borderRadius: 5, backgroundColor: '#000' }}
            />
            <Typography 
              sx={{ position: 'absolute', top: 0, right: 10, fontSize: '12px', color: '#fff' }}
            >
              {battleState.player.health}/{battleState.player.maxHealth}
            </Typography>
          </Box>
        </CardContent>
      </FullWidthCard>

    </Box>
  );
}