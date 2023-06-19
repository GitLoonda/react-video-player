import { useState, useRef, useEffect } from 'react'

function Video({ videoRef }) {

  return (
    <div className='content'>
      <video src='./media/video.mp4' ref={videoRef}/>
    </div>
  )
}

export default Video