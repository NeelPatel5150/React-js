// Write react js script to display values in console while changing it in text box

import React from 'react'

function PB_350() {
    function handlechange(event){
        console.log(event.target.value);
    }

    return (
        <div>
            Text : <input type="text" onChange={handlechange}></input>
        </div>
    )
}

export default PB_350
