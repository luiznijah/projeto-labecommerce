"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllPurchasesFromUserId = exports.createPurchase = exports.queryProductsByName = exports.getProductId = exports.getAllProduct = exports.createProduct = exports.getAllUsers = exports.createUser = exports.purchase = exports.product = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
exports.product = [
    {
        id: "mouse",
        name: "mouse-zica",
        price: "R$ 120,00",
        category: types_1.CATEGORY.ELECTRONICS,
    },
    {
        id: "teclado",
        name: "teclado-gamer",
        price: "R$ 180,00",
        category: types_1.CATEGORY.ELECTRONICS,
    },
    {
        id: "fogão",
        name: "fogão-eletrico",
        price: "R$ 800,00",
        category: types_1.CATEGORY.APPLIANCES,
    }
];
exports.purchase = [
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
];
function createUser(id, email, password) {
    const newUser = { id, email, password };
    exports.users.push(newUser);
    return console.log("cadastro realizado com sucesso");
}
exports.createUser = createUser;
function getAllUsers() {
    return exports.users;
}
exports.getAllUsers = getAllUsers;
function createProduct(id, name, price, category) {
    const newProduct = { id, name, price, category };
    exports.product.push(newProduct);
    return console.log("Produto criado com sucesso");
}
exports.createProduct = createProduct;
function getAllProduct() {
    return exports.product;
}
exports.getAllProduct = getAllProduct;
function getProductId(id) {
    return exports.product.find(product => product.id === id);
}
exports.getProductId = getProductId;
function queryProductsByName(query) {
    const queryLowerCase = query.toLowerCase();
    return exports.product.filter(product => product.name.toLowerCase().includes(queryLowerCase));
}
exports.queryProductsByName = queryProductsByName;
function createPurchase(userId, productId, quantity, totalPricce) {
    const newPurchase = { userId, productId, quantity, totalPricce };
    exports.purchase.push(newPurchase);
    return console.log("Compra realizada com sucesso");
}
exports.createPurchase = createPurchase;
function getAllPurchasesFromUserId(userIdToSearch) {
    const userPurchase = exports.purchase.filter(purchase => purchase.userId === userIdToSearch);
    return userPurchase;
}
exports.getAllPurchasesFromUserId = getAllPurchasesFromUserId;
//# sourceMappingURL=database.js.map