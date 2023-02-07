import React from 'react';
import './ProductEven.scss';

const ProductEven = ({videoEven,bgImage,upFrontImage,heading, para1, para2}) => {
  return (
    <div className='product-even'>
        <div className='video-even'>
            <video src={videoEven} muted autoPlay loop controlsList='nodownload'></video>
        </div>

        <div className='product-to-buy-even'>
          <img className='bg-image' src={bgImage} alt="" />

          <div className='product-detail'>
            <h1>{heading}</h1>
            <div className='sub-product-detail'>
              
              <p className='Para'>
                <p style={{fontWeight:'bold',paddingBottom:"2rem", paddingTop:"2rem"} }>{para1}</p>
                
                <p>{para2}</p>
              </p>

              <img className='up-front-image' src={upFrontImage} alt="" />
            
            </div>

            <button className='btn'>Try now</button>

          </div>

          

        </div>

    </div>
  )
}

export default ProductEven