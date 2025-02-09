import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import logo from '../final assets/beanmobile.gif'
import driver from '../final assets/driver.gif'
import screenager from '../final assets/screenager.gif'
import sleeper from '../final assets/sleeper.gif'
import singer from '../final assets/singer.gif'
import snacker from '../final assets/snacker.gif'

const ScrollContainer = styled(Box)({
  maxHeight: '100vh',
  overflowY: 'auto',
  scrollbarColor: '#444 #888',
  paddingBottom: '100px',
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

const FullWidthCard = styled(Card)({
  width: '100%',
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

const GameCodeCard = styled(FullWidthCard)({
  backgroundColor: 'rgba(74, 20, 140, 0.7)',
  color: 'white',
  textAlign: 'center',
  padding: '16px',
});

const DestinationCard = styled(FullWidthCard)({
  border: '2px solid rgba(156, 39, 176, 0.3)',
  backgroundColor: 'rgba(25, 25, 25, 0.9)',
});

const StyledButton = styled(Button)({
  width: '100%',
  padding: '16px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '12px',
  background: 'linear-gradient(45deg, #9C27B0 30%, #673AB7 90%)',
  marginTop: '16px',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #673AB7 30%, #9C27B0 90%)',
    transform: 'scale(1.02)',
  },
});

const PlayerCard = styled(FullWidthCard)(({ isDriver }) => ({
  backgroundColor: isDriver ? 'rgba(156, 39, 176, 0.2)' : 'rgba(25, 25, 25, 0.8)',
  maxWidth: isDriver ? '180px' : '110px',
  margin: '8px',
  padding: '8px',
  '&:hover': {
    backgroundColor: isDriver ? 'rgba(156, 39, 176, 0.3)' : 'rgba(45, 45, 45, 0.9)',
  },
}));

export default function CharacterSelection() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState({
    gameCode: "HBP2025",
    destination: "",

    driver: { name: "Nancy" },
    backseaters: [
      { name: "Player 1", role: "snacker" },
      { name: "Player 2", role: "singer" },
      { name: "Player 3", role: "screenager" },
      { name: "Player 4", role: "sleeper" },
    ],
  });

  const handleDestinationChange = (event) => {
    setGameState((prevState) => ({
      ...prevState,
      destination: event.target.value,
    }));
  };

  const handleNavigation = (role) => {
    switch(role) {
      case 'driver':
        navigate('/driver');
        break;
      case 'sleeper':
        navigate('/sleeper');
        break;
      default:
        break;
    }
  };

  const handleStartGame = () => {
    navigate('/awaiting-battle');
  };

  return (
    <ScrollContainer>
      <GradientBackground>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Game Code */}
          <GameCodeCard>
            <Typography variant="overline" sx={{ display: 'block', mb: 1, color: 'rgba(255,255,255,0.7)' }}>
              Join Code
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'white' }}>
              {gameState.gameCode}
            </Typography>
          </GameCodeCard>

          {/* Destination Input */}
          <DestinationCard>
            <CardContent>
              <TextField
                label="Destination Address"
                variant="outlined"
                fullWidth
                value={gameState.destination}
                onChange={handleDestinationChange}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: '12px',
                    color: 'white',
                    '& fieldset': {
                      borderColor: 'rgba(156, 39, 176, 0.5)',
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(156, 39, 176, 0.7)',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#9C27B0',
                    },
                  },
                  '& .MuiInputLabel-root': {
                    color: 'rgba(255,255,255,0.7)',
                  },
                }}
              />
              <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mt: 1 }}>
                {gameState.distanceRemaining}
              </Typography>
            </CardContent>
          </DestinationCard>

        {/* Fuel Tank GIF */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 1}}>
      <img src={logo} alt="loading..." style={{
      width: '150px', 
      height: 'auto', 
      maxWidth: '100%', 
    }}/>
      </Box>

          {/* Start Button */}
          <StyledButton onClick={handleStartGame}>
            START THE JOURNEY
          </StyledButton>

          {/* Driver (Clickable GIF with Name) */}
<Box 
  sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, cursor: 'pointer' }}
  onClick={() => navigate('/driver-screen')} // Navigate on click
>
  <img 
    src={driver} 
    alt="Driver" 
    style={{ width: '100px', height: 'auto', maxWidth: '100%' }} 
  />
  <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'white', mt: 1, fontSize: '0.9rem' }}>
    Driver
  </Typography>
</Box>
          {/* Backseat Players (GIFs in a Row) */}
{/* Backseat Players (Centered & Aligned Properly) */}
<Box sx={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 2,  // Adjust spacing
  mt: 2,
  width: '100%',  // Ensure it stretches across the container
  maxWidth: '400px',  // Prevent too wide overflow
  margin: '0 auto',  // Centering the whole row
  flexWrap: 'wrap', // Allows wrapping for small screens
}}>
  {[ 
    { name: "Screenager", gif: screenager }, 
    { name: "Sleeper", gif: sleeper }, 
    { name: "Snacker", gif: snacker },
    { name: "Singer", gif: singer }
  ].map((player, index) => (
    <Box key={index} sx={{
      textAlign: 'center',
      flex: '1 1 25%', // Ensures even spacing
      maxWidth: '100px', // Limits width of each player box
      minWidth: '80px'  // Prevents being too small
    }}>
      <img 
        src={player.gif} 
        alt={player.name} 
        style={{ width: '80px', height: 'auto', borderRadius: '12px' }} 
      />
      <Typography variant="body1" sx={{ fontWeight: 'bold', color: 'white', mt: 1, fontSize: '0.9rem' }}>
        {player.name}
      </Typography>
    </Box>
  ))}
</Box>

        </Box>
      </GradientBackground>
    </ScrollContainer>
  );
}