
export const fetchCreator = () => {
    return {type: 'isFetching', payload: true}
}

export const fetchShopAction = (data) => {
    return {type: 'add', payload: data}
}
