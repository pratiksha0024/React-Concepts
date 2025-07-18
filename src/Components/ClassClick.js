import React,{Component} from 'react'

class ClassClick extends Component{
    
    ClickEvent(){
        console.log('Clicked the Button');
            
    }
        render(){
        return(
            <div> <button onClick = {this.ClickEvent} > Click me </button></div>
        )
    }
}
export default ClassClick 
