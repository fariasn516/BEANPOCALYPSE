import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for modern and responsive design
const FullWidthCard = styled(Card)({
  width: '320px',
  margin: '10px auto', // Centers the card
  borderRadius: '16px', 
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)', // Soft shadow for depth
});

const ScrollContainer = styled(Box)({
  maxHeight: '300px', // Adjust height as needed
  overflowY: 'auto',
  padding: '10px',
});

export default function AwaitingBattle() {
  const playerData = [
    { role: 'DRIVER', atkDmg: 1, killCount: 20 },
    { role: 'SCREENAGER', atkDmg: 10, killCount: 20 },
    { role: 'SLEEPER', atkDmg: 15, killCount: 5 },
  ];

  return (
    <Box sx={{ p: 2, backgroundColor: '#f9f9f9', minHeight: '100vh'}}>
      {/* Destination Section */}
      <FullWidthCard>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
            Destination Address
          </Typography>
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Time:
              </Typography>
              <Typography>5:00</Typography>
            </Box>
            <Box>
              <Typography variant="body2" color="textSecondary">
                Distance:
              </Typography>
              <Typography>1000</Typography>
            </Box>
          </Box>
        </CardContent>
      </FullWidthCard>

      {/* Beanmobile Section */}
      <FullWidthCard sx={{ backgroundColor: '#ffe4c4' }}>
        <CardContent>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#d2691e',
            }}
          >
            BEANMOBILE
          </Typography>
        </CardContent>
      </FullWidthCard>

      {/* Scrollable Player Stats */}
      <FullWidthCard>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
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
                  backgroundColor: '#f0f8ff',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                <CardContent>
                  <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                    [PLAYER NAME]
                  </Typography>
                  <Typography variant="body2">{player.role}</Typography>
                  <Typography variant="body2">ATK DMG: {player.atkDmg}</Typography>
                  <Typography variant="body2">KILL COUNT: {player.killCount}</Typography>
                </CardContent>
              </Card>
            ))}
          </ScrollContainer>
        </CardContent>
      </FullWidthCard>
    </Box>
  );
}
