import { product, 
    purchase, 
    users, 
    createUser, 
    getAllUsers,
    createProduct , 
    getAllProduct, 
    getProductId,
    queryProductsByName,
    createPurchase,
    getAllPurchasesFromUserId,
} from "./database"

import { CATEGORY } from "./types"
console.log("ola luizão")


// console.log(users)
// console.log(product)
// console.log(purchase)

//USER

console.log(createUser("lulu", "lulu@gmail", "1234"))

const listaDeUsuario = getAllUsers()
console.log(listaDeUsuario)

// PRODUCT

console.log(createProduct("tv", "tv 4k", "R$400", CATEGORY.ELECTRONICS))

const listaDeProduto = getAllProduct()
console.log(listaDeProduto)

console.log(getProductId("fogão"))

console.log(queryProductsByName("f"))

//PURCHASE

console.log(createPurchase("luiz", "mouse", "2" , "R$240" ))

const listaDeCompras = getAllPurchasesFromUserId("maria")
console.log(listaDeCompras)