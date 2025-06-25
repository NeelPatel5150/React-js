// Write a program to build React app having 2 input number fields (Number 1
// and Number 2) and display the entered value on the same page. And then click
// on add button to calculate the addition of two numbers. Display the addition in
// h2 tag

import {useState} from 'react'

import React from 'react'

function PB_421() {
    const [data, setData] = useState({})
    const [sum, setSum] = useState(0)
    function handleChange(e){
        const {name, value} = e.target
        setData({...data, [name]:value})
    }
    function add(){
        setSum(parseInt(data.num1)+parseInt(data.num2))
    }
    return (
        <div>
            Num1 : <input type='number' name='num1' onChange={handleChange}></input><br/>
            Num2 : <input type='number' name='num2' onChange={handleChange}></input><br/>
            <button onClick={add}>Add</button>
            <h2>Sum : {sum}</h2>
        </div>
    )
}

export default PB_421
