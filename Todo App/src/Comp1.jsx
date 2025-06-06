import React,{useContext} from 'react'
import {Num1,Num2} from './Main3'
import Comp2 from './Comp2'

const Comp1 = () => {
  const number1 = useContext(Num1)
  const number2 = useContext(Num2)
  if(number2>number1){
  return (
    <div>
      <h1>
        <span style={{ color: "red" }}>{Num1}</span> is Lower than{" "}
        <span style={{ color: "green" }}>{Num2}</span>
      </h1>
    </div>
  )}

  if(number2<number1){
    return (
      <div>
        <h1>
          <span style={{ color: "green" }}>{Num1}</span> is Greater than{" "}
          <span style={{ color: "red" }}>{Num2}</span>
        </h1>
      </div>
    )
  }
  return(
    <Comp2></Comp2>
  )
}

export default Comp1
