import React from 'react'
import { useParams } from 'react-router-dom'

function RouteParamiter() {
    const {userid}=useParams();
  return (
    <div>
      user
      <h3>{userid}</h3>
    </div>
  )
}

export default RouteParamiter
