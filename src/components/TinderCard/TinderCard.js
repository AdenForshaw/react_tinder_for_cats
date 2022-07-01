import React from 'react'
import { useEffect, useState } from 'react'
import catnames from '../../assets/catnames'
import cathobbies from '../../assets/cathobbies'
import TindyCard from 'react-tinder-card'

const TinderCard = () => {

    const pic_url = 'https://api.thecatapi.com/v1/images/search'
    const card_stack = []

    const card_stack2 = [{
        age: 3,
        hobby: (2)['Painting', 'Skating'],
        name: "Noodle",
        pic: "https://cdn2.thecatapi.com/images/31n.jpg"
    }, {
        age: 3, hobby: ["Parkour", "Skiing"], name: "Boo",
        pic: "https://cdn2.thecatapi.com/images/8k5.gif"
    }]

    console.log(card_stack)

    //number of names in catnames list
    let kittynamesnum = catnames.length

    function catname() {
        const j = Math.floor(Math.random() * kittynamesnum);
        return catnames[j]
    }

    //maximum age of any given cat
    let kittyage = 12

    function catage() {
        var j = Math.floor(Math.random() * kittyage);
        if (j < 2) {
            //no 0-year-old cats
            j += 1
        }
        return j
    }

    //number of items in hobby list
    let hobbynum = cathobbies.length

    function cathobby() {
        let currenthobby = []
        var j = Math.floor(Math.random() * hobbynum);
        var k = Math.floor(Math.random() * hobbynum);
        currenthobby[0] = cathobbies[j]
        currenthobby[1] = cathobbies[k]
        return currenthobby
    }

    async function makeACat() {
        let catobject = {}
        await fetch(pic_url)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw response;
            })
            .then(data => {
                catobject["pic"] = data[0].url
            })
            .catch(error => {
                console.error("Error fetching cat pic ", error);
            })

        catobject["name"] = catname()
        catobject["age"] = catage()
        catobject["hobby"] = cathobby()
        card_stack.push(catobject)
    }

    useEffect(() => {
        makeACat()
        makeACat()
    }, [])

    useEffect(() => {

    }, [card_stack])

    return (
        <>
            {/* <h1>{card_stack[0].name}</h1> */}
            {card_stack ? card_stack.map((cat) =>
                <TindyCard key={cat.pic}>
                    <img src={cat.pic} alt={cat.name} />
                    <h1>{cat.name}</h1>
                </TindyCard> 
            ):''}
        </>
    )
}

export default TinderCard