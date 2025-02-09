import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
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

const ScrollContainer = styled(Box)({
  maxHeight: '300px',
  overflowY: 'auto',
  padding: '10px',
  scrollbarColor: '#444 #888',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(255,255,255,0.1)',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(255,255,255,0.2)',
    borderRadius: '4px',
    '&:hover': {
      background: 'rgba(255,255,255,0.3)',
    },
  },
});

const GradientBackground = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #000000 0%, #4A148C 100%)',
  padding: '24px',
});

const StyledButton = styled(Button)({
  padding: '12px',
  fontSize: '1rem',
  fontWeight: 'bold',
  borderRadius: '12px',
  color: 'white',
  '&:hover': {
    transform: 'scale(1.02)',
  },
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
    <GradientBackground>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Rest Stop Header */}
        <FullWidthCard>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
              Rest Stop
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
              {gameState.milesRemaining} miles from destination
            </Typography>
          </CardContent>
        </FullWidthCard>

        {/* Bean Bucks Display */}
        <FullWidthCard>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#9C27B0' }}>
              Bean Bucks: {gameState.tankPoints}
            </Typography>
          </CardContent>
        </FullWidthCard>

        {/* Beanmobile Section */}
        <FullWidthCard sx={{ backgroundColor: 'rgba(74, 20, 140, 0.2)' }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#9C27B0' }}>
              BEANMOBILE
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
              {gameState.tankHealth} / {gameState.maxTankHealth} HP
            </Typography>

            {/* Upgrade Tank Health Buttons */}
            <Box display="flex" justifyContent="center" gap={2} mt={2}>
              <StyledButton sx={{ background: 'linear-gradient(45deg, #9C27B0 30%, #673AB7 90%)' }}>
                +100 HP (-120 BB)
              </StyledButton>
              <StyledButton sx={{ background: 'linear-gradient(45deg, #673AB7 30%, #4A148C 90%)' }}>
                +200 HP (-200 BB)
              </StyledButton>
            </Box>
          </CardContent>
        </FullWidthCard>

        {/* Player Stats Section */}
        <FullWidthCard>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
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
                    backgroundColor: 'rgba(25, 25, 25, 0.8)',
                    boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  }}
                >
                  <CardContent>
                    <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                      {player.name} {player.role === "driver" ? "(Driver)" : ""}
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">ATK DMG: {player.attackPower}</Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">KILL COUNT: {player.killCount}</Typography>

                    {/* Upgrade Attack Power Button */}
                    <Box mt={2}>
                      <StyledButton sx={{ background: 'linear-gradient(45deg, #FF9800 30%, #F57C00 90%)', width: '100%' }}>
                        Upgrade ATK (-100 BB)
                      </StyledButton>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </ScrollContainer>
          </CardContent>
        </FullWidthCard>
      </Box>
    </GradientBackground>
  );
}
