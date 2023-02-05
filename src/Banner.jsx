import React from 'react';
import './Banner.scss';
import video from './file.mp4';

const Banner = () => {
  return (
    <div className='banner'>
        <video src={video} muted autoPlay loop controlsList='nodownload'></video>
    </div>
  )
}

export default Banner