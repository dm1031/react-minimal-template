const { syncAndSeed } = require('../db/index');
const expect = require('chai').expect;

describe('connection to database', () => {
    it('the database exists', () => {
        return syncAndSeed()
            .then( (connection) => {
                return expect(connection).to.exist;
        })
    })
})