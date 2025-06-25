import {createContext} from 'react'
import Comp2 from './Comp2'
const Style = createContext()

function Comp1() {
    return (
        <>
            <Style.Provider value={{color:'blue'}}>
                <Comp2/>
            </Style.Provider>
        </>
    )
}

export default Comp1
export {Style}
