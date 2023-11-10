import React, { useState } from 'react'

const NewUser = ({handelAddUser}) => {
    const [userName,setUserName]=useState("")
    const handelChange=(e)=>{
        setUserName(e.target.value);
        // console.log(userName);
        
    }
    const handelSubmit=(event)=>{
        event.preventDefault();
        const newUser={id: new Date().getTime().toString(),
        name: userName}
        handelAddUser(newUser);
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
