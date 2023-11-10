import React, { useState } from 'react'
import { BooksData } from './data'
import './style.css';
import { Link } from 'react-router-dom';
function Books() {
  const [Book,setBook]=useState(BooksData)
  console.log(Book);
  const truncatString=(str,num)=>{
    if(str.length>num){
      return str.slice(0,num)+"...";
    }
    else
    {
     return str;
    }

  }
  
  return (
    <div>
      <h1>Book List</h1>
      <section>
      {
    Book.map((item)=>{
      const {id,titel,body}=item;
      return(
        <div key={id} className='articel'> 
        <h3 >{titel}</h3>
          <p >{truncatString(body,50)}</p>
          <Link to={titel}>Learn more</Link>
        </div >
      ) 

    })
   }
      </section>

    </div>
  )
}

export default Books
