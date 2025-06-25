import React from 'react'

function Profile(props) {
  return (
    <div>
      <h1>Profile</h1>
      <ul>
        <li>Name : {props.name}</li>
        <li>Email : {props.email}</li>
        <li>Address : {props.address}</li>
      </ul>
    </div>
  )
}

export default Profile
