// Write a reactJS program to perform the tasks as asked below.
// 1) Create one main file (parent file)Main.js and other 2 component files
// Comp1.js, Comp2.js. Pass username from Main.js file to Comp2.js file.
// Display this user name in browser in Blue color. (useContext)

import {createContext} from 'react'
import Comp1 from './Comp1'
const Name = createContext()
function Lol() {
    return (
        <>
            <Name.Provider value='Hetansh'>
                <Comp1/>
            </Name.Provider>
        </>
    )
}

export default Lol
export {Name}
