import React,{useState} from 'react'

const US1 = () => {

  const[count,setCount]=useState(0);

  function handleCount(){
    setCount(count+1);
  }
  return (
    <div>
      <h1>You Clicked {count} Times.</h1>

      <button onClick={handleCount}>Click Me</button>
    </div>
  )
}

export default US1
