import React, {useState} from 'react';
import './style.css'

function App() {
  
  const [days , setDays] = useState()
  const [hours ,setHours] = useState()
  const [minutes ,setMinutes] = useState()
  const [seconds ,setSeconds] = useState( )

  const nextYear = new Date().getFullYear() + 1
  const newYear = `1 Jan ${nextYear}`

  const countDown = () => { 
    const newYearDate = new Date(newYear)
    const currentTime = new Date()
    const totalSeconds = (newYearDate - currentTime) / 1000

    setDays(Math.floor(totalSeconds / 3600 / 24));
    setHours(Math.floor(totalSeconds  / 3600) % 24);
    setMinutes(Math.floor(totalSeconds  / 60) % 60);
    setSeconds(Math.floor(totalSeconds) % 60);
  }



  setInterval(countDown, 1000)

  return (
    <div className="App">
        <h3 className="title">Till New Year</h3>
      <div className="counter-till-new-year">
        <div className="days-c">
          <p className='counter'>{days < 10 ? `0${days}` : days}</p>
          <span>days</span>
        </div>
        <div className="days-c">
          <p className='counter'>{hours < 10 ? `0${hours}` : hours}</p>
          <span>hours</span>
        </div>
        <div className="days-c">
          <p className='counter'>{minutes < 10 ? `0${minutes}` : minutes}</p>
          <span>minutes</span>
        </div>
        <div className="days-c">
          <p className='counter'>{ seconds < 10 ? `0${seconds}` : seconds}</p>
          <span>seconds</span>
        </div>
      </div>
    </div>
  );
}

export default App;
