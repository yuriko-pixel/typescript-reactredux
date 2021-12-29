import { combineReducers } from "redux";
import {useSelector, useDispatch} from 'react-redux'
import { fetchShopAction } from "./actions";

export const shopReducer = (state = false, action) => (dispatch) => {
    switch(action.type) {
        case 'addCart': return {items: [...state.items, action.payload]}
        default:
            return state;
    }
}

export const cartReducer = (state = false, action) => (dispatch) => {
    switch(action.type) {
        case 'addCart': 
        console.log('called')
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