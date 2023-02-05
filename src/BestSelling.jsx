import React from 'react';
import './BestSelling.scss';
import bestSeller from './bestSeller.webp';
import bgImage from './bg-image.png';

const Products = () => {
  return (
    <div className='product'>
        <div className='image'>
            <img src={bestSeller} alt="" />
        </div>

        <div className='product-to-buy'>
          <img src={bgImage} alt="" />
        </div>
    </div>
  )
}

export default Products