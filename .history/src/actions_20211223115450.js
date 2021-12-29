export const fetchCreator = () => {
    return {type: 'isFetching', payload: true}
}

export const fetchShopCreator = async () => {
    try {
        const shopData = await axios.get();
    } catch(error) {
        console.log(error);
        return {type: 'cart', payload: []}
    }
    
}