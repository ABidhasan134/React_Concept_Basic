import React, { Component, createRef } from 'react'
import '../App.css'

export default class ClassComponentRef extends Component {
  constructor(props){
    super(props)
    this.useNameRef=createRef();
    this.state={
        
    }
  }
  handelSubmit=(event)=>{
    event.preventDefault();
    console.log("clicked");
    console.log(this.useNameRef.current.value);
    this.useNameRef.className='green'
  }
  render() {
    return (
      <from type="submit" >
        <div>
          <label htmlFor="userName">Name</label>
          <input type="text" id='userName' ref={this.useNameRef}/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input  type="password" id='password' />
        </div>
        <button onClick={this.handelSubmit} type='submit'>Register</button>
      </from>
    )
  }
}
