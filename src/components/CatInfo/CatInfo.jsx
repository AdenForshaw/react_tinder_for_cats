import { useState, useEffect } from 'react'
// import { AiFillInfoCircle } from 'react-icons/ai'
import catnames from '../../assets/catnames'
import cathobbies from '../../assets/cathobbies'
import './catinfo.css'

const CatInfo = ({ swipeleft, swiperight, setCurrentCatName, currentcatName }) => {
    const [catname, setCatName] = useState('')
    const [catage, setCatAge] = useState('')
    const [currenthobby, setCurrentHobby] = useState([])

    //set cat name on first render
    useEffect(() => {
        if (!currentcatName) {
            setCurrentCatName(catname)
        }
    });

    //number of names in catnames list
    let kittynamesnum = catnames.length

    function changename() {
        const j = Math.floor(Math.random() * kittynamesnum);
        setCatName(catnames[j])
        setCurrentCatName(catname[j])
    }

    //maximum age of any given cat
    let kittyage = 12

    function changeage() {
        var j = Math.floor(Math.random() * kittyage);
        if (j < 2) {
            //no 0-year-old cats
            j += 1
        }
        setCatAge(j)
    }

    //number of items in hobby list
    let hobbynum = cathobbies.length

    function changehobby() {
        var j = Math.floor(Math.random() * hobbynum);
        currenthobby[0] = cathobbies[j]
        var k = Math.floor(Math.random() * hobbynum);
        currenthobby[1] = cathobbies[k]
    }

    //change name/age/hobby each time cat is swiped
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
            {/* decorative info icon - uncomment to add functionality */}
            {/* <div id="infocircle">
                <AiFillInfoCircle size={23} />
            </div> */}
        </>
    )
}

export default CatInfo
