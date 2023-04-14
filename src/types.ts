export type TUser = {
    id: string
    email: string
    password: string

}

export type TProduct = {
    id: string
    name: string
    price: string
    category: string
}

export type TPurchase = {
    userId: string
    productId: string
    quantity: string
    totalPricce: string
}