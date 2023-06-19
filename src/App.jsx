import { useState, useRef, useEffect } from 'react'
import './App.css'

function App() {
  const videoRef = useRef();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  useEffect(() => {
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);

    let vidInterval = setInterval(() => {
      setCurrentTime(videoRef.current.currentTime);
    }, 1000)

    return () => {clearInterval(vidInterval)}
  }, [currentTime]);

  const playVid = () => {
    videoRef.current.play();
  }
  const pauseVid = () => {
    videoRef.current.pause();
  }
  const stopVid = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  }

  return (
    <>
      <h1>React Video Player</h1>
      <div className="content">
        <video src='./media/video.mp4' alt='video file' ref={videoRef} />
      </div>
      <div className="desc">
        <p>{Math.round(currentTime)} / {Math.round(duration)}</p>
        <progress min='0' max='100' value={(Math.round(currentTime)*100) / Math.round(duration)} />
      </div>
      <div className="control">
        <button onClick={playVid}>play</button>
        <button onClick={pauseVid}>pause</button>
        <button onClick={stopVid}>stop</button>
      </div>
    </>
  )
}

export default App
