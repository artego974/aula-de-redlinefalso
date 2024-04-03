/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console */

// Exercicio 3:

// a)
const listaDeTarefas = []

// b)
const tarefa1 = readlineSync.question('Me fale uma tarefa que precise fazer: ');
const tarefa2 = readlineSync.question('Me fale a segunda tarefa que precise fazer: ');
const tarefa3 = readlineSync.question('Me fale a terceira tarefa que precise fazer: ');

listaDeTarefas.push(tarefa1);
listaDeTarefas.push(tarefa2);
listaDeTarefas.push(tarefa3);

// c)
console.log(listaDeTarefas);

// d)
const realizou = readlineSync.question('Me fale um indice da tarefa que voce ja terminou (0,1 ou 2): ');

// e)

listaDeTarefas.splice(realizou,1);

// f)

console.log(listaDeTarefas)
    

const fruits = ['banana', 'morango', 'abacaxi','laranja','ameixa']
function findAbacaxiIndex(array) {
    let index;
}
function findAbacaxi(fruit,i) {
    if (fruit == 'abacaxi') {
        index = i
        return true
    }
}

array.filter(findAbacaxi);
return index

const AbacaxiIndex = findAbacaxiIndex(fruits)
console.log("indice de 'abacaxi':", AbacaxiIndex);
console.log("tamanho do array", fruits.length);