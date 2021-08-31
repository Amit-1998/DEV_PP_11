import userReducer from "./reducers/userReducer";
import templateReducer from "./reducers/templateReducer";
import { combineReducers } from "redux";
import detailsReducer from "./reducers/detailsReducer";


let rootReducer = combineReducers({
      template: templateReducer,
      user: userReducer,
      details: detailsReducer
});
// rootReducers mein leftKeys shows all the states i.e template, user, details
export default rootReducer;