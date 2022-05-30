import React, {useState, useEffect} from 'react'
import './catcard.css'
import CatInfo from '../CatInfo/CatInfo'

const pic_url = 'https://api.thecatapi.com/v1/images/search'

const CatCard = ({ swipeleft, swiperight, currentcatUrl, setCurrentCatUrl, setCurrentCatName}) => {

  //fetch cat pic
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
    <>
      <div id="catimage">
        <img src={currentcatUrl} alt="an adorable kittycat" />
      </div>
      <div id="catinfo">
        <CatInfo 
          swipeleft={swipeleft} 
          swiperight={swiperight}
          currentcatUrl={currentcatUrl}
          setCurrentCatName={setCurrentCatName}
        />
      </div>
    </>
  )
}

export default CatCard
