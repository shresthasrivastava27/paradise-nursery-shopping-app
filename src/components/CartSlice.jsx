import {createSlice} from '@reduxjs/toolkit';
const cartSlice=createSlice({name:'cart',initialState:{items:[]},reducers:{
addItem:(state,action)=>{const x=state.items.find(i=>i.id===action.payload.id); if(x)x.quantity+=1; else state.items.push({...action.payload,quantity:1});},
removeItem:(state,action)=>{state.items=state.items.filter(i=>i.id!==action.payload);},
updateQuantity:(state,action)=>{const {id,quantity}=action.payload; const x=state.items.find(i=>i.id===id); if(!x)return; if(quantity<=0)state.items=state.items.filter(i=>i.id!==id); else x.quantity=quantity;}}});
export const {addItem,removeItem,updateQuantity}=cartSlice.actions; export default cartSlice.reducer;
