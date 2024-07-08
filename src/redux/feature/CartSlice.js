import {createSlice} from '@reduxjs/toolkit'
const initialState = {
    carts:[]
}

// card slice
const cartSlice = createSlice({
    name:"cartslice",
    initialState,
    reducers:{
        // add to cart
        addToCart:(state,action)=>{
            let iteamIndex = state.carts.findIndex((iteam)=>iteam.id === action.payload.id)
          
            if(iteamIndex>=0){
                state.carts[iteamIndex].qnty +=1
            }
            else{
                let temp = {...action.payload, qnty:1 }
                // console.log("else............else")
                state.carts = [...state.carts,temp]
            }
           
        },

        // remove particular iteam
        removeToCart:(state,action)=>{
            const data = state.carts.filter((ele)=>ele.id !== action.payload)
            state.carts = data
        },

        // remove single iteam
        removeSingleIteam:(state,action)=>{
            const iteamIndex = state.carts.findIndex((iteam)=>iteam.id === action.payload.id)
            if(state.carts[iteamIndex].qnty>=1){
                state.carts[iteamIndex].qnty -= 1
            }
        },
      // emptycart all iteam
      emptyCart:(state,action)=>{
        state.carts = []
      }
    }
})


export const {addToCart,removeToCart,removeSingleIteam,emptyCart} = cartSlice.actions;
export default cartSlice.reducer;