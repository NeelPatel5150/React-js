import React,{useContext} from 'react'
import {Num1,Num2} from './Main3'

const Comp2 = () => {
  const number1 = useContext(Num1)
  const number2 = useContext(Num2)
  return (
    <div>
       <h2 style={{ color: "orange", textAlign: "center", marginTop: "30px" }}>
      {number1} and {number2} are same
    </h2>
    </div>
  )
}

export default Comp2
