import React, { Component } from 'react';
import Confetti from 'react-confetti';
import '../clock.css'; // Import a CSS file for styling

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      showConfetti: false,
      backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`, // Initial background color
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.updateCurrentTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearTimeout(this.confettiTimer);
  }

  updateCurrentTime = () => {
    const newTime = new Date();
    this.setState({ currentTime: newTime }, () => {
      this.handleConfetti();
    });
  };

  isNewMinute = () => {
    const seconds = this.state.currentTime.getSeconds();
    return seconds === 0;
  };

  handleConfetti = () => {
    if (this.isNewMinute()) {
      this.setState({ showConfetti: true });

      // Generate a random background color
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

      this.setState({ backgroundColor: randomColor });

      this.confettiTimer = setTimeout(() => {
        this.setState({ showConfetti: false });
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  };

  render() {
    const { currentTime, showConfetti, backgroundColor } = this.state;

    return (
        <div className="clock-container" style={{ backgroundColor }}>
            <div className="clock">
            <h1>{currentTime.toLocaleTimeString()}</h1>
            {showConfetti && <Confetti />}
            </div>
        </div>
    );
  }
}

export default ClockClass;



// The old code that does not work - Commet by Mark

/* import React, { Component } from 'react';
import Confetti from 'react-confetti';
import '../clock.css'; // Import a CSS file for styling

class ClockClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
      showConfetti: false,
    };
  }

  componentDidMount() {
    this.timer = setInterval(this.updateCurrentTime, 1000);
    this.handleConfetti();
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    clearTimeout(this.confettiTimer);
  }

  updateCurrentTime = () => {
    this.setState({ currentTime: new Date() });
  };

  isNewMinute = () => {
    const seconds = this.state.currentTime.getSeconds();
    return seconds === 0;
  };

  handleConfetti = () => {
    if (this.isNewMinute()) {
      this.setState({ showConfetti: true });

      this.confettiTimer = setTimeout(() => {
        this.setState({ showConfetti: false });
      }, 5000); // 5000 milliseconds = 5 seconds
    }
  };

  render() {
    const { currentTime, showConfetti } = this.state;

    return (
        <div className="clock-container">
            <div className="clock">
            <h1>{currentTime.toLocaleTimeString()}</h1>
            {showConfetti && <Confetti />}
            </div>
        </div>
    );
  }
}

export default ClockClass;
 */