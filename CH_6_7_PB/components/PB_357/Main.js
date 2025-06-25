// e react app to perform tasks as asked.
//  First create files as asked below in routing folder
// 1. Home.js - for the home page content
// 2. Shop.js - for the shop page content
// 3. Contact.js - for the contact page content
// 4. Nopage.js - for the page other than mentioned links
// Create Main.js file which contains Links for Home, Shop and Product page.
// Also, add functionality of page routing.
// Finally call Main.js in App.js.

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Shop from './Shop';
import Contact from './Contact';
import Nopage from './Nopage';


import React from 'react'

function Main() {
    return (
        <div>
            <Router>
                <div> 
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/Shop'>Shop</Link></li>
                        <li><Link to='/Contact'>Contact</Link></li>
                        <li><Link to='/Nopage'>Nopage</Link></li>
                    </ul>
                </div>

                <Routes>
                    <Route path='/' element={<Home/>}></Route>
                    <Route path='/Shop' element={<Shop/>}></Route>
                    <Route path='/Contact' element={<Contact/>}></Route>
                    <Route path='*' element={<Nopage/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Main
