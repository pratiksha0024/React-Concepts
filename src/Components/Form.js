import React, {Component} from 'react'
import './Form.css'
class Form extends Component{
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            course:'',
            submit:''
            
        };
    }

    handleUsernameChange = (event) => {
        this.setState ({
            username: event.target.value
        });
    };
    handlePasswordChange = (event) => {
        this.setState ({
            password: event.target.value
        });
    };
      handleCourseChange = (event) => {
        this.setState ({
            course: event.target.value
        });
    };
    handleSubmit= (event)=>{
        alert (`${this.state.username} ${this.state.password} ${this.state.course}`)
        event.preventDefault() 
    };
   

    render(){
        return(
            <div className='form-con'>
            <div className='div1'> 
                <form onSubmit={this.handleSubmit}>
                    <h1> Registration Form</h1>
                    <div> 
                        <label> UserName</label>
                        <input type='text' value={this.state.username} onChange={this.handleUsernameChange}/>
                    </div>
                    <div> 
                        <label> Password</label>
                        <input type='text' value={this.state.password} onChange={this.handlePasswordChange}/>
                    </div>
                    <div> 
                        <label>Course</label>
                        <select value={this.state.course} onChange={this.handleCourseChange}> 
                            <option  value= "React">React </option>
                            <option  value= "Cpp">Cpp </option>
                            <option  value= "Java">Java </option>
                        </select>

                    </div>
                    <div> 
                        <button type='submit'> Submit</button>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export default Form