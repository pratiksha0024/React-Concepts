import React, {Component} from 'react'

class EventBind extends Component
{

    constructor(props){
        super(props)

        this.state={
            message:'Hello!!!'
        }
        this.clickHandler =this.clickHandler.bind(this)
    }
    // clickHandler(){
    //     this.setState({
    //         message:'GoodBye!!!'
    //     })
    //     console.log(this);
        
    // }

    clickHandler = () => {
        this.setState({
            message:'GoodBye!!!!!'
        })
    }

    render(){
        return(
            <div> 
                <div> {this.state.message} </div>
                {/* <button onClick ={this.clickHandler.bind(this)}>  */}
                {/* <button onClick ={() => this.clickHandler()}>  */}
                <button onClick ={this.clickHandler}> 
                    Click Here
                </button>
            </div>
        )
    }
}

export default EventBind 
