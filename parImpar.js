const numero = process.argv[2]

function getNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
  
  const numeroAleatorio = getNumeroAleatorio(10, 15)
  console.log(numeroAleatorio)
  
if(Number(numero) === Number(numeroAleatorio)){
    console.log(`Parabens você acertou o numero aleatorio escolhido é ${numeroAleatorio} `)
}else{
    console.log(`a que pena tente outra vez `)
}