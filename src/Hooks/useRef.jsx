import React, { useRef } from 'react'

const UseRef = () => {
    const useRefName=useRef();
    const useRefPassword=useRef();

    const handelSubmit=()=>{
        console.log("clicked")
        console.log(useRefName.current.value);
        console.log(useRefPassword.current.value);
    }
  return (
    <from type="submit" >
        <div>
          <label htmlFor="userName">Name</label>
          <input type="text" id='userName'
          ref={useRefName}/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input  type="password" id='password'
          ref={useRefPassword} />
        </div>
        <button onClick={handelSubmit} type='submit'>Register</button>
      </from>
  )
}

export default UseRef
