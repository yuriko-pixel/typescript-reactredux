import { combineReducers } from "redux";

export const fetchReducer = (state = false, action) => (dispatch) => {
    switch(action.type) {
        case 'Fetching': 
            
        default:
            return state;
    }
}

export const shopReducer = (state = false, action) => (dispatch) => {
    switch(action.type) {
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