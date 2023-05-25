import { legacy_createStore as createStore } from "redux";
import {combineReducers} from "redux"
import reducer from "../reducer/Reducer";
import reducer2 from "../reducer/Reducer2";
import AddressReducer from "../reducer/AddressReducer";
const rootreducer = combineReducers({reducer,reducer2,AddressReducer})
const store = createStore(rootreducer);

export default store;