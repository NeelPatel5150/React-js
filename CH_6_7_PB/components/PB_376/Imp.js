// Create react app and use routing functionality of react to perform the tasks as
// asked. Create one file named navbar.js which contains links for Home, Profile
// and Dashboard page. In Home file add one image and heading(h1) "LJ
// University" In profile file displays a heading (h1) "Profile" and a list of details
// (e.g., Name, Email, Address).in Dashboard file display details of projects (i.e
// project name, backend,frontend,database)

import React, { Profiler } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import img from './lju.png'
import Home from './Home'
import Profile from './Profile'
import Dashboard from './Dashboard'

function Imp() {
    const details = {name:'Online Voting System', backend:'Django', frontend:'MERN Stack', database:'MongoDB'}
    return (
        <div>
            <Router>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/Profile'>Profile</Link></li>
                    <li><Link to='/Dashboard'>Dashboard</Link></li>
                </ul>

                <Routes>
                    <Route path='/' element={<Home source={img}/>}></Route>
                    <Route path='/Profile' element={<Profile name='Hetansh' email='abc@xyz.gmail.com' address='Opp.ttec'/>}></Route>
                    <Route path='/Dashboard' element={<Dashboard project={details}/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default Imp
