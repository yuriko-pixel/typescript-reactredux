export type cartState = {
    id: number,
    title: string,
    price: number,
    img: string
}

export type itemState extends cartState= {
    id: number,
    title: string,
    price: number,
    img: string
}