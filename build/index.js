"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./database");
const types_1 = require("./types");
console.log("ola luizão");
console.log((0, database_1.createUser)("lulu", "lulu@gmail", "1234"));
const listaDeUsuario = (0, database_1.getAllUsers)();
console.log(listaDeUsuario);
console.log((0, database_1.createProduct)("tv", "tv 4k", "R$400", types_1.CATEGORY.ELECTRONICS));
const listaDeProduto = (0, database_1.getAllProduct)();
console.log(listaDeProduto);
console.log((0, database_1.getProductId)("fogão"));
console.log((0, database_1.queryProductsByName)("f"));
console.log((0, database_1.createPurchase)("luiz", "mouse", "2", "R$240"));
const listaDeCompras = (0, database_1.getAllPurchasesFromUserId)("maria");
console.log(listaDeCompras);
//# sourceMappingURL=index.js.map