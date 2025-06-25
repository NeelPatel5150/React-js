// Write a program to create ReactJS application having an array of strings and
// convert it in Uppercase using MAP method.


import React from 'react'

function PB_353() {
    const arr1 = ['one', 'two', 'three', 'four', 'five']

    return (
        <div>
            {
                arr1.map((value)=>{
                    return <h3>{value.toUpperCase()}</h3>
                })
            }
        </div>
    )
}

export default PB_353
