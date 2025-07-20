// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

// import './Components/appStyles.css'
// import style from './Components/appStyles.module.css'
import Form from './Components/Form';

class App extends Component{
  render(){ 
    return (
      <div className ="App" >

        <Form/>
          {/* <h1 className='error'> error </h1>
          <h1 className={style.success}> Success </h1> */}
    </div> 
  );
}
}
export default App;