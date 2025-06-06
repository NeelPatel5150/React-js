import React,{useState,createContext} from 'react'
import Comp from './Comp'
const Num1 = createContext()
const Num2 = createContext()

const Main3 = () => {
  const[num1,setNum1] = useState(" ")
  const[num2,setNum2] = useState(" ")
  return (
    <center>
      <Num1.Provider value={num1}>

        <Num2.Provider value={num2}>
          <Comp/>
        </Num2.Provider>
      </Num1.Provider>

      Number 1: <input type="number" value={num1} onChange={(e)=>setNum1(e.target.value)}/><br/>
      Number 2: <input type="number" value={num2} onChange={(e)=>setNum2(e.target.value)}/><br/>
    </center>
  )
}
export default Main3
export {Num1,Num2} // Exporting the context so it can be used in other components
