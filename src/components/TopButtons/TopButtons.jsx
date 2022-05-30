import React from 'react'
import './topbuttons.css'
import { SiTinder } from 'react-icons/si'
import { IoIosChatbubbles } from 'react-icons/io'

const TopButtons = ({ messageTab, setMessageTab }) => {
    return (
        <div className="topbuttons">
            <span><button id={messageTab ? 'red' : 'gray'} onClick={!messageTab ? () => setMessageTab(!messageTab) : null}><SiTinder size={20} /></button></span>
            <span><button id={messageTab ? 'grey' : 'red'} onClick={messageTab ? () => setMessageTab(!messageTab) : null}><IoIosChatbubbles size={20} /></button></span>
        </div>
    )
}

export default TopButtons
