import { combineReducers } from "redux";
import Productreducer from "./ProductsReducer";
import Detailreducer from "./Detailreducer";
import AddtocartReducer from "./AddtocartReducer";

const rootReducer = combineReducers({
    Product: Productreducer,
    Details:Detailreducer,
    CartItems:AddtocartReducer,
})

export default rootReducer;
