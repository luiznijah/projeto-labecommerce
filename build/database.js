"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.users = void 0;
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
        category: "eletronicos",
    },
    {
        id: "teclado",
        name: "teclado-gamer",
        price: "R$ 180,00",
        category: "eletronicos",
    },
    {
        id: "fogão",
        name: "fogão-eletrico",
        price: "R$ 800,00",
        category: "eletrodomesticos",
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
//# sourceMappingURL=database.js.map