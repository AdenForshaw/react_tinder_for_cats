import {useState, useEffect} from 'react'
import { AiFillInfoCircle } from 'react-icons/ai'
import catnames from '../../assets/catnames'
import cathobbies from '../../assets/cathobbies'
import './catinfo.css'

const CatInfo = ({ swipeleft, swiperight, setCurrentCatName}) => {
    const [catname, setCatName] = useState('')
    const [catage, setCatAge] = useState('')
    const [currenthobby, setCurrentHobby] = useState([])

    function changename() {
        const j = Math.floor(Math.random() * 115);
        setCatName(catnames[j])
        console.log("info" + catname)
        setCurrentCatName(catname)
    }

    function changeage() {
        var j = Math.floor(Math.random() * 12);
        if (j<2){
            j+=1
        }
        setCatAge(j)
    }

    function changehobby() {
        var j = Math.floor(Math.random() * 192);
        currenthobby[0] = cathobbies[j]
        var k = Math.floor(Math.random() * 192);
        currenthobby[1] = cathobbies[k]
    }
    
    useEffect(() => {
        changename()
        changeage()
        changehobby()
    }, [swipeleft, swiperight]);

    return (
        <>
            <div id="nameage">
                <h1>{catname} <span className="notbold"> {catage}</span></h1>
            </div>
            <div id="interests">
                <p>{currenthobby[0]}</p>
                <p>{currenthobby[1]}</p>
            </div>
            <div id="infocircle">
                <AiFillInfoCircle size={23}/>
            </div>
        </>
    )
}

export default CatInfo
