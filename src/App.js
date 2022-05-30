import './App.css';
import { useEffect, useState, useRef } from 'react'

import iphone from './assets/iphone.png'

import CatCard from './components/CatCard/CatCard'
import Messages from './components/Messages/Messages'
import TopButtons from './components/TopButtons/TopButtons'
import BottomButtons from './components/BottomButtons/BottomButtons'
import catnames from './assets/catnames';

function App() {
  const [swipeleft, setSwipeLeft] = useState(true)
  const [swiperight, setSwipeRight] = useState(true)
  const [messageTab, setMessageTab] = useState(true)
  const [currentcatUrl, setCurrentCatUrl] = useState('')
  const [currentcatName, setCurrentCatName] = useState('')
  console.log('app' + currentcatName)

  var [savedcats, setSavedCats] = useState({})

  //adds current cat to savedcats object if it's 'swiped right' on
  useEffect(() => {
    if (currentcatUrl && currentcatName){
    setSavedCats({
      ...savedcats,
      [currentcatName]: currentcatUrl
    })
    }
  }, [swiperight])

  if (messageTab) {
    //main swiping page
    return (
      <>
        <img id="phonebackground" src={iphone} alt='iphone background' />
        <TopButtons
          messageTab={messageTab}
          setMessageTab={setMessageTab} 
          />
        <CatCard
          swipeleft={swipeleft}
          swiperight={swiperight}
          setCurrentCatUrl={setCurrentCatUrl}
          currentcatUrl={currentcatUrl}
          setCurrentCatName={setCurrentCatName}
          />
        <BottomButtons
          swipeleft={swipeleft}
          setSwipeLeft={setSwipeLeft}
          swiperight={swiperight}
          setSwipeRight={setSwipeRight} 
          />
      </>
    )
  }
  //'messages' page
  return (
    <>
      <img id="phonebackground" src={iphone} alt='iphone background' />
      <TopButtons />
      <Messages savedcats={savedcats} />
    </>
  );
}
export default App;
