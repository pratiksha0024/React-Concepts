import React from 'react'
import './myStyle.css'
function Stylesheet(props){
   let className=props.primary ?'primary' : ''
    return(
        <div>
            <h1 className={ `${className} font` }> Hey I have one secrete</h1>
        </div>
    )
}
export default Stylesheet