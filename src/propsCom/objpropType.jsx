import React from 'react'
import Proptype from'prop-types';

const ObjpropType = (props) => {
    // const[name,id,age]=props.userInfo;
    console.log(props.userInfo.id);
    // const [name,id]=props.userInfo
  return (
    <div>
      <h1>{props.userInfo.name}</h1>
    </div>
  )
};
ObjpropType.prototype={
    userInfo: Proptype.shape({
        id: Proptype.number,
        name: Proptype.string,
        age:Proptype.number,
    })
}
export default ObjpropType
