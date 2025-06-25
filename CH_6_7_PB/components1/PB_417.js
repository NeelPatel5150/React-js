// Write a program to build React app having a button which changes image by
// clicking it. (Add two images)

import { useState } from 'react'

import img1 from '../boy.jpg'
import img2 from '../girl.png'

function PB_417() {
    const [img, setImg] = useState(img1)
    function changeImage() {
        if (img === img1) {
            setImg(img2)
        } else {
            setImg(img1)
        }
    }
    return (
        <div>
            <img src={img} height={600} width={1000}></img>
            <button onClick={changeImage}>Change Image</button>
        </div>
    )
}

export default PB_417
