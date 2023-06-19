import React from 'react'

function TimeInfo({ currentTime, duration }) {

  return (
    <div className='desc'>
      <p>{Math.round(currentTime)} / {Math.round(duration)}</p>
      <progress min='0' max='100' value={(Math.round(currentTime)*100) / Math.round(duration)} />
    </div>
  )
}

export default TimeInfo