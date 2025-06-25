// We have an array of numbers and we want to multiply each of these numbers
// by 5. Create react js app to display these multiplied numbers using map
// function.

import React from 'react'

function PB_354() {
    const arr = [1,2,3,4,5]

    return (
        <div>
            {
                arr.map((value)=>{
                    return <h4>{value*5}</h4>
                })
            }
        </div>
    )
}

export default PB_354
