// Create a react app using function component to display image of flower using
// AXIOS to make API request. Use API Url
// (https://flower.ceo/api/image/random). Key name in API which store image is
// “sample”.

import axios  from "axios";
import {useState} from "react";
import React from 'react'

function PB_434() {
    const [img, setImg] = useState('')
    function getImg() {
        axios
        .get('https://flower.ceo/api/image/random')
        .then((response)=>{
            setImg(response.data.sample)
        })
        .catch((error)=>{
            console.log('Error')
        })
    }
    return (
        <div>
            <img src={img} height={300} width={300}></img>
            <button onClick={getImg}>generate</button>
        </div>
    )
}

export default PB_434
