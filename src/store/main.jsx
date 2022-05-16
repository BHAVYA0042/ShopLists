import { configureStore } from "@reduxjs/toolkit";
import filter_slice from "./filterSlice";
import shop_slice from "./shop_data";
import form_slice from "./form_slice";
export const shop_action=shop_slice.actions;
export const filter_action=filter_slice.actions;
export const form_action=form_slice.actions;
export const store=configureStore({
  reducer:{
    shop_list:shop_slice.reducer,
    filter_sec:filter_slice.reducer,
    show_form:form_slice.reducer
  }
})

