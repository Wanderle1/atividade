let residencias = require('./residencias')

function listar(callback){
    if(residencias.length > 0){
        residencias.forEach((residencia, index) => {
            console.log(`${index +1} Bairro: ${residencia.bairro}
    Rua: ${residencia.rua}
    Número: ${residencia.numero} `)
        })
    }else{
        console.log('Não a residencias cadastradas')
        callback()
    }
}

module.exports = listar