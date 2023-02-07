import React from 'react';
import './ProductOdd.scss';

const ProductOdd = ({videoOdd, bgImage,upFrontImage,heading, para1, para2}) => {
  return (
    <div className='product-odd'>
        <div className='product-to-buy-odd'>
        <img className='bg-image' src={bgImage} alt="" />

        <div className='product-detail'>
          <h1>{heading}</h1>
          <div className='sub-product-detail'>
            <img className='up-front-image' src={upFrontImage} alt="" />

            <p className='Para'>
              <p style={{fontWeight:'bold',paddingBottom:"2rem", paddingTop:"2rem"} }>{para1}</p>
              
              <p>{para2}</p>
            </p>
          
        </div>

        <button className='btn'>Try now</button>
          
        </div>

        
          
        </div>

        <div className='video-odd'>
            <video src={videoOdd} muted autoPlay loop controlsList='nodownload'></video>
        </div>
    </div>
  )
}

export default ProductOdd