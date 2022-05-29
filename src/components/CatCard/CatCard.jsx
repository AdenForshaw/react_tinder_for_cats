import React, {useState, useEffect} from 'react'
import './catcard.css'
import CatInfo from '../CatInfo/CatInfo'


const pic_url = 'https://api.thecatapi.com/v1/images/search'

const CatCard = (props) => {
  const [catPic, SetCatPic] = useState('')

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
        SetCatPic(data[0].url);
      })
      .catch(error => {
        console.error("Error fetching cat pic ", error);
      })
  }, [props.swipeleft])

  return (
    <>
      <div id="catimage">
        <img src={catPic} alt="an adorable kittycat" />
      </div>
      <div id="catinfo">
        <CatInfo />
      </div>
    </>
  )
}

export default CatCard
