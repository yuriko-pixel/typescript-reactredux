import { combineReducers } from "redux";
import {useSelector, useDispatch} from 'react-redux'
import { fetchShopCreator } from "./actions";

export const fetchReducer = (state = false, action) => (dispatch) => {
    switch(action.type) {
        case 'isFetching':
        default:
            return state;
    }
}

export const shopReducer = (state = false, action) => (dispatch) => {
    switch(action.type) {
        case 'addCart': return {items: [...state.items, action.payload]}
        default:
            return state;
    }
}

export const cartReducer = (state = false, action) => (dispatch) => {
    switch(action.type) {
        default:
            return state;
    }
}

export const fetchData = () => {
    return async dispatch => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(fetchShopCreator(data))
      };
  }
  
const fetchReducer = (state = {items: []}, action) => {
switch(action.type) {
    case 'add': return {items: [...state.items, action.payload]}
    default: return state
}
}
export const rootReducer = combineReducers({
    fetchReducer,
    shopReducer,
    cartReducer
})