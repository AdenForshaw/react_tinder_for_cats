import './App.css';
import {useState} from 'react'
import { UserContext } from './Context'

import iphone from './assets/iphone.png'

import CatCard from './components/CatCard/CatCard'
import BottomButtons from './components/BottomButtons/BottomButtons'
import TopButtons from './components/TopButtons/TopButtons'

function App() {
  const [swipeleft, setSwipeLeft] = useState(true)
  console.log(swipeleft)

  return (
    <>
      <img id="phonebackground" src={iphone} alt='iphone background' />
      <TopButtons />
      <CatCard swipeleft={swipeleft}/>
      <BottomButtons swipeleft={swipeleft} setSwipeLeft={setSwipeLeft}/>
    </>
  );
}

export default App;
