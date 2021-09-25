import React, { Component } from 'react'

export default class Success extends Component {
    
   
  
    render() {

    
    return (
      <div className="card animated bounceIn">
        <div className="card-body text-center pt-5 pb-5">
            <i className="fas fa-check-circle fa-7x text-success"></i>
            <h2>Congradulations!</h2>
            <h4>You have successfully created your Resume</h4>
            <br/>
            <h4>Your Resume will be Download shortly!</h4>
            
        </div>  
        
      </div>
    )
  }
}
