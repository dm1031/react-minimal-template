const { User, Thing, Favorite } = require('../db/models');
const seed = require('../db/seed')
const expect = require('chai').expect;


describe('the seeded data', () => {
    it('there are 4 users', () => {
        return seed
            .then( () => {
                return User.findAll();
            })
            .then(users => expect(users.length).to.equal(4))
    })
    it('there are 5 things', () => {
        return seed
            .then( () => {
                return Thing.findAll();
            })
            .then(things => expect(things.length).to.equal(5))
    })
    it('moe has favorite things', () => {
        return seed
            .then( () => {
                return Favorite.findAll({
                    where: {
                        userId: 1
                    }
                })
            })
            .then(favorites => expect(favorites.length).to.equal(3))
    })
    it('larry has favorite things', () => {
        return seed
            .then( () => {
                return Favorite.findAll({
                    where: {
                        userId: 2
                    }
                })
            })
            .then(favorites => expect(favorites.length).to.equal(2))
    })
})