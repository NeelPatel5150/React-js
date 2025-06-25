// Write a program to build React app having a button which increase count by 1
// while clicking it. (useState)

import {useState} from 'react';

import React from 'react'

function PB_414() {
    const [count, setCount] = useState(0)
    function handlecount(){
        setCount(count+1)
    }
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={handlecount}>Increase</button>
        </div>
    )
}

export default PB_414
