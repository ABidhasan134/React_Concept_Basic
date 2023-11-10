import React, { useContext } from 'react'
import Use from './Use';
import { UseContext } from './UseContext';
import '../contexManegment/contex.css'
const Users = () => {
    const {users,setUser}=useContext(UseContext)
    console.log(users);
    return (
      <div className='user'>
        {
          users.map(item=> <Use key={item.id}
          user={item} />)
        }
        {/* <h1>{data.id}</h1> */}
      </div>
    )
}

export default Users
