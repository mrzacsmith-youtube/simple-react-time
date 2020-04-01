import React from 'react';
import './App.css';
import Intro from './components/Intro.js'

const getCurrentDate = () => {
  const date = new Date()
  return date.toDateString()
}

const getCurrentTime = () => {
  const time = new Date()
  // const hour = time.getHours()
  const hr = time.getHours()
  const mins = time.getMinutes()
  const sec = time.getSeconds()

  const hour = hr > 12 ? `${hr - 12}` : `${hr}`
  const minutes = mins < 10 ? `0${mins}` : `${mins}`
  const seconds = sec < 10 ? `0${sec}` : `${sec}`


  return `${hour}:${minutes}:${seconds}`
}

const getDateTime = () => {
  const date = getCurrentDate()
  const time = getCurrentTime()
  return `${date} @ ${time}`
}



const App = () => {
  return (
    <div className="App">
      <Intro dateTime={getDateTime()} />
      {/* <Intro date={getCurrentDate()} time={getCurrentTime()} /> */}
    </div>
  );
}

export default App;
