import React from 'react';
import './Video.css';

const Video = () => {
  return (
    <div className="video-container">
      <video
        src="/videos/turf.mp4" // Path relative to public directory
        autoPlay
        muted
        loop
        className="full-screen-video"
      />
    </div>
  );
};

export default Video;
