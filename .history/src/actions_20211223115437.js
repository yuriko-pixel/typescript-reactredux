export const fetchCreator = () => {
    return {type: 'isFetching', payload: true}
}

export const fetchShopCreator = async () => {
    try {

    } catch(error) {
        
        return {type: 'cart', payload: []}
    }
    const shopData = await axios.get();
}