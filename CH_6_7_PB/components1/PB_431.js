// Create React Js app to perform the tasks as asked below.
// -Add button "Click"
// -By clicking on button the value should be incremented by 5. Initial value is 20.
// -Use useReducer hook to perform the above tasks.

import {useReducer} from 'react';
const initialState = 20
function reducer(state, action){
    if(action.type=='increment'){
        return state + 5;
    }
}

function PB_431() {
    const [state, dispatch] = useReducer(reducer, initialState)
    function handleclick(){
        dispatch({type: 'increment'})
    }
    return (
        <>
            <p>{state}</p>
            <button onClick={handleclick}>Click</button>
        </>
    )
}

export default PB_431
