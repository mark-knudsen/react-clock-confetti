import React from 'react';
import Clock from './Components/clock';

import ClockClass from './Components/clockClass';
import ClockFunctional from './Components/ClockFunctional';

function App() {
  return (
    <div className="App">
      {/* <Clock /> */}
      {/* <ClockClass /> */}
      <ClockFunctional />
    </div>
  );
}

export default App;

