// Write React JS script to display three products. Products having title, product
// image, price and description. All three products should be horizontally adjacent
// to each other. Note: using props show all products and use Functional
// component for complete this script.

import React from 'react'

function PB_369(props) {
    return (
        <div style={{display:'flex',justifyContent:"center", gap:'40px'}}>
            {
                props.product.map((value)=>{
                    return(
                        <div>
                            <h1>{value.title}</h1>
                            <h3>{value.description}</h3>
                            <h3>{value.price}</h3>
                            <img src={value.img} height={100} width={100}/>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default PB_369
