import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';

//import startButtonImage from '../final assets/startbutton.png';
//import hostButtonImage from '../final assets/hostbutton.png';
import BeanBuckImg from '../final assets/beanbuck.png';
import HealthImg from '../final assets/hearticon.png';
import TankImg from '../final assets/beanmobile.gif';
import AtkImg from '../final assets/dmgicon.png';
import KillCountImg from '../final assets/killcounticon.png';
import AtkBoostImg from '../final assets/dmgincreaseicon.png';
import DriverImg from '../final assets/driver.gif';
import ScreenagerImg from '../final assets/screenager.gif';
import SleeperImg from '../final assets/sleeper.gif';
import SnackerImg from '../final assets/snacker.gif';

const FullWidthCard = styled(Card)({
  width: '300px',
  maxWidth: '600px',
  margin: '8px auto',
  borderRadius: '16px',
  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.3)',
  transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  color: 'white',
  alignItems: 'center',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  backdropFilter: 'blur(10px)',
});

const SmallIcon = styled(Button)({
  width: '40px',
  height: '40px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '8px',
  border: 'none',
  textIndent: '-9999px',
  padding: '0px',
  margin: '0px',
});

const TankImgStyle = styled(Button)({
  width: '270px',
  height: '270px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '8px',
  border: 'none',
  textIndent: '-9999px',
  padding: '0px',
  margin: '0px',
});

const Beans = styled(Button)({
  width: '80px',
  height: '80px',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  borderRadius: '8px',
  border: 'none',
  textIndent: '-9999px',
  padding: '0px',
  margin: '0px',
});


const BeanMobile = styled(TankImgStyle)({
  backgroundImage: `url(${TankImg})`,
});

const BeanBuck = styled(SmallIcon)({
  backgroundImage: `url(${BeanBuckImg})`,
});

const HP = styled(SmallIcon)({
  backgroundImage: `url(${HealthImg})`,
});

const Driver = styled(Beans)({
  backgroundImage: `url(${DriverImg})`,
});

const Screenager = styled(Beans)({
  backgroundImage: `url(${ScreenagerImg})`,
});

const Sleeper = styled(Beans)({
  backgroundImage: `url(${SleeperImg})`,
});

const Snacker = styled(Beans)({
  backgroundImage: `url(${SnackerImg})`,
});

const Dmg = styled(SmallIcon)({
  backgroundImage: `url(${AtkImg})`,
});

const DmgInc = styled(SmallIcon)({
  backgroundImage: `url(${AtkBoostImg})`,
});

const KillCount = styled(SmallIcon)({
  backgroundImage: `url(${KillCountImg})`,
});

