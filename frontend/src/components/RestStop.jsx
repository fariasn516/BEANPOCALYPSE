import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

const FullWidthCard = styled(Card)({
  width: '100%',
  margin: '10px auto',
  borderRadius: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
});

const ScrollContainer = styled(Box)({
  maxHeight: '300px', 
  overflowY: 'auto',
  padding: '10px',
});

export default function RestStop() {
  const gameState = {
    milesRemaining: 20, 
    tankPoints: 500, 
    tankHealth: 300, 
    maxTankHealth: 600,
    driver: { name: "Nancy", role: "driver", attackPower: 1, killCount: 10 },
    backseaters: [
      { name: "Player 1", role: "screenager", attackPower: 10, killCount: 5 },
      { name: "Player 2", role: "sleeper", attackPower: 15, killCount: 3 }
    ]
  };

  const driver = gameState.driver ? [gameState.driver] : [];
  const backseaters = gameState.backseaters ? gameState.backseaters : [];

  return (
    <Box sx={{ p: 2, backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      {/* Rest Stop Header */}
      <FullWidthCard>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Rest Stop
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
            {gameState.milesRemaining} miles from destination
          </Typography>
        </CardContent>
      </FullWidthCard>

      {/* Bean Bucks Display */}
      <FullWidthCard>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Bean Bucks: {gameState.tankPoints}
          </Typography>
        </CardContent>
      </FullWidthCard>

      {/* Beanmobile Section */}
      <FullWidthCard sx={{ backgroundColor: '#ffe4c4' }}>
        <CardContent>
          <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#d2691e' }}>
            BEANMOBILE
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ textAlign: 'center' }}>
            {gameState.tankHealth} / {gameState.maxTankHealth} HP
          </Typography>

          {/* Upgrade Tank Health Buttons */}
          <Box display="flex" justifyContent="center" gap={2} mt={2}>
            <Button variant="contained" color="primary">
              +100 HP (-120 BB)
            </Button>
            <Button variant="contained" color="secondary">
              +200 HP (-200 BB)
            </Button>
          </Box>
        </CardContent>
      </FullWidthCard>

      {/* Player Stats Section */}
      <FullWidthCard>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Player Stats
          </Typography>

          <ScrollContainer>
            {[...driver, ...backseaters].map((player, index) => (
              <Card
                key={index}
                sx={{
                  mb: 2,
                  p: 2,
                  borderRadius: '12px',
                  backgroundColor: '#f0f8ff',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    {player.name} {player.role === "driver" ? "(Driver)" : ""}
                  </Typography>
                  <Typography variant="body2">ATK DMG: {player.attackPower}</Typography>
                  <Typography variant="body2">KILL COUNT: {player.killCount}</Typography>

                  {/* Upgrade Attack Power Button */}
                  <Box mt={2}>
                    <Button variant="contained" color="warning" fullWidth>
                      Upgrade ATK (-100 BB)
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            ))}
          </ScrollContainer>
        </CardContent>
      </FullWidthCard>
    </Box>
  );
}