import { useState,Fragment } from "react";
import { shop_action,form_action } from "../store/main";
import {useDispatch} from "react-redux";



function Form(props){
  const dispatch=useDispatch();

  const [input,setInput]=useState({
    name:"",
    area:"",
    category:"",
    id:"",
    open_date:"",
    close_date:""
  })



  function changeHandler(event){
    event.preventDefault();
    const {name,value}=event.target;
    setInput((prev)=>{
      return{
        ...prev,
        [name]:value
      }
    })
  

    
  }
  function submitHandler(event){
    event.preventDefault();
    const closing=new Date(input.close_date);
    const opening=new Date(input.open_date)
    const curr_date=new Date()
    let open=closing>curr_date && curr_date>opening;
    dispatch(shop_action.addShop({
      ...input,
      status:open,
    }))



    setInput({
      name:"",
      area:"",
      category:"",
      id:"",
      open_date:"",
      close_date:"",
    });
    dispatch(form_action.toggleInput())
  }
  return(
    <Fragment>
    <div className="backdrop" onClick={props.onConfirm}></div>
    <div className="modal">
      <form className="inputForm" onSubmit={submitHandler}>
        <div className="item">
          <input type="text" name="name" onChange={changeHandler} value={input.name} placeholder="Shop Name" required/>
        </div>
        <div className="item">
          <input type="text" list="areas" name="area" onChange={changeHandler} value={input.area} placeholder="Area" required/>
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
        <div className="item">
          <input type="text" list="type" name="category" onChange={changeHandler} value={input.category} placeholder="Category" required/>
          <datalist id="type">
            <option value="Grocery"></option>
            <option value="Butcher"></option>
            <option value="Baker"></option>
            <option value="Chemist"></option>
            <option value="Stationery"></option>
          </datalist>
        </div>
        <div className="item">
          <input type="text" name="id" onChange={changeHandler} value={input.id} placeholder="Unique ID" maxLength="5" required/>
        </div>
        <div className="item_date">
          <label htmlFor="">Opening Date</label>
          <input type="date" min="2000-01-01" name="open_date" onChange={changeHandler}value={input.open_date} placeholder="Opening Date" required/>
        </div>

        <div className="item_date">
        <label htmlFor="">Closing Date</label>
          <input type="date" min={input.open_date} name="close_date" onChange={changeHandler}value={input.close_date} placeholder="Closing Date" required/>
        </div>
        <button className="item">Submit</button>
      </form>
    </div>
    </Fragment>
  )
}
export default Form;