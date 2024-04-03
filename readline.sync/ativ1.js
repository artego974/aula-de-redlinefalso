/*1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/

    const readlineSync = require("readline-sync");
    const nome = readlineSync.question('qual seu nome: ')
    const gmail = readlineSync.question('qual seu gmail: ')
    console.log('Seja bem-vinda(o)', nome)
    console.log('O e-mail', gmail, 'foi cadastrado com sucesso')