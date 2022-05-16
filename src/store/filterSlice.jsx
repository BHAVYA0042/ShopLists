import { createSlice } from "@reduxjs/toolkit";
const filter_slice=createSlice({
  name:'filter',
  initialState:{
    isOpen:false,
  },
  reducers:{
    toggleFilter(state){
      state.isOpen=!state.isOpen
    }
  }
})

export default filter_slice;