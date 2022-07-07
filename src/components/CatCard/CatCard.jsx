import React, {useState, useEffect} from 'react'
import CatInfo from '../CatInfo/CatInfo'
import TinderCard from '../TinderCard/TinderCard'

const pic_url = 'https://api.thecatapi.com/v1/images/search'

const CatCard = ({ setSwipeRight,currentcatUrl,currentcatName}) => {

  const swiped = (direction, currentcatUrl) => {
    console.log(direction)
    setSwipeRight(true)
  }

  return (
    <>
      <TinderCard className='swipe' onSwipe={(dir) => swiped(dir, currentcatUrl)}>
        <div style={{ backgroundImage: 'url(' + currentcatUrl+ ')' }} className='card'>
          <h3>{currentcatName}</h3>
        </div>
      </TinderCard>
    </>
  )
}

export default CatCard
