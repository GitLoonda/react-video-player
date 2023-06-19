import { useState, useRef, useEffect } from 'react'
import './App.css'
import Video from './components/Video';
import BtnGroup from './components/BtnGroup';
import TimeInfo from './components/TimeInfo';

function App() {
  const videoRef = useRef();

  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  
  useEffect(() => {
    setCurrentTime(videoRef.current.currentTime);
    setDuration(videoRef.current.duration);
    
    const handleLoadedMetadata = () => {
      setDuration(videoRef.current.duration);
    };

    videoRef.current.addEventListener('loadedmetadata', handleLoadedMetadata);

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
      <Video videoRef={videoRef} />
      <TimeInfo duration={duration} currentTime={currentTime}/>
      <BtnGroup playVid={playVid} pauseVid={pauseVid} stopVid={stopVid}/>
    </>
  )
}

export default App
