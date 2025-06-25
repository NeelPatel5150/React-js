import React from 'react'
import {useContext} from 'react'
import {Alldata} from './File'
function File2() {
    const data = useContext(Alldata)
    function display(){
        alert(JSON.stringify(data))
    }
    return (
        <button onClick={display}>Display</button>
    ) 
}

export default File2
