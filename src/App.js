import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome'
import Hello from './Components/Hello'
import Message from './Components/Message'
import Counter from './Components/Counter'
import FunctionClick from './Components/FuctionClick'
import ClassClick from './Components/ClassClick'
import EventBind from './Components/EventBind';
import ParentComponent from './Components/ParentComponent'
import UserGreeting from './Components/UserGreeting'
    
// const heading = {
//     color: '#16ad28',
//     fontSize: '25px',
//     fontFamily: 'Arial',
//     backgroundColor: '#0bc8cf',
//     textAlign: 'Center',
//     display:'inline-block',
//   }; 

// const secondHeading ={
//   color:'#f95d27',
//   backgroundColor :'#030100',
//   fontFamily: 'cursive',
//   textAlign:'Center',
//   display:'inline-block',
// }
class App extends Component{
  render(){ 
    return (
      <div className ="App" >

        <UserGreeting/>

        {/* <ParentComponent/> */}
       
        {/* <FunctionClick/>
        <ClassClick/>
        <EventBind/> */}
    {/* <Counter/>
    <Message/> 
    <Greet style={{color: '#16ad28',fontSize: '25px',fontFamily: 'Arial',backgroundColor: '#0bc8cf',textAlign: 'Center',display:'inline-block',}} name="Bruce" heroName="Batman" > 
      <p> this is childeren props</p>
     </Greet>
     <Greet style={{color:'#f95d27',backgroundColor :'#030100',fontFamily: 'cursive',textAlign:'Center',display:'inline-block',}} name="Pratik" heroName="Superman" /> 
     <Greet name="Diana" heroName="Wonder Women"/>  */}

    {/* <div>
      <h1 style = {{textAlign:'center',fontSize:'50px' , fontFamily:'cursive', display: 'inline-block',backgroundColor:'#3eee53ff'}}> Shorat Innovation PVT LTD </h1><br/>
      <p style= {{textAlign:'center',fontSize:'50px' , fontFamily:'cursive',padding:'10px', display: 'inline-block',backgroundColor:'#31cdfdff'}} > Hello EveryOne!!!</p><br/>
      <h4 style={{ fontSize:'50',fontFamily: 'Georgia, serif',display:'inline-block'}}> Select Your Course: </h4>
    </div>
      
      <label> 
        <input type='checkbox' name='Python' value='Subject'/>
        Pthon
      </label> <br/>
      <label> 
        <input type='checkbox' name='Java' value='Subject'/>
        Java
      </label><br></br>
      <label> 
        <input type='checkbox' name='DataScience' value='Subject'/>
        DataScience
      </label> */}

    </div> 
  );
}
}
export default App;