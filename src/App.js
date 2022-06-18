import './App.css';
import { useEffect, useState } from 'react'

import CatCard from './components/CatCard/CatCard'
import Messages from './components/Messages/Messages'
import TopButtons from './components/TopButtons/TopButtons'
import BottomButtons from './components/BottomButtons/BottomButtons'

function App() {
  const [swipeleft, setSwipeLeft] = useState(true)
  const [swiperight, setSwipeRight] = useState(true)
  const [messageTab, setMessageTab] = useState(true)
  const [currentcatUrl, setCurrentCatUrl] = useState('')
  const [currentcatName, setCurrentCatName] = useState('')

  var [savedcats, setSavedCats] = useState({})

  //adds current cat to savedcats object if it's 'swiped right' on
  useEffect(() => {
    if (currentcatUrl) {
      setSavedCats({
        ...savedcats,
        [currentcatName]: currentcatUrl
      })
    }
  }, [swiperight])


  return (
    <>
      <div className="topbuttonbox">
        <TopButtons
          messageTab={messageTab}
          setMessageTab={setMessageTab}
        />
      </div>
      {/* conditionally render CatCard+BottomButtons or Messages depending on messageTab state*/}
      {messageTab ?
        <>
          <div className="catbox">
            <CatCard
              swipeleft={swipeleft}
              swiperight={swiperight}
              setCurrentCatUrl={setCurrentCatUrl}
              currentcatUrl={currentcatUrl}
              setCurrentCatName={setCurrentCatName}
              currentcatName={currentcatName}
            />
          </div>
          <div className="bottombuttonbox">
            <BottomButtons
              swipeleft={swipeleft}
              setSwipeLeft={setSwipeLeft}
              swiperight={swiperight}
              setSwipeRight={setSwipeRight}
            />
          </div>
        </>
        :
        <div className="messagebox">
          <Messages
            savedcats={savedcats}
            messageTab={messageTab}
          />
        </div>
      }
    </>
  )
}

export default App;
