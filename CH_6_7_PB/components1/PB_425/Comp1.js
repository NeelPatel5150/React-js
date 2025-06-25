import {createContext, useContext} from 'react';
import Comp2 from './Comp2';

const Css = createContext()

function Comp1() {
    return (
        <>
            <Css.Provider value={{backgroundColor: 'red', color: 'white'}}>
                <Comp2/>
            </Css.Provider>
        </>
    )
}

export default Comp1
export {Css}
