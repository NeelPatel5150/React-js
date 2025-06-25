// Create a program to build React app having buttons to increment and
// decrement the number by clicking that respective button. Also, increment of
// the number should be performed only if number is less than 10 and decrement
// of the number should be performed if number is greater than 0. 

import {useState} from 'react'

import React from 'react'

function PB_415() {
    const [count, setCount] = useState(0)
    function increment() {
        if(count < 10){
            setCount(count + 1)
        }
    }
    function decrement() {
        if (count > 0){
            setCount(count - 1)
        }
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default PB_415
