import React from 'react'
import { useContext } from 'react'
import {Name} from './Lol'
import {Style} from './Comp1'
function Comp2() {
    const Name1 = useContext(Name)
    const Css = useContext(Style)
    return (
        <>
            <h1 style={Css}>{Name1}</h1>
        </>
    )
}

export default Comp2
