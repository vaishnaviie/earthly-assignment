import React from 'react';
import './BestSelling.scss';
import bestSeller from './bestSeller.webp';
// import bgImage from './bg-image.png';

const Products = ({bgImage,upFrontImage,heading, para1, para2}) => {
  return (
    <div className='product'>
        <div className='image'>
            <img src={bestSeller} alt="" />
        </div>

        <div className='product-to-buy'>
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

export default Products