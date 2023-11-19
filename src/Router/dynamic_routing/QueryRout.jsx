import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function QueryRout() {
    const [searchPrams,setSearchPrams]=useSearchParams();
    const [name,setName]=useState('');
    const handelSubmit=(e)=>{
        e.preventdefault();
        setSearchPrams({name:name});
        console.log("click");
    };
  return (
    <div>
        <form onSubmit={handelSubmit}>
            <input type="text" value={name}
            onChange={(e)=>{
                setName(e.target.value);
            }}/>
            <button type='submit'>Submit</button>
        </form>
      {/* <h1>{searchPrams.get("id")}</h1>
      <h1>{searchPrams.get("name")}</h1>
      <h1>{searchPrams.get("age")}</h1> */}
    </div>
  )
}
//we can use query search by that and we also can find 
//data from data bases
//http://localhost:3000/user?name=abid&id=2022&age=25
export default QueryRout
