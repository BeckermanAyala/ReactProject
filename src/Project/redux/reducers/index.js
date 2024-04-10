import { combineReducers } from "redux";
import {CartReducer} from "./CartReducer"
import ProductReducer from "./productsReducer";


 const AllReducers = combineReducers({
    

    cartReducer: CartReducer,
    productReducer  : ProductReducer,
    
 });
 export default AllReducers;