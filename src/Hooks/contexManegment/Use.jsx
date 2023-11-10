import React, { useContext } from 'react'
import { UseContext } from './UseContext'

const Use = () => {
  const {users,setUser}=useContext(UseContext);
    const {id,name}=users

    // console.log(handelDeletUser);

    const handelDelet=(id)=>{
      const filerUser=users.filter((user)=>user.id!==id);
      setUser(filerUser);
    }
  return (
    <div className='person'>
      <h4>{id}</h4>
      <p>{name}</p>
      <button onClick={()=>{handelDelet(id)}}>Delet</button>
    </div>
  )
}

export default Use
