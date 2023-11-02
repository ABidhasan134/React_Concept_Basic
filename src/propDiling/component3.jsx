import React from 'react'

const Component3 = ({sendData}) => {
    // console.log(sendData1);
    // const [name,id]=sendData
  return (
    <div>
      <h4>{sendData.name}</h4>
      <p>{sendData.id}</p>
    </div>
  )
}

export default Component3;
