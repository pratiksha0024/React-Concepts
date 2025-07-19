import React from 'react'
function InlineStyling(){

    const heading={
        fontSize : '20px',
        color : 'red'
    }
    return(
        <div> 
            <h1 style={heading}> Hello EveryOne </h1>
        </div>
    )
}
export default InlineStyling
