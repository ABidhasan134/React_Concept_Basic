import React from 'react'
import { Navigate } from 'react-router-dom';

function Protected({islogIn,children}) {
    if(!islogIn)
    {
        return <Navigate to='/' replace/>
    }
    else
    {
        return children;
    }
  return (
    <div>
      
    </div>
  )
}

export default Protected;
