// Build a survey form with radio buttons, and dropdowns. display selected
// results on the alert box on user responses using React JS Hooks.( App.js file
// not required).

import React, { useState } from 'react';

function PB_436() {
    const [data, setData] = useState({})
    function handlechange(e){
        setData({...data, [e.target.name]:e.target.value})
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(JSON.stringify(data));
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                Select your favorite programming language:
                <select name='lang' onChange={handlechange}>
                    <option selected disabled hidden>--- Select language ---</option>
                    <option value='python'>Python</option>
                    <option value='java'>Java</option>
                    <option value='c'>C</option>
                    <option value='c++'>C++</option>
                </select>
                Select your experience level:
                <input type='radio' name='exp' value='beginner' onChange={handlechange} /> Beginner
                <input type='radio' name='exp' value='Advanced' onChange={handlechange} /> Advanced <br></br>
                <button type='submit'>submit</button>
            </form>
        </div>
    )
}

export default PB_436
