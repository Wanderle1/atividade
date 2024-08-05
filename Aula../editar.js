let residencia = require('./residencias')
const listar = require('./listar')

function editar(prompt, callback){
    if(residencia.length == 0){
        console.log('Não a residencias cadastradas')
        callback()
    }else{
        listar()
        let num = parseInt(prompt('Digite um número: '))
        if(num <= residencia.length){
            let novoBairro = prompt('Digite um novo Bairro: ')
            let novoRua = prompt('Digite uma nova Rua:')
            let novoNumero = prompt('Digite um novo número de residencia: ')
            residencia[num-1] = {bairro: novoBairro, rua: novoRua, numero: novoNumero}
            console.log('Editado com sucesso')
            callback()
        }else{
            throw new Error('Número Invalido')
            callback()
        }
    }
}

module.exports = editar