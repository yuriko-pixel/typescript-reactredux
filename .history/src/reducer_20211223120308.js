import { combineReducers } from "redux";
import { useDispatch } from "react-redux";

const dispatch = useDispatch()

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

export const rootReducer = combineReducers({
    fetchReducer,
    shopReducer,
    cartReducer
})