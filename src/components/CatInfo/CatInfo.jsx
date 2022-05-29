import React from 'react'
import './catinfo.css'
import { AiFillInfoCircle } from 'react-icons/ai'

let catname= 'Joel'
let catage = 31

const CatInfo = () => {
    return (
        <>
            <div id="nameage">
                <h1>{catname} <span className="notbold"> {catage}</span></h1>
            </div>
            <div id="interests">
                <p>Instagram</p>
                <p>Dancing</p>
            </div>
            <div id="infocircle">
                <AiFillInfoCircle size={23}/>
            </div>
        </>
    )
}

export default CatInfo
