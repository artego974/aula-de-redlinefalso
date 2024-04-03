const readlineSync = require('readline-sync');

const frase = readlineSync.question('fale uma frase: ')


const separado = frase.split(' ')
console.log(separado)