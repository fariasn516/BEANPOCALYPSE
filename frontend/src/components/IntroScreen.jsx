import React from 'react';
import { Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../final assets/IntroPage.webp'; 
import startButtonImage from '../final assets/startbutton.png'; 
import hostButtonImage from '../final assets/hostbutton.png'; 

const ButtonContainer = styled(Box)({
  position: 'absolute',
  bottom: '130px',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column', 
  gap: '15px', 
});

const ImageButton = styled(Button)({
  width: '200px',
  height: '55px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '8px',
  border: 'none',
  textIndent: '-9999px', 
});

const StartButton = styled(ImageButton)({
  backgroundImage: `url(${startButtonImage})`,
});

const HostButton = styled(ImageButton)({
  backgroundImage: `url(${hostButtonImage})`,
});

export default function IntroScreen() {
  const navigate = useNavigate()

  const handleButtonClick = () => {
    navigate('/character-selection')
  }

  return (
    <Box
      sx={{
        width: '356px',
        height: '75vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <ButtonContainer>
        <StartButton onClick={handleButtonClick}>
          START
        </StartButton>
        <HostButton onClick={handleButtonClick}>
          HOST GAME
        </HostButton>
      </ButtonContainer>
    </Box>
  );
}