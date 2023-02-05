import React from 'react';
import './ProductEven.scss';

const ProductEven = ({videoEven}) => {
  return (
    <div className='product-even'>
        <div className='video-even'>
            <video src={videoEven} muted autoPlay loop controlsList='nodownload'></video>
        </div>

        <div className='product-to-buy-even'>

        </div>

    </div>
  )
}

export default ProductEven