import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home'
import About from './About'
import AddBlog from './blog'
import Error from './Error'
import NavBar from './navBar'
import Protected from './protected'

function Main() {
  const [islogIn,setislogIn]=useState(false);
  return (
    <BrowserRouter>
    <NavBar/>
    {islogIn?<button 
    onClick={()=>{setislogIn(false)}}>Log out</button>:<button
    onClick={()=>{setislogIn(true)
    console.log("click")}}>Log In</button>}
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        //makeing this page protected
        //islogIn is prop and addblog is children
        <Route path='/addblog' 
        element={<Protected islogIn={islogIn}><AddBlog /></Protected>}></Route>
        <Route path='*' element={<Error/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default Main
