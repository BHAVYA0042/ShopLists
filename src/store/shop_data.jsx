import {createSlice} from "@reduxjs/toolkit";
const shop_initial_state={
  shops:[],
  filteredShops:[],
  filterApplied:false,
  isPresent:false,
  isEmpty:true,
}
const shop_slice=createSlice({
  name:'shop',
  initialState:shop_initial_state,
  reducers:{
    addShop(state,action){
      state.isEmpty=false;
      const newItem=action.payload;
      const existingItem=state.shops.find(shop=>shop.id===newItem.id);
      if(!existingItem){
        state.shops.push({
          id:newItem.id,
          name:newItem.name,
          area:newItem.area,
          category:newItem.category,
          open_date:newItem.open_date,
          close_date:newItem.close_date,
          status:newItem.status
        })
        state.isPresent=false;
      }
      else{
        state.isPresent=true;
        existingItem.name=newItem.name;
        existingItem.area=newItem.area;
        existingItem.category=newItem.category;
        existingItem.open_date=newItem.open_date;
        existingItem.close_date=newItem.close_date;
        existingItem.status=newItem.status;
      }
    },
    removeShop(state,action){
      const id=action.payload;
      state.shops=state.shops.filter(shop=>shop.id!==id);
      if(state.shops.length===0){
        state.isEmpty=true;
      }
    },
    filterShop(state,action){
      state.filterApplied=true;
      const area=action.payload.area;
      const cat=action.payload.category;
      const status=action.payload.status;
      let isOpen="";
      if(status==="close"){
        isOpen=false
      }
      if(status==="open"){
        isOpen=true
      }


      if (area.length>0 && cat.length>0 && status.length>0){
        console.log("sabme");
        state.filteredShops=state.shops.filter(shop=>{
          return shop.category===cat  && shop.area===area && shop.status===isOpen
        })
      }
      else{
        if(area.length>0){
          console.log("in area");
          if(cat.length>0 || status.length>0){
            state.filteredShops=state.shops.filter(shop=>{
              return shop.area===area && (shop.category===cat  || shop.status===isOpen)
            })
          }
          else{
            state.filteredShops=state.shops.filter(shop=>{
              return shop.area===area
            })
          }
        }
        if(cat.length>0){
          console.log("in category");
          if(area.length>0 || status.length>0){
            state.filteredShops=state.shops.filter(shop=>{
              return shop.category===cat && (shop.area===area  || shop.status===isOpen)
            })
          }
          else{
            state.filteredShops=state.shops.filter(shop=>{
              return shop.category===cat
            })
          }
        }
        if(status.length>0){
          console.log("in status");
          if(area.length>0 || cat.length>0){
            state.filteredShops=state.shops.filter(shop=>{
              return shop.status===isOpen && (shop.area===area  || shop.category===cat)
            })
          }
          else{
            state.filteredShops=state.shops.filter(shop=>{
              return shop.status===isOpen
            })
          }
        }
      }
    },
    removeFilter(state){
      state.filteredShops=[];
      state.filterApplied=false;
    },
    removeShopFromFilter(state,action){
      const id=action.payload;
      state.filteredShops=state.filteredShops.filter(shop=>shop.id!==id);
    }
  }
})

export default shop_slice;