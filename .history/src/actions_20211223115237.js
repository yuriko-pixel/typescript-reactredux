export const fetchCreator = () => {
    return {type: 'isFetching', payload: true}
}

export const fetchShopCreator = async () => {
    try {

    } catch(e) {

    }
    const shopData = await axios.get();
}