// Create a React functional component named UserCard that receives two props:
// username and email. The component should display the username and email.
// Additionally, add a button "Send Message" to the component. When the button
// is clicked, an onClick event should be triggered and an alert should be
// displayed with the message "Message sent to [username]!".

import React from 'react'

function PB_377(props) {
    function handleclick(name){
        alert('Message sent to ' + name);
    }
    return (
        <div>
            <h1>Name : {props.data.username}</h1>
            <h1>Email : {props.data.email}</h1>
            <button onClick={() => {handleclick(props.data.username)}}>Click here</button>
        </div>
    )
}

export default PB_377
