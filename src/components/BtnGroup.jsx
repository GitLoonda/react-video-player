import React from 'react'

function BtnGroup({ playVid, pauseVid, stopVid }) {
  return (
    <div className='control'>
        <button onClick={playVid}>play</button>
        <button onClick={pauseVid}>pause</button>
        <button onClick={stopVid}>stop</button>
    </div>
  )
}

export default BtnGroup