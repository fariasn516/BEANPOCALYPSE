import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
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

export default function AwaitingBattle() {
  const playerData = [
    { role: 'DRIVER', atkDmg: 1, killCount: 20 },
    { role: 'SCREENAGER', atkDmg: 10, killCount: 20 },
    { role: 'SLEEPER', atkDmg: 15, killCount: 5 },
  ];

  return (
    <GradientBackground>
      <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        {/* AWAITING BATTLE MESSAGE */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#9C27B0', mb: 2 }}>
          AWAITING BATTLE...
        </Typography>

        {/* Destination Section */}
        <FullWidthCard>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
              Destination Address
            </Typography>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Box>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  Time:
                </Typography>
                <Typography color="white">5:00</Typography>
              </Box>
              <Box>
                <Typography variant="body2" color="rgba(255,255,255,0.7)">
                  Distance:
                </Typography>
                <Typography color="white">1000</Typography>
              </Box>
            </Box>
          </CardContent>
        </FullWidthCard>

        {/* Beanmobile Section */}
        <FullWidthCard sx={{
          background: 'linear-gradient(45deg, #4A148C 30%, #7B1FA2 90%)',
        }}>
          <CardContent>
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                textAlign: 'center',
                color: 'white',
              }}
            >
              BEANMOBILE
            </Typography>
          </CardContent>
        </FullWidthCard>

        {/* Scrollable Player Stats */}
        <FullWidthCard>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
              Player Stats
            </Typography>

            <ScrollContainer>
              {playerData.map((player, index) => (
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
                      [PLAYER NAME]
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">{player.role}</Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">ATK DMG: {player.atkDmg}</Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">KILL COUNT: {player.killCount}</Typography>
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
