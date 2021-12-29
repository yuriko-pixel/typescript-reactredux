
export const fetchCreator = () => {
    return {type: 'isFetching', payload: true}
}

export const fetchShopCreator = (data) => {
    return {type: 'add', payload: data}
  }

export const fetchShopCreator = async () => {
    try {
        const shopData = await fetch().then(res => res.json());
        console.log(shopData);
        return {type: 'addCart', payload: shopData}
    } catch(error) {
        console.log(error);
        return {type: 'addCart', payload: []}
    }
}