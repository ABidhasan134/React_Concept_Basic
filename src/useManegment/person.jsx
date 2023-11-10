import React from 'react'
import '../App.css';
const Person = ({user,handelDeletUser}) => {
    const {name,id}=user
    // console.log(handelDeletUser);

    const handelDelet=(id)=>{
      handelDeletUser(id);

    }
  return (
    <div className='person'>
      <h4>{id}</h4>
      <p>{name}</p>
      <button onClick={()=>{handelDelet(id)}}>Delet</button>
    </div>
  )
}

export default Person
