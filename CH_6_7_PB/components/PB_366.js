// Create react app using function component to pass background color(green),
// font size(50px) font style(italic),text transform(uppercase) as properties to
// Example .js component and apply css to “This is an React Application” text
// written in h1 tag in Example2.js component.

import React from 'react'

function PB_366(props) {
    return (
        <div>
            <h1 style={props.css}>This is an react application</h1>
        </div>
    )
}

export default PB_366
