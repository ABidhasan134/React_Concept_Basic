import React, { useState } from 'react'
import ObjpropType from './objpropType'
// import Propstest from './propsVarType'


const Propsfind = () => {
    // const name="Abid hasan ";
    // const id=1001;
    const[user,setUser]=useState({
        name:"Abid hasan",
        id: "202221063017",
        age: 24,
    })
  return (
    <div>
        {/* <Propstest name={name} key={id}/> */}
        <ObjpropType userInfo={user}/>
    </div>
  )
}

export default Propsfind
