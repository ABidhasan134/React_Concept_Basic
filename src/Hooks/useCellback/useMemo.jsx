import React, { memo, useMemo } from 'react'

function Massage({numofMass,onhandelIncriment}) {
    console.log("this also render");
    let number=0;
   const findNumber=useMemo(()=>{
    for(let index=0;index<=50000000;index++)
    {
      number++;
    }
    return number;
   },[]);
  return (
    <div>
      <h1 >Number:{number}</h1>
      <p>send {numofMass} Massage</p>
      <button onClick={onhandelIncriment}>Incriment Count</button>
    </div>
  )
}

export default memo(Massage);
