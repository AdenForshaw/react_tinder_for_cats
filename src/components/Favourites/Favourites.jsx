import './favourites.css'
import catmessages from '../../assets/catmessages'


//ToDo: Show a grid of Grid or List of the Favourites (those that have been swiped right)
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

const Favourites = ({ savedcats, messageTab }) => {
    var size = Object.keys(savedcats).length;

    return (
        <div id="grid" class="imgrid"></div>
    )
}

export default Favourites
