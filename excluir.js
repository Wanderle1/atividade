let residencias = require('./residencias')
const listar = require('./listar')

function excluir(prompt, callback){
    if(residencias.length == 0){
        console.log('Não a residencias cadastradas')
        callback()
    }else{
        listar()
        let opcao = parseInt(prompt('Digite um Número: '))
        if(opcao <= residencias.length){
            residencias.splice(opcao-1)
            console.log('Excluido com Sucesso')
            callback()
        }else{
            throw new Error('Número Invalido')
        }
    }
}

module.exports = excluir