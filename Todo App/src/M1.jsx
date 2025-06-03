import React from 'react'

const M1 = () => {

  const people=[{name:"neel",age:31},{
    name:"Kavish",age:55
  },{name:"Ishan",age:36},{name:"Hetansh",age:69},{name:"Devam",age:34}]
  return (
    <ul>{
  people.map((person)=>{
    if(person.age>50)
    {
      return (
        <li>
          {person.name}
        </li>
      )
    }
  }

  )   
}       
    
</ul>
  )
}

export default M1
