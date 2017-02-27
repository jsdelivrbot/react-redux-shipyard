import { combineReducers } from "redux";
import ShipReducer from "./reducer_ship";

const rootReducer = combineReducers({
  shipyard : ShipReducer
});

export default rootReducer;
