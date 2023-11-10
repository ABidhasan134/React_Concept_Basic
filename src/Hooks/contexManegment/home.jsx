import React,{useState} from 'react'
import NewUser from './NewUser';
import Users from './Users';
import { UseContext } from './UseContext';


const Home = () => {
    const[user,setUser]=useState([{
        name:"Abid hasan",
        id: "017",
    },
    {
        name: "Raisul Islam",
        id: "250",
    }]
    )
    

  return (
  <UseContext.Provider value={{user,setUser}}>
      <div>
      <NewUser />
      <Users />
     </div>
  </UseContext.Provider>
  )
}

export default Home
