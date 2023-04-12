
console.log("seu aplicativo foi iniciado corretamente ")

const nome = process.argv[2]
const idade = process.argv[3]

const novaIdade = +idade + 8

console.log(`Olá tudo bem ${nome}. agora você tem apenas ${idade} anos, mas daqui a 8 anos você tera ${novaIdade}`)



