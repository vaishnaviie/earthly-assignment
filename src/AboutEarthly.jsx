import React from 'react';
import './AboutEarthly.scss';
import image from './image.webp';

const AboutEarthly = () => {
  return (
    <div className='about-earthly'>
        <h1>About Earthly</h1>
        <div className='transparent'>

        </div>
        <div className='outer-div'>
            <div className='left-div'>
                
                <p className='left'>
                    Earthly is plant-based and made from baboo wheat and orange fibre which is
                    Sourced from local farmers, plant residue from Wheat, Barley, and Bamboo is molded into durable cups using our proprietary technology. 

                    Orange fibre made from Orange peels and other organic matter left behind after Orange is harvested.
                    
                    </p>
            </div>

            <div className='middle'>

                <img src={image} alt="" />

            </div>
            

            <div className='right-div' >
                
                <p className='right'>
                    Earthly Eco-friendly products like bamboo toothbrushes, bamboo straws, plant-based coffee cups, and many sustainable products are items that are not unsafe to the climate.Earthly organic products are the most affordable option in the market.
                    
                    </p>
            </div>
        </div>
        
    </div>
  )
}

export default AboutEarthly