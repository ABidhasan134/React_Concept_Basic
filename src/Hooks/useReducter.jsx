import React, { useReducer, useState } from 'react'
import { Reducer } from './reduser'

let BookList=[
    {
        id:1,
        name: "javascript",
    },
    {
        id: 2,
        name: "c++",
    },
    {
        id:3,
        name:"java",
    }
]
const Model=({modelText})=>{
    return <p>{modelText}</p>

}
const UseReducter = () => {
    // const [book,setBook]=useState(BookList);
    // const [model,setModel]=useState(false)
    // const [isModel,setIsModel]=useState("");
    const [books,dispatch]=useReducer(Reducer,{
      book:BookList,
      model: false,
      isModel: "",
    })
    const [newBook,setNewbook]=useState("")

    const handelSubmit=(event)=>{
        event.preventDefault();
        const addBook={id: new Date().getTime().toString(),
                              name:newBook};
        dispatch({type: "ADD", payload:addBook});
        setNewbook("");
        // alert(newBook);
        // setBook((preArray)=>{
        //     const addBook={id: new Date().getTime().toString(),
        //                     name:newBook};
        //     return [...preArray,addBook];
        // })
        // setModel(true);
        // setIsModel("book is added");
    }
    const handelRemove=(id)=>{
      // alert(id);
      dispatch({type: "REMOVE",payload: id})
    }
  return (
    <div>
      <h1>Book List</h1>
      <form onSubmit={handelSubmit}>
        <input type="text" value={newBook} onChange={(e)=>{
            setNewbook(e.target.value);
        }}/>
        <button type='submit'>Add book</button>
      </form>
      
            {books.book.map((item) =>{
                const {id,name}=item;
                // console.log(item);
              return   <li key={id}>{name}
              <button onClick={()=>{handelRemove(id)}}>remove</button></li> })}
            {books.model && <Model modelText={books.isModel}/>}
        
    </div>
  )
}

export default UseReducter
