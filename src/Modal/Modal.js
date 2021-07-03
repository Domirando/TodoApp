import React from 'react';
import './Modal.css'

export default class Modal extends React.Component{
  state = {
    isOpen: false
  }
  render(){
    return(
      <React.Fragment>
        <button onClick={() => this.setState({isOpen: true})}>Open modal</button>

        {this.state.isOpen && (
        <div className="modal">
          <div className="modal-body">
            <h1>Modal window</h1>
            <p>lorem ipsum</p>
            <button onClick={() => this.setState({isOpen: false})}>Close modal</button>
          </div>
        </div>)
        }
      </React.Fragment>
    )
  }
}
