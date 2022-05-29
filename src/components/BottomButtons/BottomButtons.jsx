import React, { useState } from 'react'

import './bottombuttons.css'

import { RiArrowGoBackLine } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'
import { AiFillStar } from 'react-icons/ai'
import { BsFillHeartFill } from 'react-icons/bs'
import { BsLightningChargeFill } from 'react-icons/bs'


const BottomButtons = ({swipeleft, setSwipeLeft}) => {

    return (
        <section>
            <div className="button arrow">
                <RiArrowGoBackLine size={14} />
            </div>
            <button className="button cross" onClick={() => setSwipeLeft(!swipeleft)}>
                <ImCross size={16} />
            </button>
            <div className="button star">
                <AiFillStar size={14} />
            </div>
            <button className="button heart">
                <BsFillHeartFill size={16} />
            </button>
            <div className="button lightning">
                <BsLightningChargeFill size={14} />
            </div>
        </section>
    )
}

export default BottomButtons
