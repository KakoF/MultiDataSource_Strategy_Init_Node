const assert = require('assert')

const Postgres = require('./../db/strategies/postgres')

const Context = require('./../db/strategies/base/contextStrategy')


const context = new Context(new Postgres())
const MOCK_HEROIS_CADASTRAR = { nome: 'Gavião Negro', poder: 'Flexas'}
const MOCK_HEROIS_ATUALIZAR = { nome: 'Batman', poder: 'Dinheiro'}

describe('Postgres Strategy', function(){
    this.timeout(Infinity)

    this.beforeAll(async function (){
        await context.connect()
        await context.delete()
        await context.create(MOCK_HEROIS_ATUALIZAR)
    })
    it('PostgresSQL Connection', async function () {
        const result = await context.isConnected()
        assert.equal(result, true)
    })
    it('Cadastrar', async function () {
        const result = await context.create(MOCK_HEROIS_CADASTRAR)
        delete result.id
        assert.deepEqual(result, MOCK_HEROIS_CADASTRAR)
    })
    it('Listar', async function(){ 
        const [result] = await context.read({nome: MOCK_HEROIS_CADASTRAR.nome})
        delete result.id
        assert.deepEqual(result, MOCK_HEROIS_CADASTRAR)
    })
    it('Atualizar', async function(){ 
        const [itemAtualizar] = await context.read({nome: MOCK_HEROIS_ATUALIZAR.nome})
        const novoItem = {
            ...MOCK_HEROIS_ATUALIZAR, nome : 'Mulher Maravilha'
        }
        const [result] = await context.update(itemAtualizar.id, novoItem)
        const [itemAutalizado] = await context.read({id: itemAtualizar.id})
        // REST/SPREAD da um merge nos objetos ou sapara-los
        assert.deepEqual(result, 1)
        assert.deepEqual(itemAutalizado.nome, novoItem.nome)
    })
    it('Remover por id', async function(){ 
        const [item] = await context.read({})
        const result = await context.delete(item.id)
        assert.deepEqual(result, 1)
    })
})