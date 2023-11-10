export const Reducer=(state,action)=>{
    if(action.type==="ADD")
    {
      const allbook=[...state.book,action.payload];
      return{
        ...state,
        book:allbook,
        model:true,
        isModel: "the book is add",
      }
    }
      if(action.type==="REMOVE"){
        let filtedBook=[...state.book].filter((item)=>
        ( item.id!=action.payload)
        )
        return {...state,
          book:filtedBook,
          model:true,
          isModel: "the book is remove"
        };
      }
    
    return state;
  
  }