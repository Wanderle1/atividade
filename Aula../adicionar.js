let residencias = require('./residencias')

function adicionar(prompt, callback){
    let bairro = prompt('Digite um Bairro: ')
    let rua = prompt('Digite uma Rua: ')
    let numero = prompt('Digite o Número da Residencia: ')
    residencias.push({bairro: bairro, rua: rua, numero: numero})
    console.log('Adicionado com Sucesso')
    callback()
}

module.exports = adicionar