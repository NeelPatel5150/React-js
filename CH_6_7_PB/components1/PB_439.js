import { useState, useEffect } from 'react';

// function PB_439() {
//     const [num, setNum] = useState({})
//     function handlechange(e){
//         setNum({...num, [e.target.name]: e.target.value})
//     }

    
//     function calculate(){
//         const num1 = parseInt(num.num1)
//         const num2 = parseInt(num.num2)
//         const opr = num.opr
    
//         if(opr === 'add'){
//             alert(`The sum of ${num1} and ${num2} is ${parseInt(num1+num2)}`)
//         }
//         else if(opr === 'sub'){
//             alert(`The difference of ${num1} and ${num2} is ${parseInt(num1-num2)}`)
//         }
//         else if(opr === 'mul'){
//             alert(`The product of ${num1} and ${num2} is ${parseInt(num1*num2)}`)
//         }
//         else if(opr === 'div'){
//             alert(`The quoficient of ${num1} and ${num2} is ${parseInt(num1/num2)}`)
//         }

//     }
//     return (
//         <div>
//             Num1 : <input type='number' name='num1' onChange={handlechange}></input><br/>
//             Num2 : <input type='number' name='num2' onChange={handlechange}></input><br/>
//             <select name='opr' onChange={handlechange}>
//                 <option hidden disabled selected>---Select Operation---</option>
//                 <option value='add'>add</option>
//                 <option value='sub'>sub</option>
//                 <option value='mul'>mul</option>
//                 <option value='div'>div</option>
//             </select>
//             <button onClick={calculate}>calculate</button>
//         </div>
//     )
// }

// Create a ReactJS program using function component having two input fields
// for num1 and num2 and two buttons for addition and subtraction of the two
// numbers. Display the respective outputs on same page using useState hook.
// Also display alert box as an effect on every time the addition button is clicked
// using useEffect hook

function PB_439() {
    const [sum, setSum] = useState(0)
    const [diff, setDiff] = useState(0)
    useEffect(()=>{
        alert('Clicked ADD')
    }, [sum])
    useEffect(()=>{
        alert('Default')
    })

    function Sum(){
        var num1 = document.getElementById('num1').value
        var num2 = document.getElementById('num2').value
        setSum(parseInt(num1) + parseInt(num2))
    }
    function Diff(){
        var num1 = document.getElementById('num1').value
        var num2 = document.getElementById('num2').value
        setDiff(parseInt(num1) - parseInt(num2))
    }
    return (
        <div>
            Num1 : <input type='number' id='num1'/><br></br>
            Num2 : <input type='number' id='num2'/><br></br>
            <button onClick={Sum}>Add {sum}</button>
            <button onClick={Diff}>Sub {diff}</button>
        </div>
    )
}


export default PB_439
