import React from 'react'
import ReactPlayer from 'react-player/lazy'

// Lazy load the YouTube player


const CustomVideoPlayer = ({videoUrl}) =>
  {

  return (
    <div className='player-wrapper h-[100%]'>
        <ReactPlayer
          className='react-player'
          url={videoUrl}
          width='100%'
          height='100%'
        />
      </div>
  )
}
export default CustomVideoPlayer;



// import React, { useState, useRef, useEffect } from 'react';

// const CustomVideoPlayer = ({ videoUrl }) => {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const videoRef = useRef(null);

//   const handlePlayPause = () => {
//     if (isPlaying) {
//       videoRef.current.pause();
//     } else {
//       videoRef.current.play();
//     }
//     setIsPlaying(!isPlaying);
//   };

//   return (
//     <div className=" w-10/12 border border-white">
//       <video ref={videoRef} src={videoUrl} controls={false}>
//         Your browser does not support the video tag.
//       </video>
//       <button onClick={handlePlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
//     </div>
//   );
// };
