// Write react js script to display alert box with text “welcome to lju” only on
// double click button

import React from 'react'

function PB_351() {
    function handleDoubleClick(){
        alert("welcome to lju")
    }

    return (
        <div>
            <button onDoubleClick={handleDoubleClick}>Double Click here</button>
        </div>
    )
}

export default PB_351
