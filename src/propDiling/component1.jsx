import React, { useState } from 'react'
import Component2 from './component2'

const Component1 = () => {
    const [data,setData]=useState({
        name: "Abid hasan",
        id: "017"
    })
  return (
    <div>
      <Component2 sendData={data}/>
    </div>
  )
}

export default Component1
