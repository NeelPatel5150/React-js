// Write a program to build React app to perform the tasks as asked below.
// •	Add three buttons “Change Text”, “Change Color”, “Hide/Show”.
// •	Add heading “LJ University” in red color(initial) and also add “React Js
// Hooks” text in h2 tag.
// •	By clicking on “Change text” button text should be changed to “Welcome
// students” and vice versa.
// •	By clicking on “Change Color” button change color of text to “blue” and vice
// versa. This color change should be performed while double clicking on the
// button.
// •	Initially button text should be “Hide”. While clicking on it the button text
// should be changed to “Show” and text “React Js Hooks” will not be shown

import { useState } from 'react';

import React from 'react'

function PB_416() {
    const [text, setText] = useState('LJ University')
    const [color, setColor] = useState('red')
    const [button, setButton] = useState('hide')
    function changeText() {
        if (text === "LJ University") {
            setText('Welcome Students')
        } else {
            setText('LJ University')
        }
    }

    function changeColor() {
        if (color === 'red') {
            setColor('blue')
        } else {
            setColor('red')
        }
    }

    function changeButton(){
        if(button == 'hide'){
            document.getElementById('text').innerHTML = ''
            setButton('show')
        }else{
            document.getElementById('text').innerHTML = 'React JS Hooks'
            setButton('hide')
        }
    }

    return (
        <div>
            <button onClick={changeText}>Change Text</button>
            <button onDoubleClick={changeColor}>Change Color</button>
            <button onClick={changeButton}>{button}</button>
            <h2 style={{color:color}}>{text}</h2>
            <h2 id='text'>React JS Hooks</h2>
            
        </div>
    )
}

export default PB_416
