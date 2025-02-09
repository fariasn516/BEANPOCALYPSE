import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

const ScrollContainer = styled(Box)({
  maxHeight: '100vh',
  overflowY: 'auto',
  paddingBottom: '20px',
  '&::-webkit-scrollbar': {
    width: '8px',
  },
  '&::-webkit-scrollbar-track': {
    background: 'rgba(0,0,0,0.1)',
    borderRadius: '4px',
  },
  '&::-webkit-scrollbar-thumb': {
    background: 'rgba(0,0,0,0.2)',
    borderRadius: '4px',
    '&:hover': {
      background: 'rgba(0,0,0,0.3)',
    },
  },
});

const FullWidthCard = styled(Card)({
  width: '100%',
  margin: '8px auto',
  borderRadius: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0px 6px 25px rgba(0, 0, 0, 0.15)',
  },
});

const GradientBackground = styled(Box)({
  minHeight: '100vh',
  background: 'linear-gradient(180deg, #E3F2FD 0%, #BBDEFB 100%)',
  padding: '24px',
});

const GameCodeCard = styled(FullWidthCard)({
  backgroundColor: '#2196F3',
  color: 'white',
  textAlign: 'center',
  padding: '16px',
});

const DestinationCard = styled(FullWidthCard)({
  border: '2px solid #90CAF9',
  backgroundColor: 'white',
});

const StyledButton = styled(Button)({
  width: '100%',
  padding: '16px',
  fontSize: '1.2rem',
  fontWeight: 'bold',
  borderRadius: '12px',
  background: 'linear-gradient(45deg, #4CAF50 30%, #45B649 90%)',
  marginTop: '16px',
  color: 'white',
  '&:hover': {
    background: 'linear-gradient(45deg, #45B649 30%, #4CAF50 90%)',
    transform: 'scale(1.02)',
  },
});

const PlayerCard = styled(FullWidthCard)(({ isDriver }) => ({
  backgroundColor: isDriver ? '#FFF8E1' : 'white',
  maxWidth: isDriver ? '180px' : '110px',
  margin: '8px',
  padding: '8px',
  '&:hover': {
    backgroundColor: isDriver ? '#FFE0B2' : '#F5F5F5',
  },
}));

export default function CharacterSelection() {
  const navigate = useNavigate();
  const [gameState, setGameState] = useState({
    gameCode: "HBP2025",
    destination: "",
    distanceRemaining: "500 miles away",
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
    navigate('/awaiting-game');
  };

  return (
    <ScrollContainer>
      <GradientBackground>
        <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
          {/* Game Code */}
          <GameCodeCard>
            <Typography variant="overline" sx={{ display: 'block', mb: 1 }}>
              Join Code
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
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
                  },
                }}
              />
              <Typography variant="body2" color="textSecondary" sx={{ mt: 1 }}>
                {gameState.distanceRemaining}
              </Typography>
            </CardContent>
          </DestinationCard>

          {/* Tank */}
          <FullWidthCard sx={{
            background: 'linear-gradient(45deg, #2196F3 30%, #64B5F6 90%)',
            color: 'white',
          }}>
            <CardContent sx={{ textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                FUEL TANK
              </Typography>
            </CardContent>
          </FullWidthCard>

          {/* Start Button */}
          <StyledButton onClick={handleStartGame}>
            START THE JOURNEY
          </StyledButton>

          {/* Driver */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <PlayerCard
              isDriver
              onClick={() => handleNavigation('driver')}
            >
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {gameState.driver.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Driver
                </Typography>
              </CardContent>
            </PlayerCard>
          </Box>

          {/* Backseat Players */}
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 2,
            mt: 2
          }}>
            {gameState.backseaters.map((player, index) => (
              <PlayerCard
                key={index}
                onClick={() => handleNavigation(player.role)}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                    {player.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" sx={{ textTransform: 'capitalize' }}>
                    {player.role}
                  </Typography>
                </CardContent>
              </PlayerCard>
            ))}
          </Box>
        </Box>
      </GradientBackground>
    </ScrollContainer>
  );
}