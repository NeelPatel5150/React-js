// Create React app to pass color(red), background color(yellow), font size(25px)
// and font style(italic) as properties to component and apply css to "Lj Students"
// text written in p tag. use Props

import React from 'react'

function PB_361(props) {
        return (
            <div>
                <p style={props.style}>LJ Students</p>
            </div>
        )
    }

export default PB_361
