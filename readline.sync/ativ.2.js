const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
//Subi num ônibus em Marrocos
//SUBI NUM IBUS EM MIRROCOS 26