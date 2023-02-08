import React from 'react';
import './Banner.scss';
import video from './file.mp4';

const Banner = () => {
  return (
    <div className='banner'>
        <video src={video} muted autoPlay loop controlsList='nodownload'></video>
        <div className='heading'>
          <h2>Living Sustainable </h2>
          <h5>is now</h5>
          <h1>Affordable</h1>
        </div>
        
        {/* <h1 className='about-earthly'>About Earthly</h1> */}
    </div>
  )
}

export default Banner