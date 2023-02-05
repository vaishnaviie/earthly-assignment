import React from 'react';
import './ProductOdd.scss';

const ProductOdd = ({videoOdd}) => {
  return (
    <div className='product-odd'>
        <div className='product-to-buy-odd'>

        </div>

        <div className='video-odd'>
            <video src={videoOdd} muted autoPlay loop controlsList='nodownload'></video>
        </div>
    </div>
  )
}

export default ProductOdd