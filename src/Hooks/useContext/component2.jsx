import React, { useContext } from 'react'
import Component3 from './component3'
import { UseContext } from './CreateContext'

const Component2 = () => {
    // console.log(sendData)
    const {data,text}=useContext(UseContext);
    const {name,id}=data;
  return (
    <div>
        <p>{id}</p>
        <p>{name}</p>
        {/* <article>{text}</article> */}
    </div>
  )
}

export default Component2
