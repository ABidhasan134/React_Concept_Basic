import React,{useState} from 'react'
import { UseContext } from './UseContext'

const NewUser = () => {
    const [userName,setUserName]=useState("")
    const {user,setUser}=useState(UseContext);
    const handelChange=(e)=>{
        setUserName(e.target.value);
        // console.log(userName);
        
    }
    const handelSubmit=(event)=>{
        event.preventDefault();
        const newUser={id: new Date().getTime().toString(),
        name: userName}
        
        setUserName("");


    }
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name='userName'
        value={userName} onChange={handelChange}/>
        <button type='submit'>Add user</button>
      </form>
    </div>
  )
}

export default NewUser
