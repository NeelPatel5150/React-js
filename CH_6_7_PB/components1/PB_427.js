// Create a Sign-up form using React asking for username, age, email, password,
// and confirm password. When the user clicks on the ‘submit’ button, it will
// display an alert box with a username, age, and email details entered by the
// user

import {useState} from 'react'

function PB_427() {
    const [data, setData] = useState({})

    function handleChange(event){
        setData({...data, [event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        if (data.password === data.confirmpassword){
            alert(`Username: ${data.username}\nAge: ${data.age}\nEmail: ${data.email}`)
        }
        else {
            alert('Password and Confirm Password do not match')
        }
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                Name : <input type='text' name='username' onChange={handleChange} required/><br/>
                Age : <input type='number' name='age' onChange={handleChange} required/><br/>
                Email : <input type='email' name='email' onChange={handleChange} required/><br/>
                Password : <input type='password' name='password' onChange={handleChange} required/><br/>
                Confirm Password : <input type='password' name='confirmpassword' onChange={handleChange} required/><br/>
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default PB_427
