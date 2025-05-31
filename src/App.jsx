import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';

function App() {
  return (
    // Accrodian component
    // <Accordian />

    // Random Color component
    // <RandomColor />

    // star rating component
    // <StarRating numOfStars={10} />

    // Image slider component
    <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />
  )
}

export default App
