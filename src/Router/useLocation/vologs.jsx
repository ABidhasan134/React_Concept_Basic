import React, { useEffect, useState } from 'react'

import { useLocation, useParams } from 'react-router-dom'
import { BooksData } from './data';

function Vologs() {
    const info=useParams();
    const {title}=info;
    // const [bodyData,setBodyData]=useState("");
    
    // console.log(location);
    // useEffect(()=>{
    //    const itemData= BooksData.filter((item)=>item.titel===title)        
    //    setBodyData(itemData[0].body);
    // },[])

    
  return (
    <div>
        <h1>{title} page</h1>
        <p>{location.state.body.slice(0,100)}</p>
        <p>{location.state.body.slice(101,800)}</p>
    </div>
  )
}

export default Vologs
