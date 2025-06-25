// Write react js script to display alert box with text “Welcome to LJU” by
// clicking
// on button

import React from 'react'

function PB_349() {
    function handleclick(){
        alert("Welcome to LJU")
    }

    return (
        <div>
            <button onClick={handleclick}>Click</button>
        </div>
    )
}

export default PB_349
