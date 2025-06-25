// Write a ReactJS code in which we have apply filter to skip digits which are less
// than “10” from the array and display all remaining digits of the array
// [3,5,11,4,17,8,21,2,26,13,8]

import React from 'react'

function PB_360() {
    const arr = [3,5,11,4,17,8,21,2,26,13,8]
    return (
        <div>
            {
                arr.filter((value)=>value>10).map((value)=>{
                    return <h6>{value}</h6>
                })
            }
        </div>
    )
}

export default PB_360
