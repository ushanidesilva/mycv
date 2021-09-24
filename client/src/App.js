import React, { Component } from 'react';


import './App.css';
import UserForm from './components/UserForm';

import resume from './img/resume.png'

class App extends Component {

  
  
  render() {
    return (
      <div styles={{ backgroundImage:`url(${resume})` }} >
        <div className="col-lg-8 mx-auto text-center mt-5">
        <img src={resume} width="100" height="100" />
          <h1 style={{color: "red"}}><b>Create Your Resume Here</b></h1>
          <p className="lead">Add your Details Here</p>
          <hr />
        </div>  
        <UserForm/>
      </div>  
    );
  }
}

export default App;
