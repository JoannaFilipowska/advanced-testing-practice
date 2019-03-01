
import { connect } from "react-redux";
import {setSpecialText} from "../../actions"
import SpecialTextBox from "../../components/SpecialTextBox"
import UserButtonContainer from "../containers/"
function mapDispatchToProps(dispatch){
  return{
    set: function(txt){
      let action = setSpecialText(txt);
      dispatch(action);
    }
  }
}

const SpecialTextBoxContainer = connect(null, mapDispatchToProps)(SpecialTextBox);
export default SpecialTextBoxContainer;
