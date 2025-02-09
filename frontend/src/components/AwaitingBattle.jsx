import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/system';
import beanmobileImage from '../final assets/beanmobile.gif'; 
import beanbuckImage from '../final assets/beanbuck.png'; 
import heartIconImage from '../final assets/hearticon.png'; 
import { useNavigate } from 'react-router-dom'; 

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

export default function AwaitingBattle() {
  const navigate = useNavigate(); // Hook to navigate pages

  const handleCardClick = () => {
    navigate('/during-battle'); // Redirects to During Battle page
  };

  const playerData = [
    { name: 'Alex', role: 'DRIVER', atkDmg: 1, killCount: 20 },
    { name: 'Jamie', role: 'SCREENAGER', atkDmg: 10, killCount: 20 },
    { name: 'Taylor', role: 'SLEEPER', atkDmg: 15, killCount: 5 },
    { name: 'Jordan', role: 'SNACKER', atkDmg: 8, killCount: 10 }, 
    { name: 'Riley', role: 'NAVIGATOR', atkDmg: 5, killCount: 12 }  
  ];

  return (
    <GradientBackground>
      <Box sx={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        {/* AWAITING BATTLE MESSAGE */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#9C27B0', mb: 2 }}>
          AWAITING BATTLE...
        </Typography>

        {/* Destination Section */}
        <FullWidthCard onClick={handleCardClick}> 
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

        {/* Beanmobile + Icons Section */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
          {/* Icons and Labels on the Left */}
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', mr: 2 }}>
            {/* BeanBuck Icon with Text */}
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <img 
                src={beanbuckImage} 
                alt="BeanBuck" 
                style={{ width: '50px', height: '50px', marginRight: '8px' }} 
              />
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                1000
              </Typography>
            </Box>

            {/* Heart Icon with Text */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src={heartIconImage} 
                alt="Heart Icon" 
                style={{ width: '50px', height: '50px', marginRight: '8px' }} 
              />
              <Typography variant="body2" sx={{ color: 'white', fontWeight: 'bold' }}>
                570 / 600
              </Typography>
            </Box>
          </Box>

          {/* Beanmobile on the Right */}
          <Box>
            <img 
              src={beanmobileImage} 
              alt="Beanmobile" 
              style={{ width: '120px', height: '120px', display: 'block' }} 
            />
          </Box>
        </Box>

        {/* Scrollable Player Stats */}
        <FullWidthCard sx={{ mt: 2 }}>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: 'white' }}>
              Player Stats
            </Typography>

            <Box sx={{ maxHeight: '400px', overflowY: 'auto', padding: '10px' }}>
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
                      {player.name} {/* Hardcoded Player Names */}
                    </Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">{player.role}</Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">ATK DMG: {player.atkDmg}</Typography>
                    <Typography variant="body2" color="rgba(255,255,255,0.7)">KILL COUNT: {player.killCount}</Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </CardContent>
        </FullWidthCard>
      </Box>
    </GradientBackground>
  );
}