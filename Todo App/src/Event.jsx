import React from 'react'

const Event = () => {
  function handleChnage(event) {
    document.getElementById("t1").innerHTML = event.target.value;
    // console.log(event.target.value);
  }
  return (
    <div>
      <h1 id="t1"></h1>
      <input type="text" onChange={handleChnage}/>
    </div>
  )
}

export default Event;
