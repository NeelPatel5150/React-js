// Write a program to build React app having text and button to show and hide
// the text. 

import {useState} from 'react'

function PB_420() {
    const [button, setButton] = useState('hide')
    const [text, setText] = useState('Visible')
    function hideShow(){
        if(button === 'hide'){
            setButton('show')
            setText('')
        } else {
            setButton('hide')
            setText('Visible')
        }
    }
    return (
        <div>
            <button onClick={hideShow}>{button}</button>
            <h2>{text}</h2>
        </div>
    )
}

export default PB_420
