import React from 'react'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Home from './home'
import Books from './Books'
import About from './About'
import Error from './error'
import BarCreat from './barcreat'
import Vologs from './vologs'

function Main2() {
  return (
    
       
        <BrowserRouter>
        <BarCreat/>
        <Routes>
            <Route path='/home' element={<Home/>}></Route>
            <Route path='/books' element={<Books/>}></Route>
            <Route path='/books/:title' element={<Vologs/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='*' element={<Error/>}></Route>
        </Routes>
        </BrowserRouter>
   
  
  )
}

export default Main2;
