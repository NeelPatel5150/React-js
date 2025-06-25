// Create react js app to display all array elements in h2 tag using map function

import React from 'react'

function PB_352() {
    const arr = [1, 2, 3, 4, 5, 6]
    return (
        <div>
            {
                arr.map((value)=>{
                    return <h2>{value}</h2>
                })
            }
        </div>
    )
}

export default PB_352
