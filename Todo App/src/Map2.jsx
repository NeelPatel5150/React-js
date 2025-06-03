import React from 'react'

const Map2 = () => {
  const arr=[1,2,3,4,5];

  function handleSubmit(e){
    e.preventDefault();
    alert(document.getElementById("uname").value)
  }

  function handleClick(){
    document.getElementById('test1').innerHTML="You Clicked Once";
  }

  function handledoubleclick(){
     document.getElementById('test1').innerHTML="You Clicked Twice";
  }

  function handleChange(event){
    document.getElementById('test1').innerHTML=event.target.value;
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" id="uname" onChange={handleChange} />
        <input type="submit" value="Submit" />
      </form>
      <h1 id='test'>On Change Event</h1>

      <button style={{backgroundColor:'black',padding:'20px',color:'white'}} onClick={handleClick} onDoubleClick={handledoubleclick}>Click</button>

      <h1 id='test1'>Click/Double Click Event</h1>
    </div>
  )
}

export default Map2
