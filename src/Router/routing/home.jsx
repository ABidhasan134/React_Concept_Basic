import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './main'
import Articel from './articel'
import Vloge from './bloge'
import Error from './Error'

function Home1() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/home' element={<Main/>}></Route>
        <Route path='/articel' element={<Articel/>}></Route>
        <Route path='/vloge' element={<Vloge/>}></Route>
        <Route path='*'  element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Home1
