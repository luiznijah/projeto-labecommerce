import { TUser, TProduct, TPurchase, CATEGORY } from "./types";

export const users: TUser[] = [
  {
    id: "luiz",
    email: "luiz@gmail.com",
    password: "1a2b3c",
  },
  {
    id: "maria",
    email: "maria@gmail.com",
    password: "1asdfb3c",
  },
  {
    id: "conway",
    email: "conway@gmail.com",
    password: "1232b3c",
  },
];

export const product: TProduct[] = [
  {
    id: "mouse",
    name: "mouse-zica",
    price: "R$ 120,00",
    category: CATEGORY.ELECTRONICS,
  },
  {
    id: "teclado",
    name: "teclado-gamer",
    price: "R$ 180,00",
    category: CATEGORY.ELECTRONICS,
  },
  {
    id: "fogão",
    name: "fogão-eletrico",
    price: "R$ 800,00",
    category: CATEGORY.APPLIANCES,
  }
];


export const purchase: TPurchase[] = [
    {
    userId: "luiz",
    productId: "mouse",
    quantity: "2",
    totalPricce: "R$ 240,00",
    },
    {
    userId: "maria",
    productId: "teclado",
    quantity: "1",
    totalPricce: "R$ 180,00",
    },
    {
    userId: "conway",
    productId: "fogão",
    quantity: "1",
    totalPricce: "R$ 800,00",
    },
]

// USER

export function createUser( id:string, email:string, password:string){
  const newUser = {id, email, password}
  users.push(newUser)
  return console.log("cadastro realizado com sucesso")

}

export function getAllUsers(): TUser[]{
  return users
}
 // PRODUCT

 export function createProduct(id: string, name: string, price: string, category: CATEGORY){

  const newProduct = {id, name, price, category}
  product.push(newProduct)

  return console.log("Produto criado com sucesso")
 }


export function getAllProduct(): TProduct[]{
  return product
}

export function getProductId(id: string): TProduct | undefined {
  
  return product.find(product => product.id === id )
}

export function queryProductsByName(query: string): TProduct[] {
  const queryLowerCase = query.toLowerCase()

  return product.filter(product => product.name.toLowerCase().includes(queryLowerCase))
}

// PURCHASE

export function createPurchase(userId: string, productId: string, quantity: string, totalPricce: string){

  const newPurchase = {userId, productId, quantity, totalPricce}
  purchase.push(newPurchase)

  return console.log("Compra realizada com sucesso")

}

export function getAllPurchasesFromUserId(userIdToSearch: string): any[]{
  const userPurchase = purchase.filter(purchase => purchase.userId === userIdToSearch)
  return userPurchase
} 

