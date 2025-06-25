// Create react app and use routing functionality of react to perform the tasks as
// asked.
// Create one file named Main.js which contains links for home and about page
// and routing functionality.
// In Home.js file add one image and heading(h1) "LJ University"
// In About.js file add branch list (CSE,IT,CE)

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React from 'react'

function Main() {
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/About'>About</Link></li>
                    <li><Link to='/Nopage'>No page</Link></li>
                </ul>

                <Routes>
                    <Route path='/' element='<Home/>'></Route>
                    <Route path='/About' element='<About/>'></Route>
                    <Route path='*' element='<Nopage/>'></Route>
                </Routes>
            </Router>

        </div>
    )
}

export default Main
