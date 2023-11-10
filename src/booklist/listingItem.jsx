import React, { useState } from 'react'

let BookList=[
    {
        id:1,
        name: "javascript",
    },
    {
      id:1,
      name: "javascript",
    },
    {
      id:1,
      name: "javascript",
    }
]
const Model=({modelText})=>{
    return <p>{modelText}</p>

}

const UseReducter = () => {
    const [book,setBook]=useState(BookList);
    const [model,setModel]=useState(false)
    const [isModel,setIsModel]=useState("");
    const [newBook,setNewbook]=useState("")

    const handelSubmit=(event)=>{
        event.preventDefault();
        alert(newBook);
        setBook((preArray)=>{
            const addBook={id: new Date().getTime().toString(),
                            name:newBook};
            return [...preArray,addBook];
        })
        setModel(true);
        setIsModel("book is added");
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
      
            {book.map((item) =>{
                const {id,name}=item;
                // console.log(item);
              return <p key={id}>{name}</p>
            })}
            {model && <Model modelText={isModel}/>}
        
    </div>
  )
}

export default UseReducter
