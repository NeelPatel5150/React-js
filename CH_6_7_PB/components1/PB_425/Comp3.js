import React from 'react'
import { useContext } from "react";
import {Num1, Num2} from "./Comp"
import { Css } from "./Comp1";
import { Text } from "./Comp2";
function Comp3() {
    const num1 = useContext(Num1)
    const num2 = useContext(Num2)
    const styles = useContext(Css)
    const content = useContext(Text)
    return (
        <h1 style={styles}>{content}:{num1*num2}</h1>
    )
}

export default Comp3
