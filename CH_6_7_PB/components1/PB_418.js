// Write a program to build React app having 2 input text fields (First name and
// last name) and display the entered value on the same page

import {useState} from 'react'

function PB_418() {
    const[data, setData] = useState({})
    function handlechange(e){
        const {name, value} = e.target
        setData({...data, [name]:value})
    }
    return(
        <div>
            Firstname : <input type='text' name='fname' onChange={handlechange}></input><br/>
            Lastname : <input type='text' name='lname' onChange={handlechange}></input><br/>
            <h3>Firstname : {data.fname}</h3>
            <h3>Firstname : {data.lname}</h3>
        </div>
    )
}

export default PB_418
