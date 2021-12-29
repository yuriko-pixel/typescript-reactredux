export type cartState = {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    img: string,
    rating: [
        rate: number,
        count: number
    ]
}

export type itemState = {
    id: number,
    title: string,
    price: number,
    img: string
}