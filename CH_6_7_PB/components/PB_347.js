// Create an ReactJS app which shows the how to pass and read data using props

import React from 'react'

function PB_347(props) {
    return (
        <>
            {
                props.data.map((value)=>{
                    return <h1>Name : {value.name} <br></br> Surname : {value.surname}</h1>
                })
            }
        </>
    )
}

export default PB_347
