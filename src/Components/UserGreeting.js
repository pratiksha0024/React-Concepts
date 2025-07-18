import React, {Component} from 'react'

class UserGreeting extends Component{
    constructor(props){
        super(props)
        this.state={
            isLoggedIn:true
        }
    }

    render(){

        // return this.state.isLoggedIn && <div> Thank you pratiksha for LoggedIn</div>
        
    //     return this.state.isLoggedIn ? (
    //     <div> thank you </div> 
    // ): (
    //         <div> plz Log In </div>
    // )

        // let message
        // if (this.state.isLoggedIn){
        //     message = <dive> Thank you for log in</dive>
        // }else{
        //     message=<div> you are not logged in</div>
        // }

        // return <div> {message}</div>

           if (this.state.isLoggedIn){
            return <div> Hello Pratiksha</div>
           }else {}
            return <div> Welcome Guest</div>
        }
    

}
export default UserGreeting;