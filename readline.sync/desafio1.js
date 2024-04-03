const comida = ['sushi', "batata frita", 'pizza', 'hamburger', 'calabresa']
console.log( comida)
console.log(`essas são minhas comidas preferidas

${comida[0]}
${comida[1]}
${comida[2]}
${comida[3]}
${comida[4]}

`)

const readlineSync = require('readline-sync')
const uComida = readlineSync.question('qual sua comida fav: ')
comida.push(uComida)

console.log( comida)
console.log(`essas são minhas comidas preferidas

${comida[0]}
${comida[1]}
${comida[2]}
${comida[3]}
${comida[4]}

`)