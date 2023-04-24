export type TUser = {
    id: string
    email: string
    password: string

}

export enum CATEGORY  {
    ACCESSORIES = "Acessórios",
    CLOTHES_AND_SHOES = "Roupas e calçados",
    ELECTRONICS = "Eletrônicos",
    APPLIANCES = "appliances"
}

export type TProduct = {
    id: string
    name: string
    price: string
    category: CATEGORY
}

export type TPurchase = {
    userId: string
    productId: string
    quantity: string
    totalPricce: string
}