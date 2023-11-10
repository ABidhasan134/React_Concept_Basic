import React from 'react'
import Person from './person';

const Users = ({data,handelDeletUser}) => {
    console.log(data);
  return (
    <div className='user'>
      {
        data.map(item=> <Person key={item.id}
        user={item} handelDeletUser={handelDeletUser}/>)
      }
      {/* <h1>{data.id}</h1> */}
    </div>
  )
}

export default Users
