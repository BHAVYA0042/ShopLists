import { useDispatch, useSelector } from "react-redux";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ShopCard from "./shopCard";
import "./styles.css"
import Filter from "./filter";
import { filter_action } from "../store/main";

function Display(){
  const dispatch=useDispatch();
  const filterOpen=useSelector(state=>state.filter_sec.isOpen);
  const list=useSelector(state=>state.shop_list.shops);
  const filterList=useSelector(state=>state.shop_list.filteredShops);
  const filterApplied=useSelector(state=>state.shop_list.filterApplied);
  function openFilter(){
    dispatch(filter_action.toggleFilter())
  }
  let finalList=list;
  if (filterApplied===true){
    finalList=filterList 
  }else{
    finalList=list;
  }
  return(
    <div className="display">
      <FilterAltIcon className="filterButton" style={{height: '60px', width: '60px' }} onClick={openFilter}/>
      {filterOpen && <Filter />}
      <div className="infoClass">
        {filterApplied && filterList.length===0 && <h2 class="info">No such shops.</h2>}
        {filterApplied && filterList.length>0 && <h2 class="info">Filters Applied.</h2>}
      </div>
      <div className="shop_grid">
        {finalList.map((item)=>{
          return(
            <ShopCard 
            key={item.id}
            id={item.id}
            name={item.name}
            area={item.area}
            cate={item.category}
            op_date={item.open_date}
            cl_date={item.close_date}
            status={item.status}
          />
          )
        })}
      </div>
    </div>
  

  )
}
export default Display;