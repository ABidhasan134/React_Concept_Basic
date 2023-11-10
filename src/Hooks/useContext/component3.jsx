import React, { useContext } from 'react'
import { UseContext } from './CreateContext';
const Component3 = () => {
    // console.log(sendData1);
    const {data,text}=useContext(UseContext);
    console.log(data);
  return (
    <div>
      <p>{text}</p>
    </div>
  )
}

export default Component3;
