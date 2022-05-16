import { useDispatch,useSelector} from "react-redux";
import { shop_action,form_action } from "../store/main";
import "./styles.css";
import Form from "./form";
import PinDropIcon from '@mui/icons-material/PinDrop';
import StoreIcon from '@mui/icons-material/Store';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {titleCase} from "title-case";
import { Fragment } from "react";

function ShopCard(props){
  const dispatch=useDispatch();
  const showInput=useSelector(state=>state.show_form.showInput);
  const showModal=useSelector(state=>state.show_form.showModal);
  function editShop(){
    dispatch(form_action.toggleInput());
  }
  function hideInput(){
    dispatch(form_action.toggleInput());
  }
  function removeShop(){
    dispatch(shop_action.removeShop(props.id));
    dispatch(shop_action.removeShopFromFilter(props.id))
  }
 
  return(
    <Fragment>
      {showInput && showModal && <Form onConfirm={hideInput}/>}
      <div className="card">
      <div className="dp">
        <img src="images\istockphoto-1252652997-612x612-removebg-preview.png" alt="" />
      </div>
       
        <div className="disp">
          <h1><LocalOfferIcon/>{titleCase(props.name)}</h1>
          <h3><StoreIcon/>{titleCase(props.cate)} shop</h3>
          <h3><PinDropIcon/>{titleCase(props.area)}</h3>
          { !props.status ? 
          <span className="red">CLOSE</span>:
          <span className="green">OPEN</span>
          }
        </div>

        <ul>
          <li><EditIcon onClick={editShop}/></li>
          <li><DeleteIcon onClick={removeShop}/></li>
        </ul>
      </div>
    </Fragment>
  )
}
export default ShopCard;