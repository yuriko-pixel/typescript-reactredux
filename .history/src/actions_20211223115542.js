
export const fetchCreator = () => {
    return {type: 'isFetching', payload: true}
}

export const fetchShopCreator = async () => {
    try {
        const shopData = await fetch().then(res => res.json());
        return {type: 'cart', payload: shopData}
    } catch(error) {
        console.log(error);
        return {type: 'cart', payload: []}
    }
}