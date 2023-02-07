import React from 'react';
import './ProductEven.scss';

const ProductEven = ({videoEven,bgImage,upFrontImage}) => {
  return (
    <div className='product-even'>
        <div className='video-even'>
            <video src={videoEven} muted autoPlay loop controlsList='nodownload'></video>
        </div>

        <div className='product-to-buy-even'>
          <img className='bg-image' src={bgImage} alt="" />
          {/* <img className='up-front-image' src={upFrontImage} alt="" /> */}

        </div>

    </div>
  )
}

export default ProductEven