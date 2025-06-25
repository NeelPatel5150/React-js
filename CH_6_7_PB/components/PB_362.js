// Write react js script to perform the tasks as asked below.
// Add an array of objects which contains name and age of people.
// Apply filter to find people with age less than 40. And display name of all
// people using map function.

import React from 'react'

function PB_362(props) {
  return (
    <div>
        {
            props.people.filter((value)=>value.age<40).map((value)=>{
                return <h1>Name : {value.name}<br/>Age : {value.age}</h1>
            })
        }
    </div>
  )
}

export default PB_362
