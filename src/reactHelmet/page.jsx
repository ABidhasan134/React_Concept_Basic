import React from 'react'
import { Helmet } from 'react-helmet'

function Page({titel}) {
  return (
    <div>
      <Helmet>
        <title>{titel}</title>
      </Helmet>
    </div>
  )
}

export default Page
