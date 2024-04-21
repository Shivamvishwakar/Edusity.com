import React, { useRef } from 'react'
import './VideoPlayer.css'
import video_player from '../../assets/students-video.mp4'

const VideoPlayer = ({playState, setPlayState}) => {

    const player = useRef(null);

    const handleCloseVideo = (event)=>{
        console.log("close is clicked");
        if(event.target === player.current){
            setPlayState(false);
        }
    }

  return (
    <div className={`video-player ${playState? '':'hide'}`} ref={player} onClick={handleCloseVideo}>
      <video src={video_player} controls muted autoPlay ></video>
    </div>
  )
}

export default VideoPlayer