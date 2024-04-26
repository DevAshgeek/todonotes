import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import todoReducer from "./todoReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    todo: todoReducer,
})


export default rootReducer;
