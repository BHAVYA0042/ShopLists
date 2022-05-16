import { createSlice } from "@reduxjs/toolkit";
const form_slice=createSlice({
  name:'form',
  initialState:{
    showInput:false,
    showModal:false
  },
  reducers:{
    toggleInput(state){
      state.showInput=!state.showInput;
      state.showModal=!state.showModal;
    }
  }
})

export default form_slice;