
export const calculateDamage = (baseDamage, multiplier = 1) => {
    return Math.round(baseDamage * multiplier);
  };
  
  export const calculateHealthPercentage = (current, max) => {
    return (current / max) * 100;
  };
  
  export const calculateRemainingDistance = (total, traveled) => {
    return Math.max(0, total - traveled);
  };
  
  export const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };
  
  export const calculateDriverScore = (speed, speedLimit, distanceTraveled) => {
    const speedBonus = speed <= speedLimit ? 1 : 0.5;
    return Math.round(distanceTraveled * speedBonus);
  };