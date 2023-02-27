import { combineReducers } from "redux"
import amountReduer from "./amountReducer";


const reducers = combineReducers({
    amount: amountReduer
})

export default reducers