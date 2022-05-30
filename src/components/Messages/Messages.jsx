import React from 'react'
import './messages.css'

var Card = ({ name, val }) => {
    return (
        <>
        <div className="singlecat">
            <img className="catpic" src={val} alt="kitty!" />
            <h4 className="name">{name}</h4>
        </div>
        <div className="line"></div>
        </>
    )
}

const Messages = ({ savedcats }) => {
    var size = Object.keys(savedcats).length;

    return (
        <div id="messages">
            <span id="mesnum"><p>Messages</p><p id="mesnumnum">{size}</p></span>
            {
                Object.entries(savedcats).map(([key, val]) =>
                    <Card
                        key={key}
                        name={key}
                        val={val}
                    />
                )
            }
        </div>
    )
}

export default Messages
