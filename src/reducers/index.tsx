import { combineReducers } from "redux";

import { input } from "./input.reducer";
import { reducer as formReducer } from "redux-form";

const rootReducer = combineReducers({
  form: formReducer,
  input
});

export default rootReducer;
