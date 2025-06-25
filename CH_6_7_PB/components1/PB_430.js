// Create React Js app to perform the tasks as asked below.
// -Add buttons "increment" and "decrement"
// -By clicking on increment button the value should be incremented by 1 and by
// clicking on decrement button value should be decremented by 1.
// -Use useReducer hook to perform the above tasks.
import { useReducer } from "react";

const initialState = 0
function reducer(state, action) {
    if(action.type=='increment'){
        return state + 1
    }
    if(action.type=='decrement'){
        return state - 1
    }
}

function PB_430() {
    const [state, dispatch] = useReducer(reducer, initialState)
    function increment(){
        dispatch({type:'increment'})
    }
    function decrement(){
        dispatch({type:'decrement'})
    }
    return (
        <>
            <h2>You clicked {state} times</h2>
            <button onClick={increment}>Increment</button><br></br>
            <button onClick={decrement}>Decrement</button><br></br>
        </>
    )
}

export default PB_430
