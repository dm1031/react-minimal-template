const { User, Thing, Favorite } = require('../db/models');
const { syncAndSeed } = require('../db/index');
const expect = require('chai').expect;

describe('models', () => {
    beforeEach( () => {
        return syncAndSeed();
    })
    describe('user model', () => {
        it('the model exists', () => {
            return expect(User).to.be.ok;
        })
        it('a user has a name of type string', () => {
            return User.create({ name: 'foo'})
                .then(user => expect(user.name).to.be.a('string'));
        })
    })
    describe('thing model', () => {
        it('the model exists', () => {
            return expect(Thing).to.be.ok;
        })
        it('a thing has a name of type string', () => {
            return Thing.create({ name: 'bazz' })
                .then(thing => expect(thing.name).to.be.a('string'));
        })
    })
    describe('model relationships', () => {
        it('a user can have a favorite thing', () => {
            return User.create({ name: 'foo' })
            .then( (user) => {
                return Favorite.create({ name: 'bazz', userId: user.id });
            })
            .then(favorite => expect(favorite.userId).to.equal(1));
        })
        it('a thing can have an associated user', () => {
            return Thing.create({ name: 'bar' })
                .then( (thing) => {
                    return Favorite.create({ name: 'bazz', thingId: thing.id })
                })
                .then(favorite => expect(favorite.thingId).to.equal(1));
        })
    })
})