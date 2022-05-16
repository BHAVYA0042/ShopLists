import Form from "./components/form";
import { useDispatch, useSelector } from "react-redux";
import Display from "./components/display";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Nav from "./components/navigation";
import { form_action } from "./store/main";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function App() {
  const dispatch=useDispatch();
  const showInput=useSelector(state=>state.show_form.showInput);
  const showModal=useSelector(state=>state.show_form.showModal);
  function addInput(){
    dispatch(form_action.toggleInput())
  }
  function hideInput(){
    dispatch(form_action.toggleInput())
  }
  const isZero=useSelector(state=>state.shop_list.isEmpty);
  return (
    <div className="App">
      <Nav />
      {isZero && <h3 className="direction">You can add shops by clicking <ArrowDownwardIcon/> </h3> }
      <AddCircleIcon className="addButton" style={{fontSize:100,color:"#ff9100"}} onClick={addInput} />
      {showInput && showModal && <Form onConfirm={hideInput}/>}
      {!isZero && <Display />}
    </div>
  );
}

export default App;
