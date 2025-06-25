// 7 Create a React Form for select any of pizza size using radio button

import {useState} from 'react'

function PB_429() {
    const [size, setSize] = useState('')
    function handlechange(event) {
        setSize(event.target.value)
    }
    function handleSubmit(event) {
        event.preventDefault()
        if (size) {
            alert(`You have selected ${size} pizza size`)
        } else {
            alert('Please select a pizza size')
        }
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3>Select Size : </h3>
                Small <input type='radio' name='size' value='small' onChange={handlechange}/><br></br>
                Medium <input type='radio' name='size' value='medium' onChange={handlechange}/><br></br>
                Large <input type='radio' name='size' value='large' onChange={handlechange}/><br></br>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default PB_429
