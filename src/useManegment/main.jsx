import React, { useState } from 'react'
import Users from './users'
import NewUser from './NewUser'


const Main = () => {
    const[user,setUser]=useState([{
        name:"Abid hasan",
        id: "017",
    },
    {
        name: "Raisul Islam",
        id: "250",
    }]
    )
    const handelDeletUser=(id)=>{
      const filerUser=user.filter((user)=>user.id!==id);
      setUser(filerUser);
    }
    const handelAddUser=(newUser)=>{
      // console.log(newUser);
      setUser((preArray)=>[...preArray,newUser]);

    }
  return (
    <div>
      <NewUser handelAddUser={handelAddUser}/>
      <Users data={user} handelDeletUser={handelDeletUser} />
      
    </div>
  )
}

export default Main