const ScrollContainer = styled(Box)({
  maxHeight: '640px',
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
    <ScrollContainer>
    <GradientBackground>
      <Box sx={{ maxWidth: '600px', margin: '0 auto' }}>
        {/* Rest Stop Header */}
        <FullWidthCard>
          <CardContent>
            <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: 'white' }}>
              REST STOP
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
              {gameState.milesRemaining} miles from destination
            </Typography>
          </CardContent>
        </FullWidthCard>

        {/* Bean Bucks Display */}
        <FullWidthCard>
          <CardContent>
            {/* <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', color: '#9C27B0' }}>
              Bean Bucks: {gameState.tankPoints}
            </Typography> */
           
            <BeanBuck></BeanBuck>
            }
          </CardContent>
          <CardContent>
            <Typography>1000</Typography>
          </CardContent>
        </FullWidthCard>

        {/* Beanmobile Section */}
        <FullWidthCard sx={{ backgroundColor: 'rgba(74, 20, 140, 0.2)' }}>
          <CardContent>
            <BeanMobile></BeanMobile>
            <Typography variant="body2" sx={{ textAlign: 'center', color: 'rgba(255,255,255,0.7)' }}>
             600 / 600 <HP></HP>
            </Typography>

            {/* Upgrade Tank Health Buttons */}
            <Box display="flex" justifyContent="center" flexDirection="column" gap={2} mt={2}>
              <StyledButton sx={{background: 'linear-gradient(45deg, #9C27B0 30%, #673AB7 90%)' }}>
                <div>+100<HP></HP></div>
                <div>-120<BeanBuck></BeanBuck></div>
              </StyledButton>

              <StyledButton sx={{ background: 'linear-gradient(45deg, #673AB7 30%, #4A148C 90%)' }}>
              <div>+200<HP></HP></div>
              <div>-200<BeanBuck></BeanBuck></div>
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
                <Card
                sx={{
                  borderRadius: '12px',
                  backgroundColor: 'rgba(25, 25, 25, 0.8)',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  mb: '20px'
                }}>
                  <CardContent sx={{
                    width: '290px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                      <Driver></Driver>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                      Nancy<br></br>DRIVER
                    </Typography>

                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>

                    <Dmg></Dmg>
                    <Typography variant="body1" color="rgba(255,255,255)">10</Typography>
                    <KillCount></KillCount>
                    <Typography variant="body1" color="rgba(255,255,255)">20</Typography>
                    </StyledButton>
                    </Box>


                    {/* Upgrade Attack Power Button */}
                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>
                        <DmgInc></DmgInc>
                        +30
                        <BeanBuck></BeanBuck>
                        -100
                      </StyledButton>
                    </Box>
                  </CardContent>
                </Card>

                <Card
                sx={{
                  borderRadius: '12px',
                  backgroundColor: 'rgba(25, 25, 25, 0.8)',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  mb: '20px'
                }}>
                  <CardContent sx={{
                    width: '290px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                      <Screenager></Screenager>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                      Matthew<br></br>SCREENAGER
                    </Typography>

                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>

                    <Dmg></Dmg>
                    <Typography variant="body1" color="rgba(255,255,255)">10</Typography>
                    <KillCount></KillCount>
                    <Typography variant="body1" color="rgba(255,255,255)">20</Typography>
                    </StyledButton>
                    </Box>


                    {/* Upgrade Attack Power Button */}
                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>
                        <DmgInc></DmgInc>
                        +30
                        <BeanBuck></BeanBuck>
                        -100
                      </StyledButton>
                    </Box>
                  </CardContent>
                </Card>

                <Card
                sx={{
                  borderRadius: '12px',
                  backgroundColor: 'rgba(25, 25, 25, 0.8)',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  mb: '20px'
                }}>
                  <CardContent sx={{
                    width: '290px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                      <Sleeper></Sleeper>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                      Aayah<br></br>SLEEPER
                    </Typography>

                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>

                    <Dmg></Dmg>
                    <Typography variant="body1" color="rgba(255,255,255)">10</Typography>
                    <KillCount></KillCount>
                    <Typography variant="body1" color="rgba(255,255,255)">20</Typography>
                    </StyledButton>
                    </Box>


                    {/* Upgrade Attack Power Button */}
                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>
                        <DmgInc></DmgInc>
                        +30
                        <BeanBuck></BeanBuck>
                        -100
                      </StyledButton>
                    </Box>
                  </CardContent>
                </Card>

                <Card
                sx={{
                  borderRadius: '12px',
                  backgroundColor: 'rgba(25, 25, 25, 0.8)',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  mb: '20px'
                }}>
                  <CardContent sx={{
                    width: '290px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                      <Snacker></Snacker>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                      Amy<br></br>SNACKER
                    </Typography>

                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>

                    <Dmg></Dmg>
                    <Typography variant="body1" color="rgba(255,255,255)">10</Typography>
                    <KillCount></KillCount>
                    <Typography variant="body1" color="rgba(255,255,255)">20</Typography>
                    </StyledButton>
                    </Box>


                    {/* Upgrade Attack Power Button */}
                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>
                        <DmgInc></DmgInc>
                        +30
                        <BeanBuck></BeanBuck>
                        -100
                      </StyledButton>
                    </Box>
                  </CardContent>
                </Card>

                <Card
                sx={{
                  borderRadius: '12px',
                  backgroundColor: 'rgba(25, 25, 25, 0.8)',
                  boxShadow: '0px 2px 8px rgba(0,0,0,0.1)',
                  mb: '20px'
                }}>
                  <CardContent sx={{
                    width: '290px',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                    alignItems: 'center',
                  }}>
                      <Snacker></Snacker>
                      <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: 'white' }}>
                      Luis<br></br>SNACKER
                    </Typography>

                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>

                    <Dmg></Dmg>
                    <Typography variant="body1" color="rgba(255,255,255)">10</Typography>
                    <KillCount></KillCount>
                    <Typography variant="body1" color="rgba(255,255,255)">20</Typography>
                    </StyledButton>
                    </Box>


                    {/* Upgrade Attack Power Button */}
                    <Box>
                      <StyledButton sx={{
                        width: '50px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        flexDirection: 'col',
                        }}>
                        <DmgInc></DmgInc>
                        +30
                        <BeanBuck></BeanBuck>
                        -100
                      </StyledButton>
                    </Box>
                  </CardContent>
                </Card>
            </ScrollContainer>
          </CardContent>
        </FullWidthCard>
      </Box>
    </GradientBackground>
    </ScrollContainer>
  );
}