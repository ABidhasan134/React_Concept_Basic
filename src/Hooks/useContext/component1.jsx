import React, { useState } from 'react'
import Component2 from './component2'
import { UseContext } from './CreateContext'

const Component1 = () => {
    const [data,setData]=useState({
        name: "Abid hasan",
        id: "017"
    })
    const [text,setText]=useState("This is your result");
    return (
    <UseContext.Provider value={{data,text}}>
      <Component2 />
    </UseContext.Provider>
  )
}

export default Component1
