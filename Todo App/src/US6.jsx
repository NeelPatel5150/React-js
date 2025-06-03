import React,{useState} from 'react'

const US6 = () => {
  const[butonText, setButtonText] = useState("Show");
  const[show, setShow] = useState("");

  function handleChnage(){
    if(butonText === "Show"){
      setButtonText("Hide");
      setShow("Hello Jee Kaise Ho...");
    }else{
      setButtonText("Show");
      setShow("");
    }
  }
  return (
    <div>
      <button onClick={handleChnage}>{butonText}</button>
      <br /><br />
      <h1>{show}</h1>
    </div>
  )
}

export default US6
