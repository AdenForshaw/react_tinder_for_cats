import './App.css';
import { useEffect, useState } from 'react'

import CatCard from './components/CatCard/CatCard'
import Favourites from './components/Favourites/Favourites'
import BottomButtons from './components/BottomButtons/BottomButtons'

const API_KEY = 'DEMO-API-KEY'
const API_URL = 'https://api.thecatapi.com/v1/images/search?limit=10'

function App() {
  const [swipeleft, setSwipeLeft] = useState(true)
  const [swiperight, setSwipeRight] = useState(true)
  const [showFavourites, setShowFavourites] = useState(true)
  const [currentcatName, setCurrentCatName] = useState('')
  const [currentcatUrl, setCurrentCatUrl] = useState('')

  const [lastDirection, setLastDirection] = useState()

  const [catImages, setCatImages] = useState([])

  const refreshCatImages = ()=>
  {
  
    fetch(API_URL, {'x-api-key': API_KEY})
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw response;
    })
    .then(data => {
      setCatImages(data)
    })
    .catch(error => {
      console.error("Error fetching cat pic ", error);
    })
  }
  var [savedcats, setSavedCats] = useState({})

  //adds current cat to savedcats object if it's 'swiped right' on
  useEffect(() => {
    if (currentcatUrl) {
      console.log("save",currentcatUrl)
      setSavedCats({
        ...savedcats,
        [currentcatName]: currentcatUrl
      })
    }
  }, [swiperight])
  useEffect((i) => {
    
      console.log("swipe",i)
    
  }, [swiperight, swipeleft])
  //fetch cat pic
  useEffect(() => {
    refreshCatImages();
  }, [])

  function handleSwipe(direction, currentcatUrl) {
    console.log('App.handleSwipe',direction, currentcatUrl);
    const swiped = (direction, currentcatUrl) => {
      console.log(direction)
      setSwipeRight(true)
    }
  }

  return (
    <>
      {/* conditionally render CatCard+BottomButtons or Messages depending on messageTab state*/}
      {showFavourites ?
        <>
           <div className='app'>
          <div className='cardContainer'>
        <button className="button" onClick={refreshCatImages}>Refresh Kitties</button>
          {catImages.map((catImage,index) =>
          <CatCard key={index} 
            handleSwipe={handleSwipe} 
            setSwipeRight={setSwipeRight}
            setSwipeLeft={setSwipeLeft}
            currentcatUrl={catImage.url}
            currentcatName={currentcatName}
          />
          )}

      </div>
    </div>
          <BottomButtons
            setSwipeLeft={setSwipeLeft}
            setShowFavourites={setShowFavourites}
            setSwipeRight={setSwipeRight}
          />
        </>
:
<Favourites
  savedcats={savedcats}
/>

}
    </>
  )
}

export default App;
