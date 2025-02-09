import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, Typography, Box, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';

const FullWidthCard = styled(Card)({
  width: '100%',
  margin: '8px auto',
  borderRadius: '16px',
  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  padding: '16px',
});

const ScrollContainer = styled(Box)({
  maxHeight: '100vh',
  overflowY: 'auto',
  paddingBottom: '20px', 
});

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

  return (
    <ScrollContainer sx={{ p: 2, backgroundColor: '#f9f9f9', minHeight: '100vh', textAlign: 'center' }}>
      {/* Game Code */}
      <FullWidthCard sx={{ backgroundColor: '#ddd' }}>
        <CardContent>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            JOIN CODE: {gameState.gameCode}
          </Typography>
        </CardContent>
      </FullWidthCard>

      {/* Editable Destination Field */}
      <FullWidthCard sx={{ border: '2px solid green', p: 2 }}>
        <CardContent>
          <TextField
            label="Destination Address"
            variant="outlined"
            fullWidth
            value={gameState.destination}
            onChange={handleDestinationChange}
            sx={{ mb: 1 }}
          />
          <Typography variant="body2" color="textSecondary">
            {gameState.distanceRemaining}
          </Typography>
        </CardContent>
      </FullWidthCard>

      {/* Tank Placeholder */}
      <FullWidthCard sx={{ backgroundColor: '#ddd' }}>
        <CardContent>
          <Typography variant="h6">TANK</Typography>
        </CardContent>
      </FullWidthCard>

      {/* Start Button */}
      <Button variant="contained" color="primary" sx={{ width: '100%', mt: 1, p: 2 }}>
        START
      </Button>

      {/* Player Roles Display */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <FullWidthCard sx={{ maxWidth: '120px', backgroundColor: '#ddd' }}>
          <CardContent>
            <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
              {gameState.driver.name}
            </Typography>
            <Typography variant="body2">Driver</Typography>
          </CardContent>
        </FullWidthCard>
      </Box>

      {/* Backseat Players (Fixed Layout Issue) */}
      <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', mt: 2, gap: 1 }}>
        {gameState.backseaters.map((player, index) => (
          <FullWidthCard key={index} sx={{ maxWidth: '110px', backgroundColor: '#ddd', flex: '1 1 45%' }}>
            <CardContent>
              <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                {player.name}
              </Typography>
              <Typography variant="body2">{player.role}</Typography>
            </CardContent>
          </FullWidthCard>
        ))}
      </Box>
    </ScrollContainer>
  );
}