// Create react app which to perform following task using function component:
// •	Create one main file name F1.js & other 2 component files F2.js & F3.js.
// •	Main file contains form with following fields:
// o	First Name (Input type text)
// o	Last Name (Input type text)
// o	Message (Textarea)
// o	City (Dropdown)
// o	Gender (Radio Button)
// •	Pass values of all fields from F1.js file to F3.js file. And display all submitted
// values in alert box using useContext & useState hook.
// No need to write App.js file.

import React, { createContext } from 'react'
import { useState } from 'react'
import File1 from './File1'
const Alldata = createContext()
function File() {
    const [data, setData] = useState({})
    function handlechange(e){
        setData({ ...data, [e.target.name]: e.target.value })
    }
    return (
        <>
            <form>
                Firstname : <input type='text' name='firstname' onChange={handlechange}/><br/>
                Lastname : <input type='text' name='lastname' onChange={handlechange}/><br/>
                Message : <textarea name='message' onChange={handlechange}></textarea><br/>
                City : <select name='city' onChange={handlechange}>
                    <option selected hidden disabled>--Select City--</option>
                    <option value='pune1'>Pune1</option>
                    <option value='pune2'>Pune2</option>
                    <option value='pune3'>Pune3</option>
                    <option value='pune4'>Pune4</option>
                </select><br/>
                Gender : 
                Male <input type='radio' name='gender' value='male' onChange={handlechange}/>
                Female <input type='radio' name='gender' value='female' onChange={handlechange}/>
            </form>

            <Alldata.Provider value={data}>
                <File1/>
            </Alldata.Provider>
        </>
    )
}

export default File
export {Alldata}
