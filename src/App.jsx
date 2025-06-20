import Accordian from './components/accordian';
import ImageSlider from './components/image-slider';
import LoadMoreData from './components/load-more-data';
import RandomColor from './components/random-color';
import StarRating from './components/star-rating';
import TreeView from './components/tree-view';
import menus from './components/tree-view/data';

function App() {
  return (
    // Accrodian component
    // <Accordian />

    // Random Color component
    // <RandomColor />

    // star rating component
    // <StarRating numOfStars={10} />

    // Image slider component
    // <ImageSlider url={'https://picsum.photos/v2/list'} page={1} limit={10} />

    // load more data
    // <LoadMoreData />

    // TreeView component/menu UI
    <TreeView menus={menus} />
  )
}

export default App
