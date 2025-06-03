import React,{useState} from 'react'
import img1 from '../public/vite.svg'
import img2 from '../myapp/public/logo192.png'

const US4 = () => {

  const[photo,setPhoto]=useState(img1);

  function handleImage(){
    if(photo===img1){
      setPhoto(img2);
    }else{
      setPhoto(img1);
    }
  }
  return (
    <div>
      <img src={photo} height="100px" width="100px" />
      <button onClick={handleImage}>Click To Change Photo</button>
    </div>
  )
}

export default US4
