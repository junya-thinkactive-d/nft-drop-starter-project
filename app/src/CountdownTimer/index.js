import React, { useEffect, useState } from 'react'
import './CountdownTimer.css'

const CountdownTimer = ({ dropDate,setDistance }) => {
  const [timerString, setTimerString] = useState('')
  const [dayTimerString, setDayTimerString] = useState('')
  const [hourTimerString, setHourTimerString] = useState('')
  const [minuteTimerString, setMinuteTimerString] = useState('')
  const [secondTimerString, setSecondTimerString] = useState('')
  useEffect(() => {
    console.log('Setting interval...')

    const interval = setInterval(() => {
      const currentDate = new Date().getTime()
      const distance = dropDate - currentDate
      setDistance(distance)

      const days = Math.floor(distance / (1000 * 60 * 60 * 24))
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      )
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((distance % (1000 * 60)) / 1000)

      setTimerString(`${days}d ${hours}h ${minutes}m ${seconds}s`)
      setDayTimerString(days)
      setHourTimerString(hours)
      setMinuteTimerString(minutes)
      setSecondTimerString(seconds)

      if (distance < 0) {
        console.log('Clearing interval')
        clearInterval(interval)
      }
    }, 1000)

    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])
  return (
    <div className='timer-container'>
      <p className='timer-header'>Sword Drop Starting In</p>
      {timerString && (
        <div className='timer-body'>
          <div className='timer day'>{dayTimerString}</div>
          <div className='teimr-words'>day</div>
          <div className='timer hour'>{hourTimerString}</div>
          <div className='teimr-words'>:</div>
          <div className='timer minute'>{minuteTimerString}</div>
          <div className='teimr-words'>:</div>
          <div className='timer second'>{secondTimerString}</div>
        </div>
      )}
      <div>Comming Soon !</div>
    </div>
  )
}

export default CountdownTimer
