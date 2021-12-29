import { fetchShopAction } from "./actions";

export const fetchData = () => {
    return async dispatch => {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        dispatch(fetchShopAction(data))
      };
  }