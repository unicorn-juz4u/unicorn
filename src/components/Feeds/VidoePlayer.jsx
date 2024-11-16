import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div className="w-full h-96">
      <ReactPlayer url={url} controls={true} />
    </div>
  );
};

export default VideoPlayer;