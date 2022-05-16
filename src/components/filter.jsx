import { useDispatch } from "react-redux";
import { filter_action, shop_action } from "../store/main";
import { useState } from "react";
function Filter(){
  const [filterInput,setFilterInput]=useState({
    area:"",
    category:"",
    status:""
  });
  const dispatch=useDispatch();
  function changeHandler(event){
    event.preventDefault();
    const {name,value}=event.target;
    setFilterInput((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
    
  }
  function filterHandler(event){
    event.preventDefault();
    console.log(filterInput);
    dispatch(shop_action.filterShop(filterInput))
;

  }
  function clearHandler(event){
    event.preventDefault();

    dispatch(shop_action.removeFilter())
    setFilterInput({
      area:"",
      category:"",
      status:""
    })
  }
  return(
    <div className="filter_box">
      <form className="filter_form" >
        <div>
          <input type="text" list="areas" name="area" onChange={changeHandler} value={filterInput.area} placeholder="Area"/>
          <datalist id="areas">
            <option value="Thane"></option>
            <option value="Pune"></option>
            <option value="Mumbai Suburban"></option>
            <option value="Nashik"></option>
            <option value="Nagpur"></option>
            <option value="Ahmednagar"></option>
            <option value="Solapur"></option>
          </datalist>
        </div>

        <div>
          <input type="text" list="type" name="category" onChange={changeHandler} value={filterInput.category} placeholder="Category"/>
          <datalist id="type">
            <option value="Grocery"></option>
            <option value="Butcher"></option>
            <option value="Baker"></option>
            <option value="Chemist"></option>
            <option value="Stationery Shop"></option>
          </datalist>
        </div>

        <div className="radioInput" onChange={changeHandler}>
          <input type="radio" name="status" value="open" />
          <label>Open</label>
          <input type="radio" name="status" value="close" />
          <label>Close</label>
        </div>

        <button onClick={filterHandler}>Apply Filters</button>
        <button onClick={clearHandler}>Clear Filters</button>

      </form>
    </div>
  )
}

export default Filter;