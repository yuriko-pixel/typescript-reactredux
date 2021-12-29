import { combineReducers } from "redux";

const fetchReducer = (state = false, action) => {
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