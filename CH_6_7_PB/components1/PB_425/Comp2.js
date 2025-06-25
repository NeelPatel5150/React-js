import { createContext } from "react";
import Comp3 from './Comp3'

const Text = createContext()
function Comp2() {
    return (
        <>
            <Text.Provider value='Multiplication'>
                <Comp3/>
            </Text.Provider>
        </>
    )
}

export default Comp2
export {Text}
