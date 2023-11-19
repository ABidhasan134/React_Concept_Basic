import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

function CreatJsonandFatch() {
    const [user,setUser]=useState([]);
    const findUser= async()=>{
        const respons= await axios.get("http://localhost:3001/user");
        console.log(respons.user);
        // console.log("clicked");
        setUser(respons.user);
    }
    useEffect(()=>{
        findUser();
    },[])
  return (
    <div>
      {user.map((user)=>{
        return <article><p>{user.name}</p>
        <p>{user.id}</p>
        </article>
      })}
    </div>
  )
}

export default CreatJsonandFatch;
