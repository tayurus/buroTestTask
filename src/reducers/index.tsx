import { combineReducers } from "redux";

// import { form } from "./form.reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer
});

export default rootReducer;
