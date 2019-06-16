const ICrud = require('./interfaces/interfaceCrud')

class Postgres extends ICrud {
    constructor(){
        super()
    }
    create(item){
        console.log('item foi salvo em postgres')
    }
}


module.exports = Postgres