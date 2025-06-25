// Implement a character counter that displays the number of characters entered
// in a textarea input. 

import React from 'react'

function PB_370() {
    function handlechange(e) {
        console.log(e.target.value.length)
    }

    return (
        <div>
            <textarea onChange={handlechange}>Enter message</textarea>
        </div>
    )
}

export default PB_370
