import { combineReducers } from "redux";
import {useSelector, useDispatch} from 'react-redux'
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



export function fetchData() {
    const dispatch = useDispatch()
fetch('https://fakestoreapi.com/products')
.then(res => res.json())
.then(result => dispatch(fetchShopCreator(result)))
}
  
export const rootReducer = combineReducers({
    fetchReducer,
    shopReducer,
    cartReducer
})