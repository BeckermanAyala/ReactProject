import { createStore } from "redux";
import AllReducers from "./index";

const store= createStore(
    AllReducers,
    
);
store.getState()
export default store;