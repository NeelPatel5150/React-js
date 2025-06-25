// Create a React function component named File1 that receives two props,
// productName and price. The component should display the product name and
// price. Additionally, add a button labeled "Add to cart" to the component. When
// the button is clicked onClick event triggered and an alert should be displayed
// with the message "Your Product is Added to cart!". 

import React from 'react'

function PB_374(prop1) {
    function handleclick(){
        alert("Your Product is Added to cart!");
    }

    return (
        <div>
            <h2>{prop1.name}</h2>
            <h2>{prop1.price}</h2>
            <button onClick={handleclick}>Add to cart</button>
        </div>
    )
}

export default PB_374
