import React from 'react';

import './App.css';

const getCurrentDate = () => {
  const date = new Date()
  return date.toDateString()
}

const App = () => {
  return (
    <div className="App">
      <h1>The current date is: {getCurrentDate()}</h1>
    </div>
  );
}

export default App;
