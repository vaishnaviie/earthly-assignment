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

function App() {
  return (
    <div className="App">
      <Banner/>
      <AboutEarthly/>
      <BestSelling/>
      <ProductOdd videoOdd={paperCup}/>
      <ProductEven videoEven={loofah}/>
      <ProductOdd videoOdd={straw}/>
      <ProductEven videoEven={toothbrush}/>
    </div>
  );
}

export default App;

