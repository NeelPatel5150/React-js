// Create react app which displays 3 images using map function. 
import img1 from '../mango.jfif'
import img2 from '../banana.jfif'
import img3 from '../orange.jfif'

import React from 'react'

function PB_355() {
    const fruits = [img1, img2, img3]
    return (
        <div>
            {
                fruits.map((fruit, index) =>{
                    return (
                        <>
                            {index} <img src={fruit} height={200} width={325}></img>
                        </>
                    )
                })
            }
        </div>
    )
}

export default PB_355
