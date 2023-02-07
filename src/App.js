import AboutEarthly from './AboutEarthly';
import './App.scss';
import Banner from './Banner';
import BestSelling from './BestSelling';
import ProductOdd from './ProductOdd';
import paperCup from './paper-cup.mp4'
import loofah from './loofah.mp4'
import straw from './straw.mp4'
import toothbrush from './toothbrush.mp4'
import ProductEven from './ProductEven';
import bgImage from './bg-image.png';
import flippedBgImage from './flipped.png';
import loofahImage from './loofah-image.webp';
import cupImage from './cup-image.webp';
import strawImage from './straw-image.webp';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Banner/>
      <AboutEarthly/>
      <BestSelling/>

      <ProductOdd videoOdd={paperCup} bgImage={flippedBgImage} upFrontImage={cupImage} heading={"Plant Based Reusable Cups"} para1={"Barista's love it!"} para2={"Easy to clean, hassle free and Plant Based.Sourced from local farmers, plant residue from Bamboo, Wheat, Rice, and Barley is processed and molded into reusable cups which can be used hundreds of times."} />

      <ProductEven videoEven={loofah} bgImage={bgImage} />

      <ProductOdd videoOdd={straw} bgImage={flippedBgImage} upFrontImage={strawImage} heading={"Reusable Bamboo Straws"} para1={"Sip sip sip!"} para2={"We collaborated with artisans in Veitnam, Earthly Organic Bamboo Straws are 100% Compostable, Vegan and BPA free. They can be reused, thrown in a compost bin, or even in your backyard. Serve with cold beverages like ice tea, cold coffee and many more. "} />

      <ProductEven videoEven={toothbrush} bgImage={bgImage}/>
      <Footer/>
    </div>
  );
}

export default App;

