import React, { useCallback, useState } from 'react'
import Massage from './useMemo';

function Toggol() {
    const [count,setcount]=useState(0);
    const [toggol,setToggel]=useState(false);
    console.log("home render");
    const handelCount=()=>{
      setcount((count)=>count+1);
    }
    //here we use callback hook to remove the unnessery cell 
    // or rendering. It will cell when the dependecy count will be update
   const hendelIncriment=useCallback(()=>{
    setcount(count+1);
  },[count])
  return (
    <div>
      {toggol?"no":"off"}
      <button onClick={()=>{setToggel(!toggol)}}>Toggol</button>
      <p>count:{count}</p>
      <button onClick={handelCount}>increment</button>
      <Massage numofMass={count} onhandelIncriment={hendelIncriment}/>
    </div>
  )
}

export default Toggol;
