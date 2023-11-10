import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import { BooksData } from './data';

function Vologs() {
    const info=useParams();
    const [bodyData,setBodyData]=useState("");
    useEffect(()=>{
       const itemData= BooksData.filter((item)=>item.titel===title)        
       setBodyData(itemData[0].body);
    },[])

    const {title}=info;
  return (
    <div>
        <h1>{title} page</h1>
        <p>{bodyData.slice(0,100)}</p>
        <p>{bodyData.slice(101,800)}</p>
    </div>
  )
}

export default Vologs
