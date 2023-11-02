import { useEffect, useState } from 'react';
import './App.css';

function ConditionalStyle() {
  const [name,setName]=useState('');
  const [validName,setValidName]=useState(true);
  useEffect(()=>{
    if(name.length<2)
    {
      setValidName(false)
    }
    else if(name.length>6)
    {
      setValidName(false);
    }
    else
    {
      setValidName(true);
    }
    // console.log(name);
  },[name])
  const handelchang=(e)=>{
    setName(e.target.value)
    // console.log(name);
  }
  return (
    <div className="App">
      <input value={name} onChange={handelchang}
      className={`${validName?"green":"red"}`}/>
      
    </div>
  );
}

export default ConditionalStyle;
