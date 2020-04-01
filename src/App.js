import React from 'react';
import './App.css';
import Intro from './components/Intro.js'

const getCurrentDate = () => {
  const date = new Date()
  return date.toDateString()
}

const getCurrentTime = () => {
  const time = new Date()
  const hour = time.getHours()
  const mins = time.getMinutes()
  const sec = time.getSeconds()

  const minutes = mins < 10 ? `0${mins}` : `${mins}`
  const seconds = sec < 10 ? `0${sec}` : `${sec}`


  return `${hour}:${minutes}.${seconds}`
}



const App = () => {
  return (
    <div className="App">
      <Intro date={getCurrentDate()} time={getCurrentTime()} />
    </div>
  );
}

export default App;
