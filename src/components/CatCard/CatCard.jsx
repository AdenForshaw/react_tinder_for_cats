import React, {useState, useEffect} from 'react'
import './catcard.css'
import CatInfo from '../CatInfo/CatInfo'
import TinderCard from 'react-tinder-card'

const pic_url = 'https://api.thecatapi.com/v1/images/search'

const CatCard = ({ swipeleft, setSwipeLeft, swiperight, setSwipeRight, currentcatUrl, setCurrentCatUrl, setCurrentCatName, currentcatName }) => {

  //fetch cat pic after each swipe
  useEffect(() => {
    fetch(pic_url)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw response;
      })
      .then(data => {
        setCurrentCatUrl(data[0].url);
      })
      .catch(error => {
        console.error("Error fetching cat pic ", error);
      })
  }, [swipeleft,swiperight])

  return (
    <TinderCard
      onSwipe={()=>setSwipeRight(!swiperight)}
      onCardLeftScreen={() => setSwipeRight(!swiperight)}
      onSwipeRequirementFulfilled={() => setSwipeRight(!swiperight)}

    >
      <div id="catimage">
        <img src={currentcatUrl} alt="an adorable kittycat" />
        {/* <div className="catinfo">
          <CatInfo 
              swipeleft={swipeleft}
              swiperight={swiperight}
              currentcatUrl={currentcatUrl}
              setCurrentCatName={setCurrentCatName}
              currentcatName={currentcatName} 
            />
        </div> */}
      </div>
    </TinderCard>
  )
}

export default CatCard
