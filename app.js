const prompt = require('prompt-sync')()

let contatos = require('./residencias')
const listar = require('./listar')
const adicionar = require('./adicionar')
const editar = require('./editar')
const excluir = require('./excluir')

function menu(){
    console.log('\n1 Listar \n2 Adicionar \n3 Atualizar \n4 Excluir \n0 Sair')
    let opcao = prompt('Digite um numero: ')
    let index
    switch(opcao){
        case '1':
            listar(menu)
            menu()
            break;
        case '2': 
            adicionar(prompt, menu)
            break;
        case '3':
            editar(prompt, menu)    
            break;
        case '4':
            excluir(prompt, menu)
            break;
        case '0':     
            break;
        default:
            throw new Error('Número Invalido')
            break;
    }
}

menu()