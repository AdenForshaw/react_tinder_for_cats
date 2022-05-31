import './messages.css'
import catmessages from '../../assets/catmessages'

var Card = ({ name, val }) => {
    const j = Math.floor(Math.random() * 27);

    return (
        <>
        <div className="singlecat">
            <div className="singlecatpic">
                <img className="catpic" src={val} alt="kitty!" />
            </div>
            <div className="singlecatinfo">
                <p className="name">{name}</p>
                <p className="message">{catmessages[j]}</p>
            </div>
        </div>
        <div className="line"></div>
        </>
    )
}

const Messages = ({ savedcats, messageTab }) => {
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
