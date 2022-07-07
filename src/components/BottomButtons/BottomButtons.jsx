import React, { useState } from 'react'

import './bottombuttons.css'

import { RiArrowGoBackLine } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import { BsLightningChargeFill } from 'react-icons/bs'


const BottomButtons = ({ swipeleft, setSwipeLeft, swiperight, setSwipeRight, setShowFavourites }) => {

    return (
        <section>
            <button className="button cross" onClick={() => setSwipeLeft(!swipeleft)}>
                <ImCross size={16} /> &nbsp;Swipe Left
            </button>
            <button className="button favourites" onClick={() => setShowFavourites()}>
                &nbsp;Favourites
            </button>
            <button className="button heart" onClick={() => setSwipeRight(!swiperight)}>
                <BsFillHeartFill size={16} /> &nbsp;Swipe Right
            </button>
            {/* decorative button 
            <div className="button lightning">
                <BsLightningChargeFill size={14} />
    </div>*/}
        </section>
    )
}

export default BottomButtons
