export const fetchCreator = () => {
    return {type: 'Fetching', payload: true}
}

export const fetchShopCreator = async () => {
    const shopData = await axios.get();
}