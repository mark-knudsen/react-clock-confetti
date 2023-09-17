import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import '../clock.css'; // Import a CSS file for styling

const ClockFunctional = () => {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [showConfetti, setShowConfetti] = useState(false);

  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  const isNewMinute = () => {
    const seconds = currentTime.getSeconds();
    return seconds === 0;
  };

  useEffect(() => {
    const timer = setInterval(updateCurrentTime, 1000);

    const handleConfetti = () => {
      if (isNewMinute()) {
        setShowConfetti(true);

        const confettiTimer = setTimeout(() => {
          setShowConfetti(false);
        }, 5000); // 5000 milliseconds = 5 seconds

        return () => {
          clearTimeout(confettiTimer);
        };
      }
    };

    handleConfetti();

    return () => {
      clearInterval(timer);
    };
  }, [currentTime]);

  return (
    <div className="clock-container">
        <div className="clock">
          <h1>{currentTime.toLocaleTimeString()}</h1>
          {showConfetti && <Confetti />}
        </div>
      </div>
  );
};

export default ClockFunctional;
