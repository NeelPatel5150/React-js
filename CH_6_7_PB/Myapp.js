import React from 'react'
import PB_346 from './components/PB_346'
import PB_347 from './components/PB_347'
import PB_349 from './components/PB_349'
import PB_350 from './components/PB_350'
import PB_351 from './components/PB_351'
import PB_352 from './components/PB_352'
import PB_353 from './components/PB_353'
import PB_354 from './components/PB_354'
import PB_355 from './components/PB_355'
import PB_356 from './components/PB_356'
import Main from './components/PB_357/Main'
import PB_358 from './components/PB_358'
import PB_360 from './components/PB_360'
import PB_361 from './components/PB_361'
import PB_362 from './components/PB_362'
import PB_366 from './components/PB_366'

import img1 from './mango.jfif'
import img2 from './banana.jfif'
import img3 from './orange.jfif'
import PB_369 from './components/PB_369'
import PB_370 from './components/PB_370'
import PB_374 from './components/PB_374'
import Imp from './components/PB_376/Imp'
import PB_377 from './components/PB_377'
import PB_414 from './components1/PB_414'
import PB_415 from './components1/PB_415'
import PB_416 from './components1/PB_416'
import PB_417 from './components1/PB_417'
import PB_418 from './components1/PB_418'
import PB_419 from './components1/PB_419'
import PB_420 from './components1/PB_420'
import PB_421 from './components1/PB_421'
import PB_423 from './components1/PB_423'
import Comp from './components1/PB_425/Comp'
import Lol from './components1/PB_426/Lol'
import PB_427 from './components1/PB_427'
import PB_430 from './components1/PB_430'
import PB_429 from './components1/PB_429'
import PB_431 from './components1/PB_431'
import PB_432 from './components1/PB_432'
import PB_434 from './components1/PB_434'
import PB_436 from './components1/PB_436'
import PB_439 from './components1/PB_439'
import File from './components1/PB_440/File'
function Myapp() {
    const data1 = [{name:'Luffy', surname:'Monkey'}, {name:'Roronoa', surname:'Zoro'}]
    const students = [{name:'John', rollnumber:'32', t1:'98', t2:'90'}, {name:'Rahul', rollnumber:'33', t1:'95', t2:'87'}]
    const Style = {color:'red', backgroundColor : 'yellow', fontSize : 25, fontStyle : 'italic'}
    const people = [{name:'abc', age:47}, {name:'def', age:67}, {name:'ghi', age:27}, {name:'jkl', age:37}, {name:'mno', age:13}, {name:'pqr', age:23}]
    const css = {backgroundColor:'green', fontSize:50, fontStyle:'italic', textTransform:'uppercase'}

    const products = [
        {title:'mango', price:80, description:'it is good for taste', img:{img1}},
        {title:'banana', price:20, description:'it is good for calcium', img:{img2}},
        {title:'orange', price:50, description:'it is good for fibers', img:{img3}},
    ]


    return (
        <div>
            <File/>
        </div>
    )
}

export default Myapp
