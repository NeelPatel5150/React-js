// Write a ReactJS code in which we have apply filter to skip digit “3” from the
// array of 1 to 5 and display all remaining digits of the array.

import React from 'react'

function PB_356() {
    const numbers = [1, 2, 3, 4, 5]
    return (
        <div>
            {
                numbers.filter((value)=>{
                    if (value === 3){
                        return false
                    } else {
                        return value
                    }
                })
            }
        </div>
    )
}

export default PB_356
