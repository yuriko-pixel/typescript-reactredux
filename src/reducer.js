import { combineReducers } from "redux";
import {useSelector, useDispatch} from 'react-redux'
import { fetchShopAction } from "./actions";

export const cartReducer = (state = {cart: []}, action)  => {
    switch(action.type) {
        case 'addCart': 
        return {cart: [...state.cart, action.payload]}
        default:
            return state;
    }
}

export const fetchReducer = (state = {items: []}, action) => {
switch(action.type) {
    case 'add': return {items: [...state.items, action.payload]}
    default: return state
}
}

export const rootReducer = combineReducers({
    items: fetchReducer,
    cart: cartReducer
})