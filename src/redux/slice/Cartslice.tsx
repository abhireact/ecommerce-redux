import {createSlice} from "@reduxjs/toolkit";

export const CartSlice = createSlice({
    name:"cartSlice",
    initialState:{
        cart: JSON.parse(localStorage.getItem("cart")as string) || []
    },
    reducers:{
 addTodoCart:(state,action)=>{
    const exist = state.cart.find((cur:any)=>cur.id===action.payload.id)
    if(exist){
        const newarray = state.cart.map((cur:any)=>{
            if(cur.id===action.payload.id){
                cur.qty = cur.qty +1
            }
            return cur
        })
          state.cart = newarray;
          localStorage.setItem("cart",JSON.stringify(newarray))
           return;
    }
    state.cart = [...state.cart,action.payload]
    localStorage.setItem("cart", JSON.stringify(state.cart));
 }
    }
})
export const {} = CartSlice