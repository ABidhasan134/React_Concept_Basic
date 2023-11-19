import React, { useState } from 'react'
import Massage from './massage';

function MainMemo() {
    const [count,setcount]=useState(0);
    console.log("home render");
    const handelCount=()=>{
      setcount((count)=>count+1);
    }
  return (
    <div>
      <p>count:{count}</p>
      <button onClick={handelCount}>increment</button>
      <Massage numofMass={count}/>
    </div>
  )
}

export default MainMemo;
