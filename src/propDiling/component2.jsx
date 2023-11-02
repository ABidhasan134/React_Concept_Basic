import React from 'react'
import Component3 from './component3'

const Component2 = ({sendData}) => {
    // console.log(sendData)
  return (
    <div>
        <Component3 sendData={sendData}/>
    </div>
  )
}

export default Component2
