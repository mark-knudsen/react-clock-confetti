import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import '../clock.css'; // Import a CSS file for styling

// Code eksemple from ChatGTP!
const Clock = () => {
  // State to hold the current time
  const [currentTime, setCurrentTime] = useState(new Date());

  // State to control the confetti display
  const [showConfetti, setShowConfetti] = useState(false);

  // Function to update the current time
  const updateCurrentTime = () => {
    setCurrentTime(new Date());
  };

  // Function to check if it's a new minute
  const isNewMinute = () => {
    const seconds = currentTime.getSeconds();
    return seconds === 0;
  };

  useEffect(() => {
    // Update the current time every second
    const timer = setInterval(updateCurrentTime, 1000);

    // It is here fromline 32 to 50 that the big change happened from what ChatGTP
    // Came of result. First of the result was the same as I had already tried from
    // the school, but after regenerating an answer this result came. - Comment by Mark

    // Function to handle confetti display and cleanup
    const handleConfetti = () => {
      if (isNewMinute()) {
        // If it's a new minute, trigger confetti and set a timer to hide it
        setShowConfetti(true);

        const confettiTimer = setTimeout(() => {
          setShowConfetti(false);
        }, 5000); // 5000 milliseconds = 5 seconds

        // Cleanup the confetti timer when a new minute starts or when the component unmounts
        return () => {
          clearTimeout(confettiTimer);
        };
      }
    };

    // Call handleConfetti immediately to check if confetti should be shown on component mount
    handleConfetti();
    
    
    // Cleanup the timer when the component unmounts
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

export default Clock;
