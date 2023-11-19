import React, { memo } from 'react'

function Massage({numofMass}) {
    console.log("this also render");
  return (
    <div>
      <p>send {numofMass} Massage</p>
    </div>
  )
}

export default memo(Massage);
